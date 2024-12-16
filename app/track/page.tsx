'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBox, faCheckCircle, faTruck, faShip, faPlane } from '@fortawesome/free-solid-svg-icons'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const languages = {
  ar: {
    title: 'تتبع الشحنة',
    description: 'أدخل رقم التتبع الخاص بك للحصول على معلومات حول شحنتك',
    trackingNumber: 'رقم التتبع',
    trackButton: 'تتبع',
    status: 'الحالة',
    origin: 'المصدر',
    destination: 'الوجهة',
    estimatedDelivery: 'موعد التسليم المتوقع',
    updates: 'التحديثات',
    error: 'لم يتم العثور على الشحنة. يرجى التحقق من رقم التتبع وحاول مرة أخرى.',
  },
  en: {
    title: 'Track Shipment',
    description: 'Enter your tracking number to get information about your shipment',
    trackingNumber: 'Tracking Number',
    trackButton: 'Track',
    status: 'Status',
    origin: 'Origin',
    destination: 'Destination',
    estimatedDelivery: 'Estimated Delivery',
    updates: 'Updates',
    error: 'Shipment not found. Please check your tracking number and try again.',
  },
  ms: {
    title: 'Jejak Penghantaran',title: 'Jejak Penghantaran',
    description: 'Masukkan nombor penjejakan anda untuk mendapatkan maklumat tentang penghantaran anda',
    trackingNumber: 'Nombor Penjejakan',
    trackButton: 'Jejak',
    status: 'Status',
    origin: 'Asal',
    destination: 'Destinasi',
    estimatedDelivery: 'Anggaran Penghantaran',
    updates: 'Kemas Kini',
    error: 'Penghantaran tidak dijumpai. Sila semak nombor penjejakan anda dan cuba lagi.',
  }
}

// Mock shipment data for demonstration
const mockShipments = {
  'SHIP123456': {
    status: 'In Transit',
    origin: 'New York, USA',
    destination: 'London, UK',
    estimatedDelivery: '2024-06-15',
    updates: [
      { date: '2024-06-01', status: 'Shipment picked up', location: 'New York, USA' },
      { date: '2024-06-03', status: 'Departed sorting facility', location: 'New York, USA' },
      { date: '2024-06-05', status: 'Arrived at transit point', location: 'Dublin, Ireland' },
      { date: '2024-06-07', status: 'In transit to destination', location: 'London, UK' },
    ]
  },
  'SHIP789012': {
    status: 'Delivered',
    origin: 'Tokyo, Japan',
    destination: 'Sydney, Australia',
    estimatedDelivery: '2024-06-10',
    updates: [
      { date: '2024-06-01', status: 'Shipment picked up', location: 'Tokyo, Japan' },
      { date: '2024-06-03', status: 'Departed sorting facility', location: 'Tokyo, Japan' },
      { date: '2024-06-05', status: 'Arrived at transit point', location: 'Singapore' },
      { date: '2024-06-07', status: 'In transit to destination', location: 'Sydney, Australia' },
      { date: '2024-06-10', status: 'Delivered', location: 'Sydney, Australia' },
    ]
  }
}

export default function TrackShipment() {
  const [currentLanguage, setCurrentLanguage] = useState('ar')
  const [trackingNumber, setTrackingNumber] = useState('')
  const [shipment, setShipment] = useState(null)
  const [error, setError] = useState('')

  const content = languages[currentLanguage]

  const handleTrack = () => {
    setError('')
    setShipment(null)
    if (mockShipments[trackingNumber]) {
      setShipment(mockShipments[trackingNumber])
    } else {
      setError(content.error)
    }
  }

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
        <Card>
          <CardHeader>
            <CardTitle>{content.trackingNumber}</CardTitle>
            <CardDescription>{content.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="e.g., SHIP123456"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="flex-grow"
              />
              <Button onClick={handleTrack}>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                {content.trackButton}
              </Button>
            </div>
          </CardContent>
        </Card>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          </motion.div>
        )}

        {shipment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <Card>
              <CardHeader>
                <CardTitle>{content.trackingNumber}: {trackingNumber}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">{content.status}</p>
                    <p className="font-semibold">{shipment.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{content.estimatedDelivery}</p>
                    <p className="font-semibold">{shipment.estimatedDelivery}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{content.origin}</p>
                    <p className="font-semibold">{shipment.origin}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{content.destination}</p>
                    <p className="font-semibold">{shipment.destination}</p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4">{content.updates}</h3>
                <div className="space-y-4">
                  {shipment.updates.map((update, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        {index === 0 ? (
                          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-2xl" />
                        ) : index === shipment.updates.length - 1 ? (
                          <FontAwesomeIcon icon={faTruck} className="text-blue-500 text-2xl" />
                        ) : (
                          <FontAwesomeIcon icon={faBox} className="text-gray-400 text-2xl" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">{update.status}</p>
                        <p className="text-sm text-gray-500">{update.date} - {update.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>
    </div>
  )
}