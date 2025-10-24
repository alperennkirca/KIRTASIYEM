import { Package, Truck, RefreshCw, Clock, CheckCircle, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ShippingReturnsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Kargo & İade
        </h1>
        <p className="text-gray-600">
          Kargo ve iade süreçlerimiz hakkında detaylı bilgi
        </p>
      </div>

      {/* Shipping Info */}
      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-purple-600" />
            Kargo Bilgileri
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <Clock className="h-5 w-5 mt-0.5 text-purple-600 flex-shrink-0" />
              <div>
                <div className="text-gray-900">Teslimat Süresi</div>
                <p className="text-sm text-gray-600">
                  Siparişiniz 1-3 iş günü içinde kargoya teslim edilir. Kargo süresi bölgeye göre 1-5 iş günü arasında değişmektedir.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Package className="h-5 w-5 mt-0.5 text-purple-600 flex-shrink-0" />
              <div>
                <div className="text-gray-900">Kargo Ücreti</div>
                <p className="text-sm text-gray-600">
                  500 TL ve üzeri alışverişlerde kargo ücretsizdir. 500 TL'nin altındaki siparişlerde kargo ücreti 29,90 TL'dir.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-purple-600 flex-shrink-0" />
              <div>
                <div className="text-gray-900">Teslimat Bölgeleri</div>
                <p className="text-sm text-gray-600">
                  Türkiye'nin her yerine kargo gönderimi yapılmaktadır. Yurtdışı teslimatları için lütfen müşteri hizmetlerimizle iletişime geçiniz.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="h-5 w-5 mt-0.5 text-purple-600 flex-shrink-0" />
              <div>
                <div className="text-gray-900">Kargo Takibi</div>
                <p className="text-sm text-gray-600">
                  Siparişiniz kargoya verildikten sonra size e-posta ve SMS ile kargo takip numarası gönderilecektir.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-purple-50 p-4">
            <p className="text-sm text-gray-700">
              <span className="text-purple-600">💡 İpucu:</span> Siparişlerinizi hafta içi saat 14:00'a kadar verirseniz aynı gün kargoya verilir.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Returns Info */}
      <Card className="border-pink-100">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-6 w-6 text-pink-600" />
            İade ve Değişim
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div>
              <div className="mb-2 text-gray-900">İade Koşulları</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Ürünler teslim tarihinden itibaren 14 gün içinde iade edilebilir.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span>İade edilecek ürünler kullanılmamış ve ambalajı açılmamış olmalıdır.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Fatura ve iade formu ürünle birlikte gönderilmelidir.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Kişiye özel üretilen ürünlerde iade kabul edilmemektedir.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="mb-2 text-gray-900">İade Süreci</div>
              <ol className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-purple-600">1.</span>
                  <span>Müşteri hizmetlerimizle iletişime geçerek iade talebinizi bildirin.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">2.</span>
                  <span>Size gönderilecek iade formu ve kargo etiketi ile ürünü kargoya verin.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">3.</span>
                  <span>Ürün depomıza ulaştıktan sonra kontrol edilir.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">4.</span>
                  <span>Ürün onaylandıktan sonra 5-7 iş günü içinde iadesi yapılır.</span>
                </li>
              </ol>
            </div>

            <div>
              <div className="mb-2 text-gray-900">Değişim</div>
              <p className="text-sm text-gray-600">
                Satın aldığınız ürünü değiştirmek isterseniz, müşteri hizmetlerimizle iletişime geçebilirsiniz. 
                Değişim işlemlerinde kargo ücreti tarafımızdan karşılanır.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-pink-50 p-4">
            <p className="text-sm text-gray-700">
              <span className="text-pink-600">📞 İletişim:</span> İade ve değişim süreçleriniz için +90 212 555 01 23 numaralı telefondan bize ulaşabilirsiniz.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle>Sık Sorulan Sorular</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="mb-1 text-gray-900">Kargo ücreti ne zaman alınır?</div>
            <p className="text-sm text-gray-600">
              Kargo ücreti, 500 TL altındaki siparişlerde sepet toplamına eklenir ve ödeme sırasında tahsil edilir.
            </p>
          </div>
          <div>
            <div className="mb-1 text-gray-900">Kargoyu teslim alamazsam ne olur?</div>
            <p className="text-sm text-gray-600">
              Kargo şubesinde 10 gün bekletildikten sonra firmamıza iade edilir. Yeniden gönderim için kargo ücreti tahsil edilir.
            </p>
          </div>
          <div>
            <div className="mb-1 text-gray-900">Hasarlı ürün gelirse ne yapmalıyım?</div>
            <p className="text-sm text-gray-600">
              Kargo teslim alınırken hasarlı ise lütfen tutanak tutturun ve 48 saat içinde bize bildirin. Ürününüz değiştirilecektir.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
