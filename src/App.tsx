import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductsPage } from './components/ProductsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { CampaignsPage } from './components/CampaignsPage';
import { FAQPage } from './components/FAQPage';
import { ShippingReturnsPage } from './components/ShippingReturnsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { AdminPanel } from './components/AdminPanel';
import { ProfilePage } from './components/ProfilePage';
import { CartSheet } from './components/CartSheet';
import { ProductDetailDialog } from './components/ProductDetailDialog';
import { Product, CartItem } from './types';
import { products as initialProducts } from './data/products';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { Button } from './components/ui/button';
import { Lock } from 'lucide-react';
import { AuthProvider } from './components/AuthContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productDetailOpen, setProductDetailOpen] = useState(false);

  // Check for admin access on mount
  useEffect(() => {
    const adminAccess = localStorage.getItem('adminAccess');
    if (adminAccess === 'true') {
      setAdminUnlocked(true);
    }
  }, []);

  const handleNavigate = (page: string, category?: string) => {
    setCurrentPage(page);
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(undefined);
    }
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        toast.error('Stokta yeterli ürün yok!');
        return;
      }
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    toast.success('Ürün sepete eklendi!');
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.success('Ürün sepetten çıkarıldı!');
  };

  const handleUpdateProduct = (product: Product) => {
    setProducts(products.map(p => p.id === product.id ? product : p));
  };

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  const handleAddProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const handleAdminAccess = () => {
    const password = prompt('Yönetim paneli şifresi:');
    if (password === 'admin123') {
      setAdminUnlocked(true);
      localStorage.setItem('adminAccess', 'true');
      setCurrentPage('admin');
      toast.success('Yönetim paneline hoş geldiniz!');
    } else {
      toast.error('Hatalı şifre!');
    }
  };

  const handleAdminLogout = () => {
    setAdminUnlocked(false);
    localStorage.removeItem('adminAccess');
    setCurrentPage('home');
    toast.success('Çıkış yapıldı!');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setProductDetailOpen(true);
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const featuredProducts = products.filter(p => p.featured).slice(0, 8);

  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-purple-50/30">
        <Toaster position="top-center" />
      
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setCartOpen(true)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
        onSearch={handleSearch}
        products={products}
        onProductSelect={handleProductClick}
      />

      <main className="container mx-auto flex-1 px-4 py-8">
        {currentPage === 'home' && (
          <HomePage
            featuredProducts={featuredProducts}
            onAddToCart={handleAddToCart}
            onNavigate={handleNavigate}
            onProductClick={handleProductClick}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            products={products}
            onAddToCart={handleAddToCart}
            initialCategory={selectedCategory}
            searchQuery={searchQuery}
            onProductClick={handleProductClick}
          />
        )}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'campaigns' && (
          <CampaignsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'faq' && (
          <FAQPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'shipping-returns' && <ShippingReturnsPage />}

        {currentPage === 'privacy-policy' && <PrivacyPolicyPage />}

        {currentPage === 'profile' && <ProfilePage onNavigate={handleNavigate} />}

        {currentPage === 'admin' && (
          <>
            {adminUnlocked ? (
              <AdminPanel
                products={products}
                onUpdateProduct={handleUpdateProduct}
                onDeleteProduct={handleDeleteProduct}
                onAddProduct={handleAddProduct}
                onLogout={handleAdminLogout}
              />
            ) : (
              <div className="flex min-h-[60vh] flex-col items-center justify-center">
                <div className="text-center">
                  <Lock className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                  <h2 className="mb-4 text-2xl text-gray-900">Yönetim Paneli</h2>
                  <p className="mb-6 text-gray-600">
                    Bu sayfaya erişmek için giriş yapmanız gerekiyor
                  </p>
                  <Button
                    onClick={handleAdminAccess}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Giriş Yap
                  </Button>
                  <p className="mt-4 text-sm text-gray-500">Demo şifre: admin123</p>
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />

      <CartSheet
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />

      <ProductDetailDialog
        product={selectedProduct}
        open={productDetailOpen}
        onOpenChange={setProductDetailOpen}
        onAddToCart={handleAddToCart}
      />

      {/* Admin Access Button - Fixed Bottom Right */}
      <Button
        onClick={() => handleNavigate('admin')}
        className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0 shadow-lg hover:from-purple-600 hover:to-pink-600"
        title="Yönetim Paneli"
      >
        <Lock className="h-5 w-5" />
      </Button>
      </div>
    </AuthProvider>
  );
}
