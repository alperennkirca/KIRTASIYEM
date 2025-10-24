import { Product } from '../types';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onProductClick }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div 
        className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
        onClick={() => onProductClick?.(product)}
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
        {product.featured && (
          <Badge className="absolute right-2 top-2 bg-pink-500">
            Öne Çıkan
          </Badge>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <Badge className="absolute left-2 top-2 bg-orange-500">
            Son {product.stock} adet
          </Badge>
        )}
        {product.stock === 0 && (
          <Badge className="absolute left-2 top-2 bg-gray-500">
            Tükendi
          </Badge>
        )}
      </div>
      <CardContent 
        className="p-4 cursor-pointer"
        onClick={() => onProductClick?.(product)}
      >
        <h3 className="mb-2 line-clamp-2 text-gray-900">{product.name}</h3>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600">{product.description}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl text-purple-600">{product.price.toFixed(2)} ₺</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          onClick={() => onAddToCart(product)}
          disabled={product.stock === 0}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {product.stock === 0 ? 'Stokta Yok' : 'Sepete Ekle'}
        </Button>
      </CardFooter>
    </Card>
  );
}
