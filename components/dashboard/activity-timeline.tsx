'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockActivityTimeline } from '@/lib/mock-data'

export function ActivityTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Clock className="w-4 h-4" />
          <CardTitle className="text-lg">কার্যকলাপ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
            
            <div className="space-y-4">
              {mockActivityTimeline.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {activity.action}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-primary">{activity.crop}</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
