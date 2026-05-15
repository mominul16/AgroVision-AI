'use client'

import { motion } from 'framer-motion'
import { supportedCrops } from '@/lib/mock-data'

export function SupportedCropsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            সমর্থিত ফসল
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            আমাদের AI সিস্টেম এই ফসলগুলোর রোগ শনাক্ত করতে সক্ষম
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
          {supportedCrops.map((crop, index) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center justify-center p-4 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span className="text-4xl mb-2">{crop.icon}</span>
              <span className="text-sm font-medium text-foreground text-center">
                {crop.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
