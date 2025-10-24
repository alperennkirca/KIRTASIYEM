import { useState } from 'react';
import { useAuth } from './AuthContext';
import { AddressManager } from './AddressManager';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { User, Mail, Lock, LogOut, Save } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { Address } from '../types/auth';
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

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { user, logout, updateUser, updateAddresses } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleSaveProfile = () => {
    if (!name.trim()) {
      toast.error('İsim boş olamaz!');
      return;
    }

    if (!email.trim()) {
      toast.error('E-posta boş olamaz!');
      return;
    }

    // Update user via context
    updateUser(name, email);
    
    toast.success('Profil bilgileri güncellendi!');
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('Tüm alanları doldurun!');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Yeni şifreler eşleşmiyor!');
      return;
    }

    if (newPassword.length < 6) {
      toast.error('Yeni şifre en az 6 karakter olmalıdır!');
      return;
    }

    // Get credentials
    const credentialsJson = localStorage.getItem('credentials');
    const allCredentials = credentialsJson ? JSON.parse(credentialsJson) : [];

    // Find user credential
    const userCredential = allCredentials.find((c: any) => c.email === user?.email);

    if (!userCredential || userCredential.password !== currentPassword) {
      toast.error('Mevcut şifre hatalı!');
      return;
    }

    // Update password
    const updatedCredentials = allCredentials.map((c: any) => {
      if (c.email === user?.email) {
        return { ...c, password: newPassword };
      }
      return c;
    });

    localStorage.setItem('credentials', JSON.stringify(updatedCredentials));

    toast.success('Şifre başarıyla değiştirildi!');
    setShowPasswordChange(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  if (!user) {
    return (
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <User className="mb-4 h-16 w-16 text-gray-400" />
            <h2 className="mb-2 text-xl text-gray-900">Giriş Yapmanız Gerekiyor</h2>
            <p className="mb-4 text-gray-600">Bu sayfayı görüntülemek için giriş yapın</p>
            <Button
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Ana Sayfaya Dön
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Profilim
        </h1>
        <p className="text-gray-600">Hesap bilgilerinizi görüntüleyin ve düzenleyin</p>
      </div>

      <div className="space-y-6">
        {/* Profile Information */}
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-purple-600" />
              Profil Bilgileri
            </CardTitle>
            <CardDescription>
              Kişisel bilgilerinizi güncelleyin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profile-name">Ad Soyad</Label>
              <Input
                id="profile-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!isEditing}
                placeholder="Adınız Soyadınız"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profile-email">E-posta</Label>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <Input
                  id="profile-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!isEditing}
                  type="email"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div className="flex gap-2">
              {isEditing ? (
                <>
                  <Button
                    onClick={handleSaveProfile}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Kaydet
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsEditing(false);
                      setName(user.name);
                      setEmail(user.email);
                    }}
                    className="flex-1"
                  >
                    İptal
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="w-full"
                >
                  Düzenle
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Password Change */}
        <Card className="border-purple-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-purple-600" />
              Şifre Değiştir
            </CardTitle>
            <CardDescription>
              Hesap güvenliğiniz için şifrenizi güncelleyin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {showPasswordChange ? (
              <>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Mevcut Şifre</Label>
                  <Input
                    id="current-password"
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">Yeni Şifre</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    minLength={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-new-password">Yeni Şifre Tekrar</Label>
                  <Input
                    id="confirm-new-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    minLength={6}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={handleChangePassword}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Şifreyi Değiştir
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowPasswordChange(false);
                      setCurrentPassword('');
                      setNewPassword('');
                      setConfirmPassword('');
                    }}
                    className="flex-1"
                  >
                    İptal
                  </Button>
                </div>
              </>
            ) : (
              <Button
                onClick={() => setShowPasswordChange(true)}
                variant="outline"
                className="w-full"
              >
                Şifre Değiştir
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Address Management */}
        <Card className="border-purple-100">
          <CardContent className="pt-6">
            <AddressManager
              addresses={user.addresses || []}
              onAddressesChange={(addresses: Address[]) => updateAddresses(addresses)}
            />
          </CardContent>
        </Card>

        {/* Account Info */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle>Hesap Bilgileri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Hesap ID:</span>
              <span className="text-gray-900">{user.id}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Kayıt Tarihi:</span>
              <span className="text-gray-900">
                {new Date(user.createdAt).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="pt-6">
            <Button
              onClick={() => setShowLogoutDialog(true)}
              variant="destructive"
              className="w-full"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Çıkış Yap
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Çıkış yapmak istediğinize emin misiniz?</AlertDialogTitle>
            <AlertDialogDescription>
              Hesabınızdan çıkış yapılacak ve ana sayfaya yönlendirileceksiniz.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>İptal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700"
            >
              Çıkış Yap
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
