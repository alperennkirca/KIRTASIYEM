import { Product } from '../types';

export const products: Product[] = [
  // Yazı Gereçleri
  {
    id: '1',
    name: 'Pilot G2 Jel Kalem Seti',
    description: 'Yumuşak yazı deneyimi sunan 0.7mm uç kalınlığında 12 renkli jel kalem seti',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1584631716657-a78c9d18aaac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBlbnMlMjBzdGF0aW9uZXJ5fGVufDF8fHx8MTc2MTMwMzEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'yazi-gerecleri',
    stock: 45,
    featured: true
  },
  {
    id: '2',
    name: 'Faber Castell Dolma Kalem',
    description: 'Premium kalitede metal gövdeli dolma kalem, orta uç',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1584631716657-a78c9d18aaac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBlbnMlMjBzdGF0aW9uZXJ5fGVufDF8fHx8MTc2MTMwMzEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'yazi-gerecleri',
    stock: 23,
    featured: false
  },
  {
    id: '3',
    name: 'Stabilo Boss Fosforlu Kalem',
    description: '6 renkli fosforlu kalem seti, dayanıklı ve solmayan',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1661472093418-fa5f54c5fe4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXIlMjBwZW5zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzYxMzAzMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'yazi-gerecleri',
    stock: 67,
    featured: true
  },
  {
    id: '4',
    name: 'Tükenmez Kalem 50li Paket',
    description: 'Ofis ve okul için ideal, mavi mürekkepli ekonomik tükenmez kalem',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1584631716657-a78c9d18aaac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBlbnMlMjBzdGF0aW9uZXJ5fGVufDF8fHx8MTc2MTMwMzEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'yazi-gerecleri',
    stock: 34,
    featured: false
  },

  // Defter & Kağıt
  {
    id: '5',
    name: 'Oxford Kareli Defter A4',
    description: '80 yaprak, mikroperforeli, spiralli kareli defter',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1612599316791-451087c7fe15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9va3MlMjBwYXBlciUyMHN0YXRpb25lcnl8ZW58MXx8fHwxNzYxMzAzMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'defter-kagit',
    stock: 120,
    featured: true
  },
  {
    id: '6',
    name: 'Moleskine Sert Kapak Defter',
    description: 'Premium kalitede çizgili defter, 192 sayfa',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1612599316791-451087c7fe15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9va3MlMjBwYXBlciUyMHN0YXRpb25lcnl8ZW58MXx8fHwxNzYxMzAzMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'defter-kagit',
    stock: 56,
    featured: false
  },
  {
    id: '7',
    name: 'A4 Fotokopi Kağıdı 500 Yaprak',
    description: '80 gr/m² beyaz fotokopi kağıdı, çok amaçlı kullanım',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1612599316791-451087c7fe15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9va3MlMjBwYXBlciUyMHN0YXRpb25lcnl8ZW58MXx8fHwxNzYxMzAzMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'defter-kagit',
    stock: 200,
    featured: false
  },
  {
    id: '8',
    name: 'Renkli Yapışkan Not Kağıdı Seti',
    description: '6 farklı renk ve boyutta yapışkan not kağıdı',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1612599316791-451087c7fe15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub3RlYm9va3MlMjBwYXBlciUyMHN0YXRpb25lcnl8ZW58MXx8fHwxNzYxMzAzMTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'defter-kagit',
    stock: 89,
    featured: true
  },

  // Ofis Malzemeleri
  {
    id: '9',
    name: 'Zımba Makinesi + Zımba Teli',
    description: 'Metalik gövde, 30 sayfa kapasiteli zımba makinesi',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1705682644779-ba6b02ae3fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMGRlc2t8ZW58MXx8fHwxNzYxMjAyMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'ofis-malzemeleri',
    stock: 45,
    featured: false
  },
  {
    id: '10',
    name: 'Evrak Rafı 3 Katlı',
    description: 'Plastik, dayanıklı ofis masası evrak rafı',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1705682644779-ba6b02ae3fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMGRlc2t8ZW58MXx8fHwxNzYxMjAyMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'ofis-malzemeleri',
    stock: 34,
    featured: false
  },
  {
    id: '11',
    name: 'Şeffaf Dosya 100lü Paket',
    description: 'A4 boyutunda, delikleri puntolu şeffaf dosya',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1705682644779-ba6b02ae3fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMGRlc2t8ZW58MXx8fHwxNzYxMjAyMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'ofis-malzemeleri',
    stock: 156,
    featured: true
  },
  {
    id: '12',
    name: 'Klasör 50li Set',
    description: 'Plastik sırtlı, geniş kapasiteli ofis klasörü',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1705682644779-ba6b02ae3fb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzdXBwbGllcyUyMGRlc2t8ZW58MXx8fHwxNzYxMjAyMDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'ofis-malzemeleri',
    stock: 28,
    featured: false
  },

  // Okul Ürünleri
  {
    id: '13',
    name: 'Okul Çantası Seti',
    description: 'Ergonomik, su geçirmez okul çantası + beslenme çantası',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1623228639000-3c9f7908dc88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdXBwbGllcyUyMHBlbmNpbHN8ZW58MXx8fHwxNzYxMjcwOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'okul-urunleri',
    stock: 23,
    featured: true
  },
  {
    id: '14',
    name: 'Jumbo Kuru Boya 24 Renk',
    description: 'Yumuşak ve parlak renkli kuru boya seti',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1623228639000-3c9f7908dc88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdXBwbGllcyUyMHBlbmNpbHN8ZW58MXx8fHwxNzYxMjcwOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'okul-urunleri',
    stock: 78,
    featured: false
  },
  {
    id: '15',
    name: 'Suluboya 12 Renk + Fırça',
    description: 'Tablet suluboya seti, profesyonel fırça hediyeli',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1623228639000-3c9f7908dc88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdXBwbGllcyUyMHBlbmNpbHN8ZW58MXx8fHwxNzYxMjcwOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'okul-urunleri',
    stock: 92,
    featured: false
  },
  {
    id: '16',
    name: 'Matematik Seti',
    description: 'Pergel, gönye, iletki, cetvel içeren tam set',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1623228639000-3c9f7908dc88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdXBwbGllcyUyMHBlbmNpbHN8ZW58MXx8fHwxNzYxMjcwOTUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'okul-urunleri',
    stock: 54,
    featured: true
  },

  // Sanat Malzemeleri
  {
    id: '17',
    name: 'Akrilik Boya Seti 24 Renk',
    description: 'Profesyonel kalitede akrilik boya seti, 12ml tüpler',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1588014328208-de6c5973a014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHBhaW50aW5nfGVufDF8fHx8MTc2MTI5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'sanat-malzemeleri',
    stock: 34,
    featured: true
  },
  {
    id: '18',
    name: 'Resim Defteri A3',
    description: '120 gr/m², 30 yaprak, eskiz ve çizim için ideal',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1588014328208-de6c5973a014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHBhaW50aW5nfGVufDF8fHx8MTc2MTI5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'sanat-malzemeleri',
    stock: 67,
    featured: false
  },
  {
    id: '19',
    name: 'Profesyonel Fırça Seti',
    description: '12 parça, farklı boyut ve şekillerde sanat fırçası',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1588014328208-de6c5973a014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHBhaW50aW5nfGVufDF8fHx8MTc2MTI5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'sanat-malzemeleri',
    stock: 45,
    featured: false
  },
  {
    id: '20',
    name: 'Grafik Tablet + Kalem',
    description: 'Dijital çizim için profesyonel grafik tablet',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1588014328208-de6c5973a014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdXBwbGllcyUyMHBhaW50aW5nfGVufDF8fHx8MTc2MTI5MTEzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'sanat-malzemeleri',
    stock: 12,
    featured: true
  },
];

export const categories = [
  { id: 'yazi-gerecleri', name: 'Yazı Gereçleri', icon: '✏️' },
  { id: 'defter-kagit', name: 'Defter & Kağıt', icon: '📓' },
  { id: 'ofis-malzemeleri', name: 'Ofis Malzemeleri', icon: '📎' },
  { id: 'okul-urunleri', name: 'Okul Ürünleri', icon: '🎒' },
  { id: 'sanat-malzemeleri', name: 'Sanat Malzemeleri', icon: '🎨' },
];
