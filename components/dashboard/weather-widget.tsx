'use client'

import { motion } from 'framer-motion'
import { Cloud, Droplets, Wind, Sun } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { mockWeatherData } from '@/lib/mock-data'

export function WeatherWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Cloud className="w-4 h-4" />
            আজকের আবহাওয়া
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-5xl">🌤️</div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {mockWeatherData.temperature}°C
                </div>
                <div className="text-sm text-muted-foreground">
                  {mockWeatherData.condition}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-500" />
              <div>
                <div className="text-sm font-medium text-foreground">
                  {mockWeatherData.humidity}%
                </div>
                <div className="text-xs text-muted-foreground">আর্দ্রতা</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-sm font-medium text-foreground">
                  {mockWeatherData.rainChance}%
                </div>
                <div className="text-xs text-muted-foreground">বৃষ্টি</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-teal-500" />
              <div>
                <div className="text-sm font-medium text-foreground">
                  {mockWeatherData.windSpeed} km/h
                </div>
                <div className="text-xs text-muted-foreground">বাতাস</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <div className="flex items-start gap-2">
              <Sun className="w-4 h-4 text-orange-500 mt-0.5" />
              <div className="text-sm text-orange-700 dark:text-orange-400">
                আজ তাপমাত্রা বেশি। সকাল বা সন্ধ্যায় স্প্রে করুন।
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
