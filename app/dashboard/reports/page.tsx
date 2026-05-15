'use client'

import { motion } from 'framer-motion'
import { Download, FileText, BarChart3, PieChart, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { mockChartData, mockDashboardStats } from '@/lib/mock-data'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from 'recharts'
import { toast } from 'sonner'

const pieData = [
  { name: 'সুস্থ ফসল', value: mockDashboardStats.healthyCrops, color: 'hsl(142.1 76.2% 36.3%)' },
  { name: 'আক্রান্ত ফসল', value: mockDashboardStats.infectedCrops, color: 'hsl(24.6 95% 53.1%)' },
]

const accuracyData = [
  { month: 'জানু', accuracy: 91 },
  { month: 'ফেব', accuracy: 92 },
  { month: 'মার্চ', accuracy: 93 },
  { month: 'এপ্রি', accuracy: 94 },
  { month: 'মে', accuracy: 94.5 },
]

export default function ReportsPage() {
  const handleDownload = () => {
    toast.success('রিপোর্ট ডাউনলোড হচ্ছে...')
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">বিশ্লেষণ রিপোর্ট</h1>
            <p className="text-muted-foreground">আপনার কৃষি কার্যক্রমের বিস্তারিত বিশ্লেষণ</p>
          </div>
          <Button onClick={handleDownload} className="gradient-primary text-white border-0">
            <Download className="w-4 h-4 mr-2" />
            রিপোর্ট ডাউনলোড
          </Button>
        </div>

        {/* Summary cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{mockDashboardStats.totalScans}</div>
                  <div className="text-sm text-muted-foreground">মোট স্ক্যান</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{mockDashboardStats.healthyCrops}</div>
                  <div className="text-sm text-muted-foreground">সুস্থ ফসল</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <PieChart className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{mockDashboardStats.infectedCrops}</div>
                  <div className="text-sm text-muted-foreground">আক্রান্ত ফসল</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{mockDashboardStats.detectionAccuracy}%</div>
                  <div className="text-sm text-muted-foreground">সঠিকতা</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">মাসিক স্ক্যান বিশ্লেষণ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockChartData} barGap={8}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                      <XAxis 
                        dataKey="month" 
                        className="text-xs fill-muted-foreground"
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        className="text-xs fill-muted-foreground"
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                      />
                      <Bar 
                        dataKey="healthy" 
                        fill="hsl(142.1 76.2% 36.3%)" 
                        radius={[4, 4, 0, 0]}
                        name="সুস্থ"
                      />
                      <Bar 
                        dataKey="infected" 
                        fill="hsl(24.6 95% 53.1%)" 
                        radius={[4, 4, 0, 0]}
                        name="আক্রান্ত"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pie chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">ফসলের অবস্থা</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RePieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px',
                        }}
                      />
                    </RePieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  {pieData.map((entry) => (
                    <div key={entry.name} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-sm text-muted-foreground">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Accuracy trend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">শনাক্তকরণ সঠিকতার প্রবণতা</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={accuracyData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                    <XAxis 
                      dataKey="month" 
                      className="text-xs fill-muted-foreground"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      className="text-xs fill-muted-foreground"
                      tickLine={false}
                      axisLine={false}
                      domain={[85, 100]}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                      formatter={(value: number) => [`${value}%`, 'সঠিকতা']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="accuracy" 
                      stroke="hsl(142.1 76.2% 36.3%)" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(142.1 76.2% 36.3%)', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
