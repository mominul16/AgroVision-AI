'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-primary p-8 sm:p-12 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              আজই শুরু করুন
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8 text-pretty">
              বিনামূল্যে আপনার ফসলের রোগ শনাক্ত করুন এবং সঠিক চিকিৎসা পরামর্শ পান
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  বিনামূল্যে শুরু করুন
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/upload">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  ডেমো দেখুন
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
