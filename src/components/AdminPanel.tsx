import { useState } from 'react';
import { Product } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Pencil, Trash2, Plus, Package, TrendingUp, ShoppingCart, Users, LogOut } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { categories } from '../data/products';

interface AdminPanelProps {
  products: Product[];
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onAddProduct: (product: Product) => void;
  onLogout: () => void;
}

export function AdminPanel({ products, onUpdateProduct, onDeleteProduct, onAddProduct, onLogout }: AdminPanelProps) {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    stock: 0,
    featured: false,
  });

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setFormData(product);
    setEditDialogOpen(true);
  };

  const handleAdd = () => {
    setFormData({
      name: '',
      description: '',
      price: 0,
      image: 'https://images.unsplash.com/photo-1584631716657-a78c9d18aaac?w=400',
      category: 'yazi-gerecleri',
      stock: 0,
      featured: false,
    });
    setAddDialogOpen(true);
  };

  const handleSave = () => {
    if (selectedProduct) {
      onUpdateProduct({ ...selectedProduct, ...formData } as Product);
      toast.success('Ürün başarıyla güncellendi!');
    }
    setEditDialogOpen(false);
  };

  const handleCreate = () => {
    const newProduct: Product = {
      id: Date.now().toString(),
      ...formData as Omit<Product, 'id'>,
    };
    onAddProduct(newProduct);
    toast.success('Ürün başarıyla eklendi!');
    setAddDialogOpen(false);
  };

  const handleDelete = (productId: string) => {
    if (window.confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      onDeleteProduct(productId);
      toast.success('Ürün başarıyla silindi!');
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  // Stats
  const totalProducts = products.length;
  const lowStockProducts = products.filter(p => p.stock < 10).length;
  const totalValue = products.reduce((sum, p) => sum + (p.price * p.stock), 0);
  const avgPrice = totalValue / totalProducts;

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl text-gray-900">Yönetim Paneli</h1>
          <p className="text-gray-600">Ürünleri yönet, stok takibi yap</p>
        </div>
        <div className="flex gap-3">
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Plus className="mr-2 h-4 w-4" />
            Yeni Ürün Ekle
          </Button>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Çıkış Yap
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="products">Ürünler</TabsTrigger>
          <TabsTrigger value="stock">Stok Takibi</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-4">
            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <Package className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Toplam Ürün</p>
                  <p className="text-2xl text-gray-900">{totalProducts}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Düşük Stok</p>
                  <p className="text-2xl text-gray-900">{lowStockProducts}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Stok Değeri</p>
                  <p className="text-2xl text-gray-900">{totalValue.toFixed(0)} ₺</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-600">Ort. Fiyat</p>
                  <p className="text-2xl text-gray-900">{avgPrice.toFixed(0)} ₺</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Category Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Kategorilere Göre Dağılım</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category) => {
                  const categoryProducts = products.filter(p => p.category === category.id);
                  const percentage = (categoryProducts.length / totalProducts) * 100;
                  return (
                    <div key={category.id}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          {category.icon} {category.name}
                        </span>
                        <span className="text-sm text-gray-900">
                          {categoryProducts.length} ürün ({percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card>
            <CardContent className="p-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ürün</TableHead>
                    <TableHead>Kategori</TableHead>
                    <TableHead>Fiyat</TableHead>
                    <TableHead>Stok</TableHead>
                    <TableHead>Durum</TableHead>
                    <TableHead className="text-right">İşlemler</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded object-cover"
                          />
                          <div>
                            <div className="text-sm">{product.name}</div>
                            {product.featured && (
                              <Badge variant="secondary" className="mt-1">Öne Çıkan</Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {categories.find(c => c.id === product.category)?.name}
                      </TableCell>
                      <TableCell>{product.price.toFixed(2)} ₺</TableCell>
                      <TableCell>
                        <Badge variant={product.stock < 10 ? 'destructive' : 'default'}>
                          {product.stock}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {product.stock > 0 ? (
                          <Badge className="bg-green-100 text-green-800">Stokta</Badge>
                        ) : (
                          <Badge variant="destructive">Tükendi</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(product)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDelete(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stock">
          <Card>
            <CardHeader>
              <CardTitle>Düşük Stok Uyarıları</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ürün</TableHead>
                    <TableHead>Mevcut Stok</TableHead>
                    <TableHead>Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.filter(p => p.stock < 10).map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded object-cover"
                          />
                          {product.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">{product.stock}</Badge>
                      </TableCell>
                      <TableCell>
                        {product.stock === 0 ? (
                          <span className="text-red-600">Tükendi - Acil Tedarik</span>
                        ) : (
                          <span className="text-orange-600">Düşük Stok</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Ürün Düzenle</DialogTitle>
            <DialogDescription>
              Ürün bilgilerini güncelleyin
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="name">Ürün Adı</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="description">Açıklama</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="price">Fiyat (₺)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleChange('price', parseFloat(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="stock">Stok</Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => handleChange('stock', parseInt(e.target.value))}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="category">Kategori</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => handleChange('featured', e.target.checked)}
                className="h-4 w-4"
              />
              <Label htmlFor="featured">Öne çıkan ürün</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              İptal
            </Button>
            <Button
              onClick={handleSave}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Kaydet
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Yeni Ürün Ekle</DialogTitle>
            <DialogDescription>
              Yeni ürün bilgilerini girin
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div>
              <Label htmlFor="add-name">Ürün Adı</Label>
              <Input
                id="add-name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="add-description">Açıklama</Label>
              <Textarea
                id="add-description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="add-price">Fiyat (₺)</Label>
                <Input
                  id="add-price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) => handleChange('price', parseFloat(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="add-stock">Stok</Label>
                <Input
                  id="add-stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => handleChange('stock', parseInt(e.target.value))}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="add-category">Kategori</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleChange('category', value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.icon} {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="add-featured"
                checked={formData.featured}
                onChange={(e) => handleChange('featured', e.target.checked)}
                className="h-4 w-4"
              />
              <Label htmlFor="add-featured">Öne çıkan ürün</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
              İptal
            </Button>
            <Button
              onClick={handleCreate}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              Ekle
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
