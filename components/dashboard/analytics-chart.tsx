'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockChartData } from '@/lib/mock-data'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export function AnalyticsChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">মাসিক বিশ্লেষণ</CardTitle>
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
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend 
                  formatter={(value) => (
                    <span className="text-sm text-foreground">
                      {value === 'healthy' ? 'সুস্থ ফসল' : 'আক্রান্ত ফসল'}
                    </span>
                  )}
                />
                <Bar 
                  dataKey="healthy" 
                  fill="hsl(142.1 76.2% 36.3%)" 
                  radius={[4, 4, 0, 0]}
                  name="healthy"
                />
                <Bar 
                  dataKey="infected" 
                  fill="hsl(24.6 95% 53.1%)" 
                  radius={[4, 4, 0, 0]}
                  name="infected"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
