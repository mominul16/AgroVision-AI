'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, Filter, Search, Calendar, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { mockRecentScans } from '@/lib/mock-data'

const cropIcons: Record<string, string> = {
  'টমেটো': '🍅',
  'ধান': '🌾',
  'আলু': '🥔',
  'ভুট্টা': '🌽',
  'মরিচ': '🌶️',
}

export default function HistoryPage() {
  // Extended mock data for history
  const allScans = [
    ...mockRecentScans,
    { id: 6, crop: 'কলা', disease: 'পানামা উইল্ট', date: '১০ মে, ২০২৬', status: 'infected', confidence: 91 },
    { id: 7, crop: 'শসা', disease: 'সুস্থ', date: '৯ মে, ২০২৬', status: 'healthy', confidence: 97 },
    { id: 8, crop: 'আম', disease: 'অ্যানথ্রাকনোজ', date: '৮ মে, ২০২৬', status: 'infected', confidence: 89 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">রোগের ইতিহাস</h1>
            <p className="text-muted-foreground">আপনার সকল স্ক্যানের রেকর্ড</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              ফিল্টার
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              তারিখ
            </Button>
          </div>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="ফসল বা রোগের নাম দিয়ে খুঁজুন..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats summary */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-foreground">{allScans.length}</div>
              <div className="text-sm text-muted-foreground">মোট স্ক্যান</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-green-600">
                {allScans.filter(s => s.status === 'healthy').length}
              </div>
              <div className="text-sm text-muted-foreground">সুস্থ</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">
                {allScans.filter(s => s.status === 'infected').length}
              </div>
              <div className="text-sm text-muted-foreground">আক্রান্ত</div>
            </CardContent>
          </Card>
        </div>

        {/* History list */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">সকল স্ক্যান</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {allScans.map((scan, index) => (
                <motion.div
                  key={scan.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href="/result">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer group">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                          scan.status === 'healthy' 
                            ? 'bg-green-500/10' 
                            : 'bg-orange-500/10'
                        }`}>
                          {cropIcons[scan.crop] || '🌱'}
                        </div>
                        <div>
                          <div className="font-medium text-foreground flex items-center gap-2">
                            {scan.crop}
                            <Badge 
                              variant="secondary"
                              className={
                                scan.status === 'healthy' 
                                  ? 'bg-green-500/10 text-green-600' 
                                  : 'bg-orange-500/10 text-orange-600'
                              }
                            >
                              {scan.status === 'healthy' ? 'সুস্থ' : 'আক্রান্ত'}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {scan.disease}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                          <div className="font-medium text-primary">{scan.confidence}%</div>
                          <div className="text-xs text-muted-foreground">{scan.date}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
