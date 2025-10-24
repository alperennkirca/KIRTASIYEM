import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Percent, Gift, Truck, Tag } from 'lucide-react';
import { getActiveCampaigns } from '../data/campaigns';

interface CampaignsPageProps {
  onNavigate: (page: string, category?: string) => void;
}

export function CampaignsPage({ onNavigate }: CampaignsPageProps) {
  const campaigns = getActiveCampaigns();

  const benefits = [
    {
      icon: Percent,
      title: 'İndirimli Fiyatlar',
      description: 'Her gün yeni kampanyalar ve özel fiyatlar',
      color: 'purple',
    },
    {
      icon: Gift,
      title: 'Hediye Çekleri',
      description: 'Belirli tutarın üzerinde alışverişlerde hediye çeki',
      color: 'pink',
    },
    {
      icon: Truck,
      title: 'Ücretsiz Kargo',
      description: '250 TL ve üzeri siparişlerde kargo bedava',
      color: 'blue',
    },
    {
      icon: Tag,
      title: 'Sadakat Programı',
      description: 'Her alışverişte puan kazan, puan harca',
      color: 'green',
    },
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl text-gray-900">Kampanyalar</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Özel indirimler ve avantajlı fırsatlardan yararlanın
        </p>
      </div>

      {/* Active Campaigns */}
      <section>
        <h2 className="mb-6 text-2xl text-gray-900">Aktif Kampanyalar</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="overflow-hidden">
              <div className={`bg-gradient-to-r ${campaign.color} p-6 text-white`}>
                <div className="mb-4 flex items-start justify-between">
                  <div className="text-5xl">{campaign.icon}</div>
                  <Badge className="bg-white/20 backdrop-blur-sm">
                    {campaign.discount}
                  </Badge>
                </div>
                <h3 className="mb-2 text-2xl">{campaign.title}</h3>
                <p className="text-white/90">{campaign.description}</p>
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-gray-600">Geçerlilik:</span>
                  <span className="text-purple-600">{campaign.validUntil}</span>
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() => onNavigate('products', campaign.category)}
                >
                  Ürünleri İncele
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="mb-6 text-2xl text-gray-900">Alışveriş Avantajları</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses = {
              purple: 'bg-purple-100 text-purple-600',
              pink: 'bg-pink-100 text-pink-600',
              blue: 'bg-blue-100 text-blue-600',
              green: 'bg-green-100 text-green-600',
            };
            return (
              <Card key={index} className="border-none bg-gradient-to-br from-purple-50 to-pink-50">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${colorClasses[benefit.color as keyof typeof colorClasses]}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section className="rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-8 md:p-12">
        <div className="text-center text-white">
          <h2 className="mb-4 text-3xl">Kampanyalardan Haberdar Olun</h2>
          <p className="mb-6 text-lg text-white/90">
            E-bültenimize abone olun, özel kampanyalar ve indirimlerden ilk siz haberdar olun
          </p>
          <div className="mx-auto flex max-w-md gap-2">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-white/90"
            >
              Abone Ol
            </Button>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section>
        <Card>
          <CardContent className="p-6">
            <h3 className="mb-4 text-xl text-gray-900">Kampanya Koşulları</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Kampanyalar belirtilen tarihler arasında geçerlidir</li>
              <li>• Kampanyalar stoklar tükenene kadar devam eder</li>
              <li>• Bir üründe aynı anda sadece bir kampanya geçerli olabilir</li>
              <li>• Kampanyalarda değişiklik yapma hakkı saklıdır</li>
              <li>• İade durumlarında kampanyalı fiyat üzerinden işlem yapılır</li>
              <li>• Kampanyalar ticari müşterilere uygulanmaz</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
