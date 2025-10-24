import { ShoppingCart, Search, Menu, X, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useState, useEffect, useRef } from 'react';
import { Product } from '../types';
import { useAuth } from './AuthContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { LoginDialog } from './LoginDialog';
import { RegisterDialog } from './RegisterDialog';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  onSearch: (query: string) => void;
  products: Product[];
  onProductSelect?: (product: Product) => void;
}

export function Header({ cartItemCount, onCartClick, onNavigate, currentPage, onSearch, products, onProductSelect }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, logout } = useAuth();

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5); // Limit to 5 suggestions
      setFilteredProducts(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredProducts([]);
      setShowSuggestions(false);
    }
  }, [searchQuery, products]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      onNavigate('products');
      setShowSuggestions(false);
    }
  };

  const handleProductClick = (product: Product) => {
    setSearchQuery('');
    setShowSuggestions(false);
    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  const navItems = [
    { id: 'home', label: 'Ana Sayfa' },
    { id: 'products', label: 'Ürünler' },
    { id: 'campaigns', label: 'Kampanyalar' },
    { id: 'about', label: 'Hakkımızda' },
    { id: 'faq', label: 'SSS' },
    { id: 'contact', label: 'İletişim' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400">
              <span className="text-xl">✏️</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg text-purple-600">Renkli Kalem</div>
              <div className="text-xs text-gray-600">Kırtasiye</div>
            </div>
          </button>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full" ref={searchRef}>
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 z-10" />
              <Input
                type="search"
                placeholder="Ürün ara..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (filteredProducts.length > 0) {
                    setShowSuggestions(true);
                  }
                }}
              />
              
              {/* Suggestions Dropdown */}
              {showSuggestions && filteredProducts.length > 0 && (
                <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => handleProductClick(product)}
                      className="flex items-center gap-3 w-full p-3 hover:bg-purple-50 transition-colors text-left border-b last:border-b-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-12 w-12 rounded object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm text-gray-900 truncate">{product.name}</div>
                        <div className="text-xs text-gray-500 truncate">{product.description}</div>
                      </div>
                      <div className="text-sm text-purple-600 flex-shrink-0">{product.price.toFixed(2)} ₺</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Auth Buttons/Menu */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden sm:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => onNavigate('profile')}>
                    <User className="mr-2 h-4 w-4" />
                    Profilim
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Çıkış Yap
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setLoginOpen(true)}
                >
                  Giriş Yap
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() => setRegisterOpen(true)}
                >
                  Kayıt Ol
                </Button>
              </div>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-pink-500">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search Bar - Mobile */}
        <form onSubmit={handleSearch} className="pb-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 z-10" />
            <Input
              type="search"
              placeholder="Ürün ara..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                if (filteredProducts.length > 0) {
                  setShowSuggestions(true);
                }
              }}
            />
            
            {/* Suggestions Dropdown - Mobile */}
            {showSuggestions && filteredProducts.length > 0 && (
              <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleProductClick(product)}
                    className="flex items-center gap-3 w-full p-3 hover:bg-purple-50 transition-colors text-left border-b last:border-b-0"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-12 w-12 rounded object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-gray-900 truncate">{product.name}</div>
                      <div className="text-xs text-gray-500 truncate">{product.description}</div>
                    </div>
                    <div className="text-sm text-purple-600 flex-shrink-0">{product.price.toFixed(2)} ₺</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </form>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-1 pb-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate(item.id)}
              className={currentPage === item.id ? 'bg-purple-500 hover:bg-purple-600' : ''}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Navigation - Mobile */}
        {mobileMenuOpen && (
          <nav className="flex flex-col gap-2 pb-4 md:hidden">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`justify-start ${currentPage === item.id ? 'bg-purple-500 hover:bg-purple-600' : ''}`}
              >
                {item.label}
              </Button>
            ))}
            
            {/* Auth buttons in mobile menu */}
            {!isAuthenticated && (
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setLoginOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  Giriş Yap
                </Button>
                <Button
                  onClick={() => {
                    setRegisterOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Kayıt Ol
                </Button>
              </div>
            )}
            
            {isAuthenticated && (
              <div className="flex flex-col gap-2 pt-2 border-t">
                <div className="px-3 py-2 text-sm">
                  <div className="text-gray-900">{user?.name}</div>
                  <div className="text-xs text-gray-500">{user?.email}</div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    onNavigate('profile');
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  <User className="mr-2 h-4 w-4" />
                  Profilim
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Çıkış Yap
                </Button>
              </div>
            )}
          </nav>
        )}
      </div>

      {/* Auth Dialogs */}
      <LoginDialog
        open={loginOpen}
        onOpenChange={setLoginOpen}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
      />
      <RegisterDialog
        open={registerOpen}
        onOpenChange={setRegisterOpen}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />
    </header>
  );
}
