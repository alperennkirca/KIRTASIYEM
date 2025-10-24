import { useState, useMemo } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { categories } from '../data/products';
import { Badge } from './ui/badge';

interface ProductsPageProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  initialCategory?: string;
  searchQuery?: string;
  onProductClick?: (product: Product) => void;
}

export function ProductsPage({ products, onAddToCart, initialCategory, searchQuery, onProductClick }: ProductsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
        break;
      case 'featured':
        sorted.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
    }

    return sorted;
  }, [products, selectedCategory, sortBy, searchQuery]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl text-gray-900">Ürünler</h1>
        {searchQuery && (
          <p className="text-gray-600">
            "<span className="text-purple-600">{searchQuery}</span>" için {filteredAndSortedProducts.length} ürün bulundu
          </p>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
          className={selectedCategory === 'all' ? 'bg-purple-500 hover:bg-purple-600' : ''}
        >
          Tümü
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className={selectedCategory === category.id ? 'bg-purple-500 hover:bg-purple-600' : ''}
          >
            {category.icon} {category.name}
          </Button>
        ))}
      </div>

      {/* Filters and Sort */}
      <div className="flex items-center justify-between rounded-lg border bg-white p-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {filteredAndSortedProducts.length} ürün gösteriliyor
          </span>
          {selectedCategory !== 'all' && (
            <Badge variant="secondary">
              {categories.find(c => c.id === selectedCategory)?.name}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sırala:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Öne Çıkanlar</SelectItem>
              <SelectItem value="price-asc">Fiyat: Düşükten Yükseğe</SelectItem>
              <SelectItem value="price-desc">Fiyat: Yüksekten Düşüğe</SelectItem>
              <SelectItem value="name">İsme Göre A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border bg-gray-50 p-12 text-center">
          <div className="mb-4 text-6xl">📦</div>
          <h3 className="mb-2 text-xl text-gray-900">Ürün bulunamadı</h3>
          <p className="text-gray-600">Farklı bir kategori veya arama terimi deneyin</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredAndSortedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}
