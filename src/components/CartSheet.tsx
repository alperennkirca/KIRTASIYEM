import { CartItem } from '../types';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from './ui/sheet';
import { Minus, Plus, Trash2, CreditCard, Banknote, Tag } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getCampaignByCategory } from '../data/campaigns';
import { Campaign } from '../types/campaign';

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export function CartSheet({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartSheetProps) {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'bank-transfer'>('credit-card');

  // Calculate campaign discounts
  const calculateCampaignDiscount = (item: CartItem): { discount: number; campaign: Campaign | null } => {
    const campaign = getCampaignByCategory(item.category);
    if (!campaign) return { discount: 0, campaign: null };

    if (campaign.type === 'percentage' && campaign.discountValue) {
      // Percentage discount
      const discountAmount = (item.price * item.quantity * campaign.discountValue) / 100;
      return { discount: discountAmount, campaign };
    } else if (campaign.type === 'buyXPayY' && campaign.buyX && campaign.payY) {
      // Buy X Pay Y discount
      const groups = Math.floor(item.quantity / campaign.buyX);
      const freeItems = groups * (campaign.buyX - campaign.payY);
      const discountAmount = freeItems * item.price;
      return { discount: discountAmount, campaign };
    }

    return { discount: 0, campaign: null };
  };

  // Calculate totals
  let subtotal = 0;
  let totalCampaignDiscount = 0;
  const appliedCampaigns = new Map<string, Campaign>();

  items.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;
    
    const { discount, campaign } = calculateCampaignDiscount(item);
    totalCampaignDiscount += discount;
    
    if (campaign) {
      appliedCampaigns.set(campaign.category, campaign);
    }
  });

  const subtotalAfterDiscount = subtotal - totalCampaignDiscount;
  const FREE_SHIPPING_THRESHOLD = 500;
  const SHIPPING_COST = 29.90;
  const shippingCost = subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotalAfterDiscount + shippingCost;

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Sepetiniz boş!');
      return;
    }
    setCheckoutOpen(true);
  };

  const handleCompleteOrder = () => {
    toast.success('Siparişiniz başarıyla alındı! Teşekkür ederiz.');
    setCheckoutOpen(false);
    onClose();
    // Clear cart in parent component
    items.forEach(item => onRemove(item.id));
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="flex w-full flex-col sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Alışveriş Sepeti</SheetTitle>
            <SheetDescription>
              Sepetinizdeki ürünleri görüntüleyin ve yönetin
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 overflow-auto py-4">
            {items.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 text-6xl">🛒</div>
                <p className="text-gray-600">Sepetiniz boş</p>
                <p className="mt-2 text-sm text-gray-500">Ürün eklemek için alışverişe başlayın</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => {
                  const { discount, campaign } = calculateCampaignDiscount(item);
                  const itemTotal = item.price * item.quantity;
                  const itemFinalPrice = itemTotal - discount;
                  
                  return (
                    <div key={item.id} className="flex gap-4 rounded-lg border p-4">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="mb-1">{item.name}</h4>
                        <div className="flex items-center gap-2">
                          {discount > 0 ? (
                            <>
                              <p className="text-gray-400 line-through text-sm">{itemTotal.toFixed(2)} ₺</p>
                              <p className="text-purple-600">{itemFinalPrice.toFixed(2)} ₺</p>
                            </>
                          ) : (
                            <p className="text-purple-600">{itemTotal.toFixed(2)} ₺</p>
                          )}
                        </div>
                        {campaign && (
                          <Badge className="mt-1 bg-gradient-to-r from-green-500 to-emerald-500 text-xs">
                            <Tag className="mr-1 h-3 w-3" />
                            {campaign.discount}
                          </Badge>
                        )}
                        <div className="mt-2 flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="ml-auto h-8 w-8 text-red-500 hover:text-red-600"
                            onClick={() => onRemove(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <SheetFooter className="flex-col gap-4">
            {appliedCampaigns.size > 0 && (
              <div className="space-y-2 border-t pt-4">
                <div className="text-sm text-gray-600 mb-2">Uygulanan Kampanyalar:</div>
                {Array.from(appliedCampaigns.values()).map(campaign => (
                  <div key={campaign.id} className="flex items-center gap-2 text-sm">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500">
                      {campaign.icon} {campaign.discount}
                    </Badge>
                    <span className="text-gray-600">{campaign.title}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="space-y-2 border-t pt-4">
              {totalCampaignDiscount > 0 && (
                <>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Ara Toplam:</span>
                    <span className="text-gray-900">{subtotal.toFixed(2)} ₺</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-600">Kampanya İndirimi:</span>
                    <span className="text-green-600">-{totalCampaignDiscount.toFixed(2)} ₺</span>
                  </div>
                </>
              )}
              <div className="flex items-center justify-between">
                <span className="text-gray-900">Toplam:</span>
                <span className="text-2xl text-purple-600">{total.toFixed(2)} ₺</span>
              </div>
            </div>
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              size="lg"
              onClick={handleCheckout}
              disabled={items.length === 0}
            >
              Ödemeye Geç
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Checkout Dialog */}
      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Ödeme Yöntemi Seçin</DialogTitle>
            <DialogDescription>
              Alışverişinizi tamamlamak için ödeme yönteminizi seçin
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
              <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="credit-card" id="credit-card" />
                <Label htmlFor="credit-card" className="flex flex-1 cursor-pointer items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-600" />
                  <div>
                    <div>Kredi Kartı</div>
                    <div className="text-sm text-gray-500">Güvenli ödeme</div>
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                <Label htmlFor="bank-transfer" className="flex flex-1 cursor-pointer items-center gap-2">
                  <Banknote className="h-5 w-5 text-green-600" />
                  <div>
                    <div>Havale / EFT</div>
                    <div className="text-sm text-gray-500">Banka havalesi ile ödeme</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            <div className="rounded-lg bg-purple-50 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Ara Toplam:</span>
                <span className="text-sm">{subtotal.toFixed(2)} ₺</span>
              </div>
              {totalCampaignDiscount > 0 && (
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-green-600">Kampanya İndirimi:</span>
                  <span className="text-sm text-green-600">-{totalCampaignDiscount.toFixed(2)} ₺</span>
                </div>
              )}
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Kargo:</span>
                {shippingCost === 0 ? (
                  <span className="text-sm text-green-600">Ücretsiz</span>
                ) : (
                  <span className="text-sm">{shippingCost.toFixed(2)} ₺</span>
                )}
              </div>
              {subtotalAfterDiscount > 0 && subtotalAfterDiscount < FREE_SHIPPING_THRESHOLD && (
                <div className="mb-2 text-xs text-purple-600">
                  {(FREE_SHIPPING_THRESHOLD - subtotalAfterDiscount).toFixed(2)} ₺ daha alışveriş yapın, kargo bedava!
                </div>
              )}
              <div className="flex items-center justify-between border-t pt-2">
                <span className="text-gray-900">Toplam:</span>
                <span className="text-xl text-purple-600">{total.toFixed(2)} ₺</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setCheckoutOpen(false)}>
              İptal
            </Button>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={handleCompleteOrder}
            >
              Siparişi Tamamla
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
