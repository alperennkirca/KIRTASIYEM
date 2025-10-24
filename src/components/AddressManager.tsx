import { useState } from 'react';
import { Address } from '../types/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { MapPin, Plus, Edit, Trash2, Save, X, Star } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Badge } from './ui/badge';

interface AddressManagerProps {
  addresses: Address[];
  onAddressesChange: (addresses: Address[]) => void;
}

export function AddressManager({ addresses, onAddressesChange }: AddressManagerProps) {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [deleteAddressId, setDeleteAddressId] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const resetForm = () => {
    setTitle('');
    setFullName('');
    setPhone('');
    setAddressLine1('');
    setAddressLine2('');
    setCity('');
    setDistrict('');
    setPostalCode('');
  };

  const handleOpenAddDialog = () => {
    resetForm();
    setEditingAddress(null);
    setShowAddDialog(true);
  };

  const handleOpenEditDialog = (address: Address) => {
    setTitle(address.title);
    setFullName(address.fullName);
    setPhone(address.phone);
    setAddressLine1(address.addressLine1);
    setAddressLine2(address.addressLine2 || '');
    setCity(address.city);
    setDistrict(address.district);
    setPostalCode(address.postalCode);
    setEditingAddress(address);
    setShowAddDialog(true);
  };

  const handleSaveAddress = () => {
    // Validation
    if (!title.trim()) {
      toast.error('Adres başlığı gereklidir!');
      return;
    }
    if (!fullName.trim()) {
      toast.error('Ad Soyad gereklidir!');
      return;
    }
    if (!phone.trim()) {
      toast.error('Telefon numarası gereklidir!');
      return;
    }
    if (!addressLine1.trim()) {
      toast.error('Adres satırı 1 gereklidir!');
      return;
    }
    if (!city.trim()) {
      toast.error('İl gereklidir!');
      return;
    }
    if (!district.trim()) {
      toast.error('İlçe gereklidir!');
      return;
    }
    if (!postalCode.trim()) {
      toast.error('Posta kodu gereklidir!');
      return;
    }

    if (editingAddress) {
      // Update existing address
      const updatedAddresses = addresses.map((addr) =>
        addr.id === editingAddress.id
          ? {
              ...addr,
              title,
              fullName,
              phone,
              addressLine1,
              addressLine2,
              city,
              district,
              postalCode,
            }
          : addr
      );
      onAddressesChange(updatedAddresses);
      toast.success('Adres güncellendi!');
    } else {
      // Add new address
      const newAddress: Address = {
        id: Date.now().toString(),
        title,
        fullName,
        phone,
        addressLine1,
        addressLine2,
        city,
        district,
        postalCode,
        isDefault: addresses.length === 0, // First address is default
      };
      onAddressesChange([...addresses, newAddress]);
      toast.success('Adres eklendi!');
    }

    setShowAddDialog(false);
    resetForm();
  };

  const handleDeleteAddress = (addressId: string) => {
    const addressToDelete = addresses.find((addr) => addr.id === addressId);
    if (addressToDelete?.isDefault && addresses.length > 1) {
      toast.error('Varsayılan adresi silmeden önce başka bir adresi varsayılan yapın!');
      return;
    }

    const updatedAddresses = addresses.filter((addr) => addr.id !== addressId);
    onAddressesChange(updatedAddresses);
    toast.success('Adres silindi!');
    setDeleteAddressId(null);
  };

  const handleSetDefault = (addressId: string) => {
    const updatedAddresses = addresses.map((addr) => ({
      ...addr,
      isDefault: addr.id === addressId,
    }));
    onAddressesChange(updatedAddresses);
    toast.success('Varsayılan adres güncellendi!');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-purple-600" />
            Adreslerim
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Teslimat adreslerinizi yönetin
          </p>
        </div>
        <Button
          onClick={handleOpenAddDialog}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Plus className="mr-2 h-4 w-4" />
          Adres Ekle
        </Button>
      </div>

      {addresses.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <MapPin className="mb-4 h-12 w-12 text-gray-400" />
            <p className="text-gray-600 text-center">
              Henüz kayıtlı adresiniz yok.
              <br />
              İlk adresinizi ekleyerek başlayın.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {addresses.map((address) => (
            <Card
              key={address.id}
              className={`relative ${
                address.isDefault ? 'border-purple-300 bg-purple-50/50' : 'border-gray-200'
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-base">{address.title}</CardTitle>
                    {address.isDefault && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">
                        <Star className="mr-1 h-3 w-3" />
                        Varsayılan
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="text-sm">
                  <p className="text-gray-900">{address.fullName}</p>
                  <p className="text-gray-600">{address.phone}</p>
                  <p className="text-gray-600 mt-2">{address.addressLine1}</p>
                  {address.addressLine2 && (
                    <p className="text-gray-600">{address.addressLine2}</p>
                  )}
                  <p className="text-gray-600">
                    {address.district}, {address.city} {address.postalCode}
                  </p>
                </div>

                <div className="flex gap-2 pt-3">
                  {!address.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleSetDefault(address.id)}
                      className="flex-1"
                    >
                      <Star className="mr-1 h-3 w-3" />
                      Varsayılan Yap
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleOpenEditDialog(address)}
                    className="flex-1"
                  >
                    <Edit className="mr-1 h-3 w-3" />
                    Düzenle
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setDeleteAddressId(address.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Add/Edit Address Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingAddress ? 'Adres Düzenle' : 'Yeni Adres Ekle'}
            </DialogTitle>
            <DialogDescription>
              Teslimat adresi bilgilerinizi girin
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="address-title">Adres Başlığı *</Label>
                <Input
                  id="address-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ev, İş, vb."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address-fullname">Ad Soyad *</Label>
                <Input
                  id="address-fullname"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Alıcı adı soyadı"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address-phone">Telefon *</Label>
              <Input
                id="address-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0555 555 55 55"
                type="tel"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address-line1">Adres Satırı 1 *</Label>
              <Input
                id="address-line1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                placeholder="Cadde, sokak, apartman, daire no"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address-line2">Adres Satırı 2</Label>
              <Input
                id="address-line2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                placeholder="Ek adres bilgisi (opsiyonel)"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="address-city">İl *</Label>
                <Input
                  id="address-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="İstanbul"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address-district">İlçe *</Label>
                <Input
                  id="address-district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="Kadıköy"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address-postal">Posta Kodu *</Label>
                <Input
                  id="address-postal"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="34000"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSaveAddress}
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Save className="mr-2 h-4 w-4" />
              {editingAddress ? 'Güncelle' : 'Kaydet'}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowAddDialog(false);
                resetForm();
              }}
              className="flex-1"
            >
              <X className="mr-2 h-4 w-4" />
              İptal
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={deleteAddressId !== null}
        onOpenChange={(open) => !open && setDeleteAddressId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Adresi silmek istediğinize emin misiniz?</AlertDialogTitle>
            <AlertDialogDescription>
              Bu işlem geri alınamaz. Adres kalıcı olarak silinecektir.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteAddressId && handleDeleteAddress(deleteAddressId)}
              className="bg-red-600 hover:bg-red-700"
            >
              Sil
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
