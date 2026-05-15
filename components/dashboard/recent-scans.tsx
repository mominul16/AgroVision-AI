'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { mockRecentScans } from '@/lib/mock-data'

export function RecentScans() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg">সাম্প্রতিক স্ক্যান</CardTitle>
          <Link href="/dashboard/history">
            <Button variant="ghost" size="sm" className="text-primary">
              সব দেখুন
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockRecentScans.slice(0, 5).map((scan, index) => (
              <motion.div
                key={scan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                    scan.status === 'healthy' 
                      ? 'bg-green-500/10' 
                      : 'bg-orange-500/10'
                  }`}>
                    {scan.crop === 'টমেটো' && '🍅'}
                    {scan.crop === 'ধান' && '🌾'}
                    {scan.crop === 'আলু' && '🥔'}
                    {scan.crop === 'ভুট্টা' && '🌽'}
                    {scan.crop === 'মরিচ' && '🌶️'}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{scan.crop}</div>
                    <div className="text-sm text-muted-foreground">{scan.disease}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <Badge variant={scan.status === 'healthy' ? 'default' : 'destructive'} className={
                      scan.status === 'healthy' 
                        ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20' 
                        : 'bg-orange-500/10 text-orange-600 hover:bg-orange-500/20'
                    }>
                      {scan.confidence}%
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">{scan.date}</div>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
