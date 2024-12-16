'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faGlobe, faTruck, faMoneyBillWave, faHeadset } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const languages = {
    ar: {
      title: 'تسوق أونلاين',
      description: 'اشترِ من المتاجر الماليزية وشحن مشترياتك إلى بلدك بسهولة',
      howItWorks: 'كيف تعمل الخدمة',
      steps: [
        { title: 'اختر المنتجات', description: 'تصفح المتاجر الماليزية واختر المنتجات التي ترغب في شرائها' },
        { title: 'أرسل الروابط', description: 'أرسل لنا روابط المنتجات التي اخترتها' },
        { title: 'استلم عرض السعر', description: 'سنرسل لك عرض سعر يشمل تكلفة المنتجات والشحن' },
        { title: 'ادفع وانتظر', description: 'قم بالدفع وانتظر وصول مشترياتك إلى باب منزلك' },
      ],
      benefits: 'مزايا التسوق معنا',
      benefitsList: [
        { icon: faGlobe, title: 'وصول عالمي', description: 'تسوق من أي متجر ماليزي حتى لو لم يوفر الشحن الدولي' },
        { icon: faTruck, title: 'شحن موثوق', description: 'نضمن وصول مشترياتك بأمان وفي الوقت المحدد' },
        { icon: faMoneyBillWave, title: 'أسعار تنافسية', description: 'نقدم أسعار شحن تنافسية لتوفير المال' },
        { icon: faHeadset, title: 'دعم العملاء', description: 'فريق دعم متخصص لمساعدتك في كل خطوة' },
      ],
      cta: 'ابدأ التسوق الآن',
    },
    en: {
      title: 'Shop Online',
      description: 'Buy from Malaysian stores and ship your purchases to your country with ease',
      howItWorks: 'How It Works',
      steps: [
        { title: 'Choose Products', description: 'Browse Malaysian stores and select the products you want to buy' },
        { title: 'Send Links', description: "Send us the links of the products you have chosen" },
        { title: 'Receive Quote', description: "We will send you a quote including the cost of products and shipping" },
        { title: 'Pay and Wait', description: 'Make the payment and wait for your purchases to arrive at your doorstep' },
      ],
      benefits: 'Benefits of Shopping with Us',
      benefitsList: [
        { icon: faGlobe, title: 'Global Access', description: "Shop from any Malaysian store even if they don't offer international shipping" },
        { icon: faTruck, title: 'Reliable Shipping', description: 'We ensure your purchases arrive safely and on time' },
        { icon: faMoneyBillWave, title: 'Competitive Prices', description: 'We offer competitive shipping rates to save you money' },
        { icon: faHeadset, title: 'Customer Support', description: 'Dedicated support team to assist you every step of the way' },
      ],
      cta: 'Start Shopping Now',
    },
    ms: {
      title: 'Beli-belah Dalam Talian',
      description: 'Beli dari kedai Malaysia dan hantar pembelian anda ke negara anda dengan mudah',
      howItWorks: 'Cara Ia Berfungsi',
      steps: [
        { title: 'Pilih Produk', description: 'Layari kedai Malaysia dan pilih produk yang anda ingin beli' },
        { title: 'Hantar Pautan', description: 'Hantar kepada kami pautan produk yang telah anda pilih' },
        { title: 'Terima Sebut Harga', description: 'Kami akan menghantar sebut harga termasuk kos produk dan penghantaran' },
        { title: 'Bayar dan Tunggu', description: 'Buat pembayaran dan tunggu pembelian anda tiba di pintu rumah anda' },
      ],
      benefits: 'Kelebihan Membeli-belah Dengan Kami',
      benefitsList: [
        { icon: faGlobe, title: 'Akses Global', description: 'Beli-belah dari mana-mana kedai Malaysia walaupun mereka tidak menawarkan penghantaran antarabangsa' },
        { icon: faTruck, title: 'Penghantaran Boleh Dipercayai', description: 'Kami memastikan pembelian anda tiba dengan selamat dan tepat pada masanya' },
        { icon: faMoneyBillWave, title: 'Harga Kompetitif', description: 'Kami menawarkan kadar penghantaran yang kompetitif untuk menjimatkan wang anda' },
        { icon: faHeadset, title: 'Sokongan Pelanggan', description: 'Pasukan sokongan berdedikasi untuk membantu anda pada setiap langkah' },
      ],
      cta: 'Mula Membeli-belah Sekarang',
    }
  }

export default function ShopOnline() {
  const [currentLanguage, setCurrentLanguage] = useState('ar')
  const content = languages[currentLanguage]

  return (
    <div className="min-h-screen bg-gray-50" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">{content.title}</h1>
            <Tabs value={currentLanguage} onValueChange={setCurrentLanguage}>
              <TabsList>
                <TabsTrigger value="ar">العربية</TabsTrigger>
                <TabsTrigger value="en">English</TabsTrigger>
                <TabsTrigger value="ms">Bahasa Melayu</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <p className="mt-2 text-lg text-gray-600">{content.description}</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{content.howItWorks}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {content.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">{content.benefits}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {content.benefitsList.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FontAwesomeIcon icon={benefit.icon} className="text-3xl text-red-600 mr-4" />
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
         <Button 
           size="lg" 
           className="bg-red-600 hover:bg-red-700" 
           onClick={() => window.location.href = 'https://www.lazada.com.my/#?'}
            >
           <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          {content.cta}
        </Button>

        </div>
      </main>
    </div>
  )
}