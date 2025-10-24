import { Product } from '../types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ShoppingCart, Package, Tag, Info } from 'lucide-react';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetailDialog({ product, open, onOpenChange, onAddToCart }: ProductDetailDialogProps) {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-900">{product.name}</DialogTitle>
          <DialogDescription>
            Ürün detayları ve satın alma bilgileri
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {product.featured && (
              <Badge className="absolute right-2 top-2 bg-pink-500">
                Öne Çıkan
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-4">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-3xl text-purple-600">{product.price.toFixed(2)} ₺</span>
              <span className="text-sm text-gray-500">KDV Dahil</span>
            </div>

            <Separator />

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-600">Stok Durumu:</span>
              {product.stock > 10 ? (
                <Badge className="bg-green-100 text-green-800">Stokta</Badge>
              ) : product.stock > 0 ? (
                <Badge className="bg-orange-100 text-orange-800">Son {product.stock} adet</Badge>
              ) : (
                <Badge variant="destructive">Tükendi</Badge>
              )}
            </div>

            {/* Description */}
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-sm text-gray-600 block mb-1">Açıklama:</span>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Tag className="h-4 w-4" />
                <span>Hızlı kargo ile 2-3 gün içinde kapınızda</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Tag className="h-4 w-4" />
                <span>İade garantisi 14 gün</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Tag className="h-4 w-4" />
                <span>Orijinal ve kaliteli ürün</span>
              </div>
            </div>

            <Separator />

            {/* Add to Cart Button */}
            <Button
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              size="lg"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              {product.stock === 0 ? 'Stokta Yok' : 'Sepete Ekle'}
            </Button>
          </div>
        </div>

        {/* Additional Info - Full Width */}
        <div className="mt-4 rounded-lg bg-purple-50 p-4">
          <h4 className="mb-2 text-sm text-gray-900">Ürün Hakkında</h4>
          <p className="text-sm text-gray-600">
            {product.name}, yüksek kaliteli malzemelerden üretilmiştir. 
            Günlük kullanımınızda size pratiklik ve konfor sağlar. 
            Renkli Kalem Kırtasiye güvencesiyle satın alabilirsiniz.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
