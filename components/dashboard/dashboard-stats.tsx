'use client'

import { motion } from 'framer-motion'
import { 
  ScanLine, 
  Heart, 
  AlertTriangle, 
  Target,
  TrendingUp,
  TrendingDown,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockDashboardStats } from '@/lib/mock-data'

const stats = [
  {
    title: 'মোট স্ক্যান',
    value: mockDashboardStats.totalScans,
    icon: ScanLine,
    trend: '+১২%',
    trendUp: true,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    title: 'সুস্থ ফসল',
    value: mockDashboardStats.healthyCrops,
    icon: Heart,
    trend: '+৮%',
    trendUp: true,
    color: 'text-green-600',
    bgColor: 'bg-green-500/10',
  },
  {
    title: 'আক্রান্ত ফসল',
    value: mockDashboardStats.infectedCrops,
    icon: AlertTriangle,
    trend: '-৫%',
    trendUp: false,
    color: 'text-orange-600',
    bgColor: 'bg-orange-500/10',
  },
  {
    title: 'শনাক্তকরণের সঠিকতা',
    value: `${mockDashboardStats.detectionAccuracy}%`,
    icon: Target,
    trend: '+২%',
    trendUp: true,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trendUp ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
                <span className={`text-sm ${stat.trendUp ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.trend}
                </span>
                <span className="text-sm text-muted-foreground">গত মাসে</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
