import { Shield, Lock, Eye, Database, Users, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Gizlilik Politikası
        </h1>
        <p className="text-gray-600">
          Kişisel verilerinizin korunması bizim için önemlidir
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Son güncelleme: 24 Ekim 2025
        </p>
      </div>

      {/* Introduction */}
      <Card className="border-purple-100">
        <CardContent className="pt-6">
          <p className="text-gray-600">
            Renkli Kalem Kırtasiye olarak, müşterilerimizin kişisel verilerinin güvenliğini en üst düzeyde tutmayı 
            taahhüt ediyoruz. Bu gizlilik politikası, kişisel verilerinizi nasıl topladığımızı, kullandığımızı ve 
            koruduğumuzu açıklamaktadır. 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında 
            sorumluluklarımızı yerine getiriyoruz.
          </p>
        </CardContent>
      </Card>

      {/* Data Collection */}
      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-6 w-6 text-purple-600" />
            Toplanan Bilgiler
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-2 text-gray-900">Kimlik Bilgileri</div>
            <p className="text-sm text-gray-600">
              Ad, soyad, T.C. kimlik numarası (fatura için gerekli durumlarda)
            </p>
          </div>
          <div>
            <div className="mb-2 text-gray-900">İletişim Bilgileri</div>
            <p className="text-sm text-gray-600">
              E-posta adresi, telefon numarası, adres bilgileri
            </p>
          </div>
          <div>
            <div className="mb-2 text-gray-900">Finansal Bilgiler</div>
            <p className="text-sm text-gray-600">
              Ödeme bilgileri (kredi kartı bilgileri şifreli olarak işlenir ve saklanmaz)
            </p>
          </div>
          <div>
            <div className="mb-2 text-gray-900">İşlem Bilgileri</div>
            <p className="text-sm text-gray-600">
              Sipariş geçmişi, alışveriş tercihleri, sepet bilgileri
            </p>
          </div>
          <div>
            <div className="mb-2 text-gray-900">Teknik Bilgiler</div>
            <p className="text-sm text-gray-600">
              IP adresi, tarayıcı türü, cihaz bilgileri, çerez bilgileri
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Data Usage */}
      <Card className="border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-pink-600" />
            Verilerin Kullanım Amacı
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Siparişlerinizi işleme almak ve teslimatını gerçekleştirmek</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Müşteri hizmetleri desteği sağlamak</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Fatura ve muhasebe işlemlerini yürütmek</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Kampanya ve promosyon bilgilendirmeleri yapmak (izninizle)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Web sitesi güvenliğini sağlamak ve dolandırıcılığı önlemek</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Yasal yükümlülükleri yerine getirmek</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Web sitesi performansını ve kullanıcı deneyimini iyileştirmek</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Data Security */}
      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-purple-600" />
            Veri Güvenliği
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Kişisel verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri alıyoruz:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <Lock className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
              <span>SSL sertifikası ile şifreli veri iletimi</span>
            </li>
            <li className="flex gap-2">
              <Lock className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
              <span>Güvenli sunucularda veri depolama</span>
            </li>
            <li className="flex gap-2">
              <Lock className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
              <span>Düzenli güvenlik güncellemeleri ve testleri</span>
            </li>
            <li className="flex gap-2">
              <Lock className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
              <span>Sınırlı personel erişimi ve yetkilendirme sistemi</span>
            </li>
            <li className="flex gap-2">
              <Lock className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
              <span>Ödeme bilgilerinin güvenli ödeme sistemleri üzerinden işlenmesi</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Data Sharing */}
      <Card className="border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-pink-600" />
            Veri Paylaşımı
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Kişisel verileriniz, aşağıdaki durumlarda ve yalnızca gerekli olduğu ölçüde üçüncü taraflarla paylaşılabilir:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Kargo firmaları (teslimat için)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Ödeme kuruluşları (ödeme işlemleri için)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Hukuki danışmanlar ve muhasebe firmaları (yasal yükümlülükler için)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Resmi kurumlar (yasal zorunluluk durumunda)</span>
            </li>
          </ul>
          <div className="rounded-lg bg-pink-50 p-4">
            <p className="text-sm text-gray-700">
              <span className="text-pink-600">⚠️ Önemli:</span> Kişisel verileriniz hiçbir zaman pazarlama amacıyla üçüncü taraflara satılmaz veya kiralanmaz.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* User Rights */}
      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-600" />
            Haklarınız
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-gray-600">
            KVKK kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Kişisel verilerinizin işlenip işlenmediğini öğrenme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>İşlenmişse buna ilişkin bilgi talep etme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Eksik veya yanlış işlenmiş verilerin düzeltilmesini talep etme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Kişisel verilerin silinmesini veya yok edilmesini talep etme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>İşlenen verilerin münhasıran otomatik sistemler ile analiz edilmesi sonucu ortaya çıkan sonuca itiraz etme</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">•</span>
              <span>Zararın giderilmesini talep etme</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Cookies */}
      <Card className="border-pink-100">
        <CardHeader>
          <CardTitle>Çerezler (Cookies)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanmaktadır. Çerezler, tarayıcınız 
            tarafından cihazınızda saklanan küçük metin dosyalarıdır.
          </p>
          <div>
            <div className="mb-2 text-gray-900">Kullandığımız Çerez Türleri:</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><span className="font-medium">Zorunlu Çerezler:</span> Web sitesinin çalışması için gereklidir</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><span className="font-medium">Performans Çerezleri:</span> Ziyaret istatistiklerini toplar</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><span className="font-medium">Fonksiyonel Çerezler:</span> Tercihlerinizi hatırlar</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">•</span>
                <span><span className="font-medium">Hedefleme Çerezleri:</span> Kişiselleştirilmiş içerik sunar</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            Tarayıcı ayarlarınızdan çerezleri yönetebilir veya silebilirsiniz.
          </p>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle>İletişim</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-gray-600">
            Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <p><span className="text-gray-900">E-posta:</span> kvkk@renklikalem.com</p>
            <p><span className="text-gray-900">Telefon:</span> +90 212 555 01 23</p>
            <p><span className="text-gray-900">Posta Adresi:</span> Merkez Mah. Kırtasiye Sk. No:123 İstanbul</p>
          </div>
          <p className="text-sm text-gray-600">
            Taleplerinize en geç 30 gün içinde yanıt verilecektir.
          </p>
        </CardContent>
      </Card>

      {/* Updates */}
      <Card className="border-pink-100">
        <CardContent className="pt-6">
          <p className="text-sm text-gray-600">
            Bu gizlilik politikası zaman zaman güncellenebilir. Önemli değişiklikler yapıldığında 
            sizi bilgilendireceğiz. Politikayı düzenli olarak gözden geçirmenizi öneririz.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
