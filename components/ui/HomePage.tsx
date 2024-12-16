'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faPlane, faTruck, faSearch, faGlobe, faUser, faStar, faBars, faShoppingCart, faHeadset, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const languages = [
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
]

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('ar')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-['Poppins']" dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-2 px-4 text-center">
        <p>اشترك الآن واحصل على خصم 15% على أول شحنة</p>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/servizeu-logo.png" alt="Servizeu Logistics" width={150} height={40} />
          </Link>
          <nav className={`hidden md:flex space-x-6 text-sm ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>
            <Link href="/" className="hover:text-red-600 transition-colors">الرئيسية</Link>
            <Link href="/services" className="hover:text-red-600 transition-colors">خدماتنا</Link>
            <Link href="/track" className="hover:text-red-600 transition-colors">تتبع الشحنة</Link>
            <Link href="/shop" className="hover:text-red-600 transition-colors">تسوق أونلاين</Link>
            <Link href="/partner" className="hover:text-red-600 transition-colors">كن شريكاً</Link>
            <Link href="/support" className="hover:text-red-600 transition-colors">الدعم</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Tabs defaultValue={currentLanguage} onValueChange={setCurrentLanguage}>
              <TabsList>
                {languages.map((lang) => (
                  <TabsTrigger key={lang.code} value={lang.code}>
                    {lang.flag}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <Link href="/login" className="text-sm hover:text-red-600 transition-colors">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              تسجيل الدخول
            </Link>
            <Button className="bg-red-600 hover:bg-red-700">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              تسوق أونلاين
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-2xl">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40">
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50 p-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="hover:text-red-600 transition-colors">الرئيسية</Link>
              <Link href="/services" className="hover:text-red-600 transition-colors">خدماتنا</Link>
              <Link href="/track" className="hover:text-red-600 transition-colors">تتبع الشحنة</Link>
              <Link href="/shop" className="hover:text-red-600 transition-colors">تسوق أونلاين</Link>
              <Link href="/partner" className="hover:text-red-600 transition-colors">كن شريكاً</Link>
              <Link href="/support" className="hover:text-red-600 transition-colors">الدعم</Link>
            </nav>
          </div>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              شركة سيرفس يو لوجستك
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8"
            >
              لخدمات الشحن الدولية المتكاملة
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center space-x-4"
            >

              <Link href="services">
              <Button size="lg" className="text-white border-white hover:bg-white hover:text-red-600">
              احجز موعدك اليوم
              </Button>
              </Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-around">
            <div className="text-center">
              <p className="text-4xl font-bold">5281</p>
              <p>العملاء</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">5281</p>
              <p>الشحنات</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">4.8</p>
              <p>تقييم العملاء</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">خدماتنا</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: faShip, title: 'الشحن البحري', description: 'حلول شحن بحري موثوقة وفعالة من حيث التكلفة لشحناتك.' },
                { icon: faPlane, title: 'الشحن الجوي', description: 'نقل جوي سريع وفعال للشحنات العاجلة.' },
                { icon: faTruck, title: 'النقل البري', description: 'خدمات لوجستية شاملة مصممة لتلبية احتياجات عملك.' }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <FontAwesomeIcon icon={service.icon} className="text-5xl text-red-600 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Shipment Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">تتبع شحنتك</h2>
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="tracking-number" className="block text-sm font-medium text-gray-700 mb-1">رقم التتبع</label>
                      <Input id="tracking-number" placeholder="أدخل رقم التتبع الخاص بك" />
                    </div>
                    <Link href="/track">
                      <Button className="w-full bg-red-600 hover:bg-red-700">تتبع الشحنة</Button>
                    </Link>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">عن الشركة</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image src="/about-image.jpg" alt="About Servizeu Logistics" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <p className="text-lg mb-6">
                  شركة سيرفس يو لوجستك هي شركة رائدة في خدمات الشحن الدولي لأكثر من سبعة أعوام. تأسست في كوالالمبور، ماليزيا في نوفمبر 2017، وقد حصدت رضا العملاء وكونت شراكات قوية في القطاع.
                </p>
                <p className="text-lg mb-6">
                  نقدم خدمات بنموذج عمل جديد يساعدنا على تقديم أفضل الأسعار لشحنات لجميع الوجهات العالمية جواً وبحراً وبراً.
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  اقرأ المزيد
                  <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">آخر الأخبار</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'أسعار الشحن البحري', description: 'تحديث حول أحدث أسعار الشحن البحري وكيفية تأثير التغيرات في السوق.' },
                { title: 'أنواع الحاويات', description: 'دليل شامل لأنواع الحاويات المختلفة المستخدمة في الشحن البحري وفوائد كل نوع.' },
                { title: 'المسافات والوقت المستغرق', description: 'كيفية حساب المسافات والوقت المتوقع للوصول بناءً على مسار الشحن.' }
              ].map((news, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image src={`/news-${index + 1}.jpg`} alt={news.title} width={400} height={200} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.description}</p>
                    <Link href={`/news/${index + 1}`} className="text-red-600 hover:text-red-700 transition-colors">
                      اقرأ المزيد
                      <FontAwesomeIcon icon={faChevronRight} className="mr-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">تقييمات العملاء</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Image src="/avatar.jpg" alt="Customer" width={50} height={50} className="rounded-full mr-4" />
                      <div>
                        <p className="font-semibold">أحمد محمد</p>
                        <p className="text-sm text-gray-500">عميل منذ 2021</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon 
                          key={star} 
                          icon={faStar} 
                          className={star <= 4 ? "text-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700">حقيقتاً تشحن راحة البال. خدمة ممتازة وموثوقة، وصلت شحنتي في الوقت المحدد وبحالة ممتازة. أنصح بشدة بالتعامل مع سيرفس يو لوجستك.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image src="/servizeu-logo-white.png" alt="Servizeu Logistics" width={150} height={40} className="mb-4" />
              <p className="text-sm text-gray-400">شريكك الموثوق في حلول الشحن العالمية.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-red-600 transition-colors">عن الشركة</Link></li>
                <li><Link href="/services" className="hover:text-red-600 transition-colors">خدماتنا</Link></li>
                <li><Link href="/track" className="hover:text-red-600 transition-colors">تتبع الشحنة</Link></li>
                <li><Link href="/contact" className="hover:text-red-600 transition-colors">اتصل بنا</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">معلومات الاتصال</h4>
              <p className="mb-2 text-gray-400">123 شارع اللوجستيات، مدينة الشحن، 12345</p>
              <p className="mb-2 text-gray-400">هاتف: 1234-567-555-1+</p>
              <p className="text-gray-400">البريد الإلكتروني: info@servizeu.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">تابعنا</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">&copy; 2024 سيرفس يو لوجستك. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
