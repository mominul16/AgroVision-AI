'use client'

import { motion } from 'framer-motion'
import { 
  Scan, 
  Pill, 
  Leaf, 
  CloudRain, 
  Bot, 
  BarChart3 
} from 'lucide-react'
import { features } from '@/lib/mock-data'

const iconMap = {
  scan: Scan,
  pill: Pill,
  leaf: Leaf,
  cloud: CloudRain,
  bot: Bot,
  chart: BarChart3,
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            আমাদের বিশেষ ফিচার্স
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            উন্নত AI প্রযুক্তি ব্যবহার করে আপনার ফসলের যত্ন নিন
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
