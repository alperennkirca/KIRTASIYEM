import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Phone } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

export function FAQPage({ onNavigate }: FAQPageProps) {
  const faqs = [
    {
      category: 'Sipariş ve Teslimat',
      questions: [
        {
          q: 'Siparişimi ne kadar sürede teslim alırım?',
          a: 'Siparişiniz onaylandıktan sonra 1-3 iş günü içinde kargoya verilir. Kargo süresi bölgenize göre 2-5 iş günü arasında değişmektedir.',
        },
        {
          q: 'Kargo ücreti ne kadardır?',
          a: '250 TL ve üzeri siparişlerde kargo ücretsizdir. 250 TL altı siparişlerde kargo ücreti 29.99 TL\'dir.',
        },
        {
          q: 'Siparişimi nasıl takip edebilirim?',
          a: 'Siparişiniz kargoya verildikten sonra e-posta adresinize kargo takip numarası gönderilir. Bu numara ile kargo firmasının web sitesinden takip yapabilirsiniz.',
        },
        {
          q: 'Aynı gün teslimat yapıyor musunuz?',
          a: 'Şu an için aynı gün teslimat hizmetimiz bulunmamaktadır. Ancak hızlı kargo seçeneği ile siparişleriniz en kısa sürede elinize ulaşır.',
        },
      ],
    },
    {
      category: 'Ödeme',
      questions: [
        {
          q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
          a: 'Kredi kartı (Visa, Mastercard, American Express) ve banka havalesi/EFT ile ödeme yapabilirsiniz. Tüm ödemeler SSL sertifikası ile güvence altındadır.',
        },
        {
          q: 'Taksit yapabilir miyim?',
          a: 'Evet, kredi kartı ile 3, 6, 9 ve 12 taksit seçenekleri mevcuttur. Taksit oranları bankanıza göre değişmektedir.',
        },
        {
          q: 'Ödeme bilgilerim güvende mi?',
          a: 'Evet, tüm ödeme işlemleri 256-bit SSL sertifikası ile şifrelenir. Kredi kartı bilgileriniz sistemimizde saklanmaz.',
        },
        {
          q: 'Havale ile ödeme yaptım, ne zaman onaylanır?',
          a: 'Havale ödemeleri banka mesai saatleri içinde genellikle 1-2 saat içinde onaylanır. Mesai saatleri dışındaki havaleler ertesi iş günü işleme alınır.',
        },
      ],
    },
    {
      category: 'İade ve Değişim',
      questions: [
        {
          q: 'İade koşulları nelerdir?',
          a: 'Ürünü teslim aldıktan sonra 14 gün içinde, kullanılmamış ve ambalajı açılmamış olmak koşuluyla iade edebilirsiniz.',
        },
        {
          q: 'İade için ne yapmalıyım?',
          a: 'Müşteri hizmetlerimize telefon veya e-posta ile başvurmanız yeterlidir. Size iade prosedürü hakkında detaylı bilgi verilecektir.',
        },
        {
          q: 'İade kargo ücreti kim tarafından karşılanır?',
          a: 'Ürün ayıplı veya hatalı gönderilmişse iade kargo ücreti tarafımızca karşılanır. Cayma hakkı kullanımında iade kargo ücreti müşteriye aittir.',
        },
        {
          q: 'İade sürecim ne kadar sürer?',
          a: 'İade talebiniz onaylandıktan ve ürün tarafımıza ulaştıktan sonra 5-10 iş günü içinde ödemeniz iade edilir.',
        },
      ],
    },
    {
      category: 'Ürünler',
      questions: [
        {
          q: 'Ürünlerin orijinalliği garanti mi?',
          a: 'Evet, tüm ürünlerimiz orijinal ve resmi distribütörlerden temin edilmektedir. Gerekli garanti belgeleri ürünlerle birlikte gönderilir.',
        },
        {
          q: 'Stokta olmayan ürün ne zaman gelir?',
          a: 'Stokta olmayan ürünler için tahmini temin süresi ürün sayfasında belirtilir. E-posta adresinizi bırakırsanız ürün geldiğinde size bilgi veririz.',
        },
        {
          q: 'Toplu alımlarda indirim var mı?',
          a: 'Evet, toplu alımlarda özel fiyatlandırma yapılmaktadır. Kurumsal satış ekibimizle iletişime geçerek teklif alabilirsiniz.',
        },
        {
          q: 'Ürün hakkında daha fazla bilgi alabilir miyim?',
          a: 'Ürün sayfalarında detaylı açıklamalar bulunmaktadır. Daha fazla bilgi için müşteri hizmetlerimize ulaşabilirsiniz.',
        },
      ],
    },
    {
      category: 'Hesap ve Üyelik',
      questions: [
        {
          q: 'Üye olmak zorunda mıyım?',
          a: 'Hayır, üye olmadan da alışveriş yapabilirsiniz. Ancak üye olursanız siparişlerinizi takip edebilir ve daha hızlı alışveriş yapabilirsiniz.',
        },
        {
          q: 'Şifremi unuttum, ne yapmalıyım?',
          a: 'Giriş sayfasındaki "Şifremi Unuttum" bağlantısına tıklayarak e-posta adresinizi girin. Size şifre sıfırlama bağlantısı gönderilecektir.',
        },
        {
          q: 'Hesap bilgilerimi nasıl güncellerim?',
          a: 'Hesabınıza giriş yaptıktan sonra "Hesabım" bölümünden tüm bilgilerinizi güncelleyebilirsiniz.',
        },
        {
          q: 'Hesabımı silebilir miyim?',
          a: 'Evet, hesap silme talebi için müşteri hizmetlerimize başvurabilirsiniz. Hesabınız ve tüm verileriniz sistemden silinecektir.',
        },
      ],
    },
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-4xl text-gray-900">Sık Sorulan Sorular</h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Aklınıza takılan soruların cevaplarını burada bulabilirsiniz
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="space-y-8">
        {faqs.map((category, categoryIndex) => (
          <Card key={categoryIndex}>
            <CardContent className="p-6">
              <h2 className="mb-4 text-2xl text-gray-900">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                    <AccordionTrigger className="text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact CTA */}
      <Card className="border-none bg-gradient-to-r from-purple-500 to-pink-500">
        <CardContent className="p-8 text-center text-white md:p-12">
          <h2 className="mb-4 text-3xl">Aradığınız Cevabı Bulamadınız mı?</h2>
          <p className="mb-6 text-lg text-white/90">
            Müşteri hizmetleri ekibimiz size yardımcı olmak için hazır
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-white/90"
              onClick={() => onNavigate('contact')}
            >
              Bize Ulaşın
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-white/90"
              asChild
            >
              <a href="tel:05393612631" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                0539 361 26 31
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
