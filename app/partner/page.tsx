'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faChartLine, faTruckMoving, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const languages = {
  ar: {
    title: 'كن شريكاً',
    description: 'انضم إلينا وانمو معنا في عالم الخدمات اللوجستية',
    benefits: 'مزايا الشراكة معنا',
    benefitsList: [
      { 
        icon: faHandshake, 
        title: 'شراكة قوية', 
        description: 'استفد من خبرتنا ومواردنا لتنمية أعمالك'
      },
      {
        icon: faChartLine,
        title: 'نمو مستدام',
        description: 'فرص نمو حقيقية وعوائد مجزية'
      },
      {
        icon: faTruckMoving,
        title: 'خدمات متكاملة',
        description: 'حلول لوجستية شاملة لجميع احتياجاتك'
      },
      {
        icon: faGlobe,
        title: 'تغطية واسعة',
        description: 'شبكة واسعة من الشركاء والعملاء'
      }
    ],
    form: {
      title: 'نموذج طلب الشراكة',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'رسالتك',
      submit: 'إرسال الطلب'
    }
  },
  en: {
    title: 'Become a Partner',
    description: 'Join us and grow together in the world of logistics',
    benefits: 'Partnership Benefits',
    benefitsList: [
      {
        icon: faHandshake,
        title: 'Strong Partnership',
        description: 'Leverage our expertise and resources to grow your business'
      },
      {
        icon: faChartLine,
        title: 'Sustainable Growth',
        description: 'Real growth opportunities and rewarding returns'
      },
      {
        icon: faTruckMoving,
        title: 'Integrated Services',
        description: 'Comprehensive logistics solutions for all your needs'
      },
      {
        icon: faGlobe,
        title: 'Wide Coverage',
        description: 'Extensive network of partners and clients'
      }
    ],
    form: {
      title: 'Partnership Application Form',
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Your Message',
      submit: 'Submit Application'
    }
  }
}

export default function PartnerPage() {
  const [currentLang, setCurrentLang] = useState('ar')
  const content = languages[currentLang]

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <Tabs defaultValue="benefits" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="benefits">{content.benefits}</TabsTrigger>
          <TabsTrigger value="form">{content.form.title}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="benefits">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {content.benefitsList.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <FontAwesomeIcon icon={benefit.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="form">
          <Card>
            <CardHeader>
              <CardTitle>{content.form.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder={content.form.name} />
                <Input type="email" placeholder={content.form.email} />
                <Input placeholder={content.form.phone} />
                <Textarea placeholder={content.form.message} />
                <Button type="submit" className="w-full">
                  {content.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="fixed top-4 right-4">
        <Button
          variant="outline"
          onClick={() => setCurrentLang(currentLang === 'ar' ? 'en' : 'ar')}
        >
          {currentLang === 'ar' ? 'English' : 'العربية'}
        </Button>
      </div>
    </motion.div>
  )
}