import { Campaign } from '../types/campaign';

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: 'Okul Sezonu Kampanyası',
    description: 'Tüm okul ürünlerinde %20 indirim fırsatı!',
    type: 'percentage',
    discount: '%20',
    discountValue: 20,
    validUntil: '31 Aralık 2025',
    icon: '🎒',
    color: 'from-blue-500 to-purple-500',
    category: 'okul-urunleri',
    isActive: true,
  },
  {
    id: 2,
    title: 'Ofis Malzemeleri Paketi',
    description: '3 al 2 öde! Tüm ofis malzemelerinde geçerli.',
    type: 'buyXPayY',
    discount: '3 Al 2 Öde',
    buyX: 3,
    payY: 2,
    validUntil: '15 Kasım 2025',
    icon: '📎',
    color: 'from-green-500 to-teal-500',
    category: 'ofis-malzemeleri',
    isActive: true,
  },
  {
    id: 3,
    title: 'Sanat Malzemeleri İndirimi',
    description: 'Profesyonel sanat malzemelerinde %15 indirim.',
    type: 'percentage',
    discount: '%15',
    discountValue: 15,
    validUntil: '20 Kasım 2025',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500',
    category: 'sanat-malzemeleri',
    isActive: true,
  },
  {
    id: 4,
    title: 'Premium Kalem Seti',
    description: 'Seçili kalem setlerinde özel fiyatlar.',
    type: 'percentage',
    discount: '%25',
    discountValue: 25,
    validUntil: '30 Kasım 2025',
    icon: '✏️',
    color: 'from-purple-500 to-pink-500',
    category: 'yazi-gerecleri',
    isActive: true,
  },
];

export function getActiveCampaigns(): Campaign[] {
  return campaigns.filter(c => c.isActive);
}

export function getCampaignByCategory(category: string): Campaign | undefined {
  return campaigns.find(c => c.isActive && c.category === category);
}
