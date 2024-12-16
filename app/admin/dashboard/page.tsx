'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faTruck, faShip, faPlane, faChartLine, faUsers, faCog, faGlobe, faMoneyBillWave, faWhatsapp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const lineChartData = [
  { name: 'Jan', shipments: 4000, revenue: 2400 },
  { name: 'Feb', shipments: 3000, revenue: 1398 },
  { name: 'Mar', shipments: 2000, revenue: 9800 },
  { name: 'Apr', shipments: 2780, revenue: 3908 },
  { name: 'May', shipments: 1890, revenue: 4800 },
  { name: 'Jun', shipments: 2390, revenue: 3800 },
]

const barChartData = [
  { name: 'Ocean', value: 4000 },
  { name: 'Air', value: 3000 },
  { name: 'Land', value: 2000 },
]

const pieChartData = [
  { name: 'North America', value: 400 },
  { name: 'Europe', value: 300 },
  { name: 'Asia', value: 300 },
  { name: 'South America', value: 200 },
  { name: 'Africa', value: 100 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

// Mock data for shipments and clients
const shipments = [
  { id: 'SHIP001', client: 'John Doe', origin: 'New York', destination: 'London', status: 'In Transit' },
  { id: 'SHIP002', client: 'Jane Smith', origin: 'Tokyo', destination: 'Sydney', status: 'Delivered' },
  { id: 'SHIP003', client: 'Bob Johnson', origin: 'Paris', destination: 'Berlin', status: 'Processing' },
]

const clients = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1234567890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+0987654321' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', phone: '+1122334455' },
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-100 font-['Poppins']">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen shadow-lg">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-[#8B0000]">Admin Dashboard</h2>
          </div>
          <nav className="mt-6">
            {[
              { name: 'Overview', icon: faChartLine, id: 'overview' },
              { name: 'Shipments', icon: faBox, id: 'shipments' },
              { name: 'Clients', icon: faUsers, id: 'clients' },
              { name: 'Marketing', icon: faGlobe, id: 'marketing' },
              { name: 'Settings', icon: faCog, id: 'settings' },
            ].map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center text-gray-600 py-4 px-6 hover:bg-gray-100 hover:text-[#8B0000] transition-colors ${activeTab === item.id ? 'bg-gray-100 text-[#8B0000]' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-4" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="shipments">Shipments</TabsTrigger>
              <TabsTrigger value="clients">Clients</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                  { title: 'Total Shipments', value: '1,234', icon: faBox, color: 'bg-blue-500' },
                  { title: 'Active Vehicles', value: '56', icon: faTruck, color: 'bg-green-500' },
                  { title: 'Global Reach', value: '120+ countries', icon: faGlobe, color: 'bg-yellow-500' },
                  { title: 'Revenue', value: '$123,456', icon: faMoneyBillWave, color: 'bg-purple-500' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-center">
                      <div className={`${item.color} rounded-full p-3 mr-4`}>
                        <FontAwesomeIcon icon={item.icon} className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-2xl font-bold">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">Shipments and Revenue Overview</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="shipments" stroke="#8B0000" activeDot={{ r: 8 }} />
                      <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#FF0000" />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-lg shadow-md p-6"
                >
                  <h2 className="text-xl font-semibold mb-4">Shipment Types</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="value" fill="#8B0000" />
                    </BarChart>
                  </ResponsiveContainer>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white rounded-lg shadow-md p-6 md:col-span-2"
                >
                  <h2 className="text-xl font-semibold mb-4">Global Shipment Distribution</h2>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="shipments">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Shipments</CardTitle>
                  <CardDescription>View and update shipment information</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Shipment ID</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Origin</TableHead>
                        <TableHead>Destination</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {shipments.map((shipment) => (
                        <TableRow key={shipment.id}>
                          <TableCell>{shipment.id}</TableCell>
                          <TableCell>{shipment.client}</TableCell>
                          <TableCell>{shipment.origin}</TableCell>
                          <TableCell>{shipment.destination}</TableCell>
                          <TableCell>{shipment.status}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">Update</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="clients">
              <Card>
                <CardHeader>
                  <CardTitle>Client Management</CardTitle>
                  <CardDescription>View and manage client information</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.map((client) => (
                        <TableRow key={client.id}>
                          <TableCell>{client.name}</TableCell>
                          <TableCell>{client.email}</TableCell>
                          <TableCell>{client.phone}</TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                            <Button variant="outline" size="sm">Delete</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="marketing">
              <Card>
                <CardHeader>
                  <CardTitle>Marketing Campaigns</CardTitle>
                  <CardDescription>Create and manage marketing campaigns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Create New Campaign</h3>
                      <div className="flex space-x-2">
                        <Input placeholder="Campaign Name" className="flex-grow" />
                        <Button>Create</Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Send Promotional Messages</h3>
                      <div className="flex space-x-2">
                        <Button className="flex items-center">
                          <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                          Send WhatsApp
                        </Button>
                        <Button className="flex items-center">
                          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                          Send Email
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Settings</CardTitle>
                  <CardDescription>Manage your admin account and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <Input type="email" placeholder="admin@example.com" />
                    </div>
                    <div>
                      
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <Input type="password" placeholder="••••••••" />
                    </div>
                    <Button>Update Settings</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}