import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl text-gray-900">İletişim</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Sorularınız, önerileriniz veya destek talepleriniz için bize ulaşın
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-6 text-2xl text-gray-900">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Ad Soyad *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div>
                <Label htmlFor="email">E-posta *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="5393612631"
                />
              </div>

              <div>
                <Label htmlFor="subject">Konu *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Mesaj konusu"
                />
              </div>

              <div>
                <Label htmlFor="message">Mesajınız *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Mesajınızı buraya yazın..."
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                size="lg"
              >
                Gönder
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="border-none bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <h2 className="mb-6 text-2xl text-gray-900">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Telefon</div>
                    <div className="text-gray-900">+90 5393612631</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
                    <Mail className="h-5 w-5 text-pink-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">E-posta</div>
                    <div className="text-gray-900">info@example.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Adres</div>
                    <div className="text-gray-900">
                      XXXX Mahallesi Y Sk. No:81<br />
                      Türkiye
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Çalışma Saatleri</div>
                    <div className="text-gray-900">Pazartesi - Cuma: 09:00 - 18:00</div>
                    <div className="text-gray-900">Cumartesi: 10:00 - 16:00</div>
                    <div className="text-gray-900">Pazar: Kapalı</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-xl text-gray-900">Bizi Takip Edin</h3>
              <p className="mb-4 text-gray-600">
                Kampanyalardan ve yeni ürünlerden haberdar olmak için sosyal medya hesaplarımızı 
                takip edebilirsiniz.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  Facebook
                </Button>
                <Button variant="outline" className="flex-1">
                  Instagram
                </Button>
                <Button variant="outline" className="flex-1">
                  Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Placeholder */}
      <Card>
        <CardContent className="p-0">
          <div className="flex h-[300px] items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-12 w-12 text-purple-600" />
              <p className="text-gray-600">Harita konumu burada görüntülenecek</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
