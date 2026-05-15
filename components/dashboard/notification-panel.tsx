'use client'

import { motion } from 'framer-motion'
import { Bell, AlertTriangle, CheckCircle, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockNotifications } from '@/lib/mock-data'

const iconMap = {
  reminder: Clock,
  warning: AlertTriangle,
  success: CheckCircle,
}

const colorMap = {
  reminder: 'text-blue-500 bg-blue-500/10',
  warning: 'text-orange-500 bg-orange-500/10',
  success: 'text-green-500 bg-green-500/10',
}

export function NotificationPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center gap-2">
          <Bell className="w-4 h-4" />
          <CardTitle className="text-lg">বিজ্ঞপ্তি</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockNotifications.map((notification, index) => {
              const Icon = iconMap[notification.type as keyof typeof iconMap]
              const colors = colorMap[notification.type as keyof typeof colorMap]
              
              return (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${colors}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground text-sm">
                      {notification.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                      {notification.message}
                    </div>
                    <div className="text-xs text-muted-foreground/60 mt-1">
                      {notification.time}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
