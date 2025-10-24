import { Card, CardContent } from './ui/card';
import { Award, Users, Target, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl text-gray-900">Hakkımızda</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          2010 yılından beri kırtasiye sektöründe müşterilerimize kaliteli ürünler sunuyoruz
        </p>
      </div>

      {/* Story */}
      <section className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl text-gray-900">Hikayemiz</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Renkli Kalem Kırtasiye, küçük bir mahalle dükkanı olarak başladığı yolculuğuna bugün 
                binlerce müşteriye online hizmet vererek devam ediyor.
              </p>
              <p>
                15 yıllık tecrübemizle, öğrencilerden profesyonellere, sanatseverlerden ofis 
                çalışanlarına kadar herkesin ihtiyaçlarına uygun geniş bir ürün yelpazesi sunuyoruz.
              </p>
              <p>
                Müşteri memnuniyetini ön planda tutarak, kaliteli ürünleri en uygun fiyatlarla 
                sunmayı ve hızlı kargo ile kapınıza ulaştırmayı hedefliyoruz.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="text-9xl">✏️</div>
              <div className="absolute -right-4 -top-4 text-5xl">📓</div>
              <div className="absolute -left-4 -bottom-4 text-5xl">🎨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="mb-8 text-center text-3xl text-gray-900">Değerlerimiz</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-none bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Kalite</h3>
              <p className="text-sm text-gray-600">
                Sadece güvenilir markalardan, test edilmiş kaliteli ürünler
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Müşteri Odaklı</h3>
              <p className="text-sm text-gray-600">
                Müşteri memnuniyeti bizim için her şeyden önemli
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-gradient-to-br from-pink-50 to-purple-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                <Target className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Güvenilirlik</h3>
              <p className="text-sm text-gray-600">
                15 yıllık tecrübe ve binlerce mutlu müşteri
              </p>
            </CardContent>
          </Card>

          <Card className="border-none bg-gradient-to-br from-purple-50 to-blue-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-gray-900">Tutku</h3>
              <p className="text-sm text-gray-600">
                İşimizi seviyoruz ve bu tutkumuzu ürünlerimize yansıtıyoruz
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 md:p-12">
        <div className="grid gap-8 text-center text-white md:grid-cols-4">
          <div>
            <div className="mb-2 text-4xl">15+</div>
            <div className="text-white/80">Yıllık Tecrübe</div>
          </div>
          <div>
            <div className="mb-2 text-4xl">10,000+</div>
            <div className="text-white/80">Mutlu Müşteri</div>
          </div>
          <div>
            <div className="mb-2 text-4xl">5,000+</div>
            <div className="text-white/80">Ürün Çeşidi</div>
          </div>
          <div>
            <div className="mb-2 text-4xl">50+</div>
            <div className="text-white/80">Marka İşbirliği</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="mb-4 text-center text-3xl text-gray-900">Ekibimiz</h2>
        <p className="text-center text-gray-600">
          Sizlere en iyi hizmeti sunmak için çalışan tutkulu ekibimiz
        </p>
      </section>
    </div>
  );
}
