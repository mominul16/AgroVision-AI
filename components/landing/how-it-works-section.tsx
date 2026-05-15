'use client'

import { motion } from 'framer-motion'
import { Camera, Upload, Cpu, FileText } from 'lucide-react'
import { howItWorks } from '@/lib/mock-data'

const iconMap = {
  1: Camera,
  2: Upload,
  3: Cpu,
  4: FileText,
}

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            কিভাবে কাজ করে?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            মাত্র ৪টি সহজ ধাপে আপনার ফসলের রোগ শনাক্ত করুন
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => {
            const Icon = iconMap[step.step as keyof typeof iconMap]
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Connector line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border">
                    <motion.div 
                      className="h-full gradient-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    />
                  </div>
                )}

                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative z-10 w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/30"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold z-20 lg:static lg:mt-4 lg:mx-auto lg:w-8 lg:h-8">
                  {step.step}
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
