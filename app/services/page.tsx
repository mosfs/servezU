'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShip, faPlane, faTruck, faBox, faWarehouse, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const languages = {
  ar: {
    title: 'خدماتنا',
    description: 'نقدم مجموعة شاملة من خدمات الشحن لتلبية جميع احتياجاتك اللوجستية',
    seaFreight: {
      title: 'الشحن البحري',
      description: 'حلول شحن بحري موثوقة وفعالة من حيث التكلفة لشحناتك الكبيرة والثقيلة.',
      services: [
        'شحن الحاويات الكاملة (FCL)',
        'شحن الحاويات الجزئية (LCL)',
        'الشحن السائب',
        'شحن البضائع الخطرة',
      ]
    },
    airFreight: {
      title: 'الشحن الجوي',
      description: 'خدمات شحن جوي سريعة وموثوقة للشحنات العاجلة والحساسة للوقت.',
      services: [
        'الشحن الجوي السريع',
        'الشحن الجوي القياسي',
        'شحن البضائع الخاصة',
        'خدمات الشحن من الباب إلى الباب',
      ]
    },
    landFreight: {
      title: 'النقل البري',
      description: 'خدمات نقل بري شاملة لتوصيل شحناتك بأمان وكفاءة.',
      services: [
        'النقل بالشاحنات الكاملة (FTL)',
        'النقل بالشاحنات الجزئية (LTL)',
        'خدمات التوزيع المحلي',
        'نقل البضائع الثقيلة والضخمة',
      ]
    },
    additionalServices: {
      title: 'خدمات إضافية',
      description: 'نقدم مجموعة من الخدمات الإضافية لتلبية جميع احتياجاتك اللوجستية.',
      services: [
        { icon: faBox, title: 'التعبئة والتغليف', description: 'خدمات تعبئة وتغليف احترافية لحماية بضائعك' },
        { icon: faWarehouse, title: 'التخزين', description: 'حلول تخزين آمنة وفعالة لإدارة المخزون الخاص بك' },
        { icon: faClipboardCheck, title: 'التخليص الجمركي', description: 'خدمات التخليص الجمركي لضمان انتقال سلس للبضائع عبر الحدود' },
      ]
    },
    cta: 'احصل على عرض سعر',
  },
  en: {
    title: 'Our Services',
    description: 'We offer a comprehensive range of shipping services to meet all your logistics needs',
    seaFreight: {
      title: 'Sea Freight',
      description: 'Reliable and cost-effective sea freight solutions for your large and heavy shipments.',
      services: [
        'Full Container Load (FCL)',
        'Less than Container Load (LCL)',
        'Bulk Shipping',
        'Dangerous Goods Shipping',
      ]
    },
    airFreight: {
      title: 'Air Freight',
      description: 'Fast and reliable air freight services for urgent and time-sensitive shipments.',
      services: [
        'Express Air Freight',
        'Standard Air Freight',
        'Special Cargo Shipping',
        'Door-to-Door Services',
      ]
    },
    landFreight: {
      title: 'Land Freight',
      description: 'Comprehensive land transportation services to deliver your shipments safely and efficiently.',
      services: [
        'Full Truckload (FTL)',
        'Less than Truckload (LTL)',
        'Local Distribution Services',
        'Heavy and Oversized Cargo Transport',
      ]
    },
    additionalServices: {
      title: 'Additional Services',
      description: 'We offer a range of additional services to meet all your logistics needs.',
      services: [
        { icon: faBox, title: 'Packaging', description: 'Professional packaging services to protect your goods' },
        { icon: faWarehouse, title: 'Warehousing', description: 'Secure and efficient storage solutions for your inventory management' },
        { icon: faClipboardCheck, title: 'Customs Clearance', description: 'Customs clearance services to ensure smooth transit of goods across borders' },
      ]
    },
    cta: 'Get a Quote',
  },
  ms: {
    title: 'Perkhidmatan Kami',
    description: 'Kami menawarkan pelbagai perkhidmatan penghantaran yang komprehensif untuk memenuhi semua keperluan logistik anda',
    seaFreight: {
      title: 'Pengangkutan Laut',
      description: 'Penyelesaian pengangkutan laut yang boleh dipercayai dan kos efektif untuk penghantaran besar dan berat anda.',
      services: [
        'Muatan Kontena Penuh (FCL)',
        'Muatan Kontena Separa (LCL)',
        'Penghantaran Pukal',
        'Penghantaran Barangan Berbahaya',
      ]
    },
    airFreight: {
      title: 'Pengangkutan Udara',
      description: 'Perkhidmatan pengangkutan udara yang pantas dan boleh dipercayai untuk penghantaran segera dan sensitif masa.',
      services: [
        'Pengangkutan Udara Ekspres',
        'Pengangkutan Udara Standard',
        'Penghantaran Kargo Khas',
        'Perkhidmatan Pintu ke Pintu',
      ]
    },
    landFreight: {
      title: 'Pengangkutan Darat',
      description: 'Perkhidmatan pengangkutan darat yang komprehensif untuk menghantar penghantaran anda dengan selamat dan cekap.',
      services: [
        'Muatan Trak Penuh (FTL)',
        'Muatan Trak Separa (LTL)',
        'Perkhidmatan Pengedaran Tempatan',
        'Pengangkutan Kargo Berat dan Bersaiz Besar',
      ]
    },
    additionalServices: {
      title: 'Perkhidmatan Tambahan',
      description: 'Kami menawarkan pelbagai perkhidmatan tambahan untuk memenuhi semua keperluan logistik anda.',
      services: [
        { icon: faBox, title: 'Pembungkusan', description: 'Perkhidmatan pembungkusan profesional untuk melindungi barangan anda' },
        { icon: faWarehouse, title: 'Pergudangan', description: 'Penyelesaian penyimpanan yang selamat dan cekap untuk pengurusan inventori anda' },
        { icon: faClipboardCheck, title: 'Pelepasan Kastam', description: 'Perkhidmatan pelepasan kastam untuk memastikan transit barangan yang lancar merentasi sempadan' },
      ]
    },
    cta: 'Dapatkan Sebut Harga',
  }
}

export default function Services() {
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
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: faShip, ...content.seaFreight },
            { icon: faPlane, ...content.airFreight },
            { icon: faTruck, ...content.landFreight },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FontAwesomeIcon icon={service.icon} className="text-3xl text-red-600 mr-4" />
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {service.services.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">{content.additionalServices.title}</h2>
        <p className="text-lg text-gray-600 mb-8">{content.additionalServices.description}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {content.additionalServices.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FontAwesomeIcon icon={service.icon} className="text-3xl text-red-600 mr-4" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            {content.cta}
          </Button>
        </div>
      </main>
    </div>
  )
}