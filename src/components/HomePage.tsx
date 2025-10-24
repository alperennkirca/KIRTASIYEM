import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Truck, CreditCard, HeadphonesIcon, ShieldCheck } from 'lucide-react';
import { categories } from '../data/products';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface HomePageProps {
  featuredProducts: Product[];
  onAddToCart: (product: Product) => void;
  onNavigate: (page: string, category?: string) => void;
  onProductClick?: (product: Product) => void;
}

export function HomePage({ featuredProducts, onAddToCart, onNavigate, onProductClick }: HomePageProps) {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-8 md:p-16">
        <div className="relative z-10 max-w-2xl text-white">
          <Badge className="mb-4 bg-white/20 backdrop-blur-sm">Hoş Geldiniz</Badge>
          <h1 className="mb-4 text-4xl md:text-5xl">Renkli Kalem Kırtasiye</h1>
          <p className="mb-6 text-lg text-white/90">
            Okul, ofis ve sanat malzemelerinde geniş ürün yelpazesi ile hizmetinizdeyiz. 
            Kaliteli ürünler, uygun fiyatlar ve hızlı kargo garantisi!
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('products')}
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            Ürünleri İncele
          </Button>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <div className="absolute right-8 top-8 text-8xl">✏️</div>
          <div className="absolute right-32 top-32 text-6xl">📓</div>
          <div className="absolute right-16 bottom-16 text-7xl">🎨</div>
        </div>
      </section>

      {/* Features Slider */}
      <section className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <Truck className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">Ücretsiz Kargo</h3>
                  <p className="text-sm text-gray-600">250 TL üzeri siparişlerde</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">Güvenli Ödeme</h3>
                  <p className="text-sm text-gray-600">SSL sertifikalı ödeme</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-none bg-gradient-to-br from-purple-50 to-blue-50">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                    <ShieldCheck className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">Kolay İade</h3>
                  <p className="text-sm text-gray-600">14 gün içinde</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      {/* Categories */}
      <section>
        <div className="mb-6">
          <h2 className="mb-2 text-3xl text-gray-900">Kategoriler</h2>
          <p className="text-gray-600">İhtiyacınız olan ürünleri kolayca bulun</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="cursor-pointer overflow-hidden transition-all hover:shadow-lg"
              onClick={() => onNavigate('products', category.id)}
            >
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-3 text-5xl">{category.icon}</div>
                <h3 className="text-gray-900">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl text-gray-900">Öne Çıkan Ürünler</h2>
            <p className="text-gray-600">En çok tercih edilen ürünler</p>
          </div>
          <Button variant="outline" onClick={() => onNavigate('products')}>
            Tümünü Gör
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </section>

      {/* Campaign Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 p-8 md:p-12">
        <div className="relative z-10 text-center text-white">
          <Badge className="mb-4 bg-white/20 backdrop-blur-sm">Kampanya</Badge>
          <h2 className="mb-4 text-3xl md:text-4xl">Okul Sezonu İndirimleri</h2>
          <p className="mb-6 text-lg text-white/90">
            Tüm okul ürünlerinde %20'ye varan indirimler!
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => onNavigate('campaigns')}
            className="bg-white text-orange-600 hover:bg-white/90"
          >
            Kampanyaları İncele
          </Button>
        </div>
      </section>
    </div>
  );
}
