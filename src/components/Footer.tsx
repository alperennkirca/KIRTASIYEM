import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="mt-auto border-t bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400">
                <span className="text-xl">✏️</span>
              </div>
              <div>
                <div className="text-purple-600">Renkli Kalem</div>
                <div className="text-xs text-gray-600">Kırtasiye</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Kaliteli kırtasiye ürünlerinde güvenilir adresiniz. 2010'dan beri hizmetinizdeyiz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-gray-900">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => handleNavigation(e, 'home')} className="text-gray-600 hover:text-purple-600 transition-colors">Ana Sayfa</a></li>
              <li><a href="#" onClick={(e) => handleNavigation(e, 'products')} className="text-gray-600 hover:text-purple-600 transition-colors">Ürünler</a></li>
              <li><a href="#" onClick={(e) => handleNavigation(e, 'campaigns')} className="text-gray-600 hover:text-purple-600 transition-colors">Kampanyalar</a></li>
              <li><a href="#" onClick={(e) => handleNavigation(e, 'about')} className="text-gray-600 hover:text-purple-600 transition-colors">Hakkımızda</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-4 text-gray-900">Müşteri Hizmetleri</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" onClick={(e) => handleNavigation(e, 'contact')} className="text-gray-600 hover:text-purple-600 transition-colors">İletişim</a></li>
              <li><a href="#" onClick={(e) => handleNavigation(e, 'faq')} className="text-gray-600 hover:text-purple-600 transition-colors">SSS</a></li>
              <li><a href="#" onClick={(e) => handleNavigation(e, 'shipping-returns')} className="text-gray-600 hover:text-purple-600 transition-colors">Kargo & İade</a></li>
              <li><a href="#" onClick={(e) => handleNavigation(e, 'privacy-policy')} className="text-gray-600 hover:text-purple-600 transition-colors">Gizlilik Politikası</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-gray-900">İletişim</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-purple-600" />
                <span className="text-gray-600">+90 5393612631</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-purple-600" />
                <span className="text-gray-600">info@example.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-purple-600" />
                <span className="text-gray-600">XXXX Mahallesi Y Sk. No:81 Türkiye</span>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <p>© 2025 Renkli Kalem Kırtasiye. Tüm hakları saklıdır.</p>
          <p className="mt-2">SSL güvenli alışveriş • Hızlı kargo • Kolay iade</p>
        </div>
      </div>
    </footer>
  );
}
