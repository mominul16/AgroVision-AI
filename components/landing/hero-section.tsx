'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Scan, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AI-চালিত কৃষি সমাধান
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
            >
              AI দিয়ে ফসলের রোগ শনাক্ত করুন{' '}
              <span className="text-primary">মুহূর্তেই</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty"
            >
              ফসলের ছবি আপলোড করুন এবং AI থেকে রোগ শনাক্তকরণ, ওষুধের পরামর্শ ও চাষাবাদের স্মার্ট সমাধান পান।
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="/upload">
                <Button size="lg" className="gradient-primary text-white border-0 shadow-lg shadow-primary/30 w-full sm:w-auto">
                  <Upload className="w-5 h-5 mr-2" />
                  ছবি আপলোড করুন
                </Button>
              </Link>
              <Link href="/upload">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Scan className="w-5 h-5 mr-2" />
                  AI বিশ্লেষণ শুরু করুন
                </Button>
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6"
            >
              <Link href="/dashboard" className="inline-flex items-center gap-2 text-primary hover:underline">
                ড্যাশবোর্ড দেখুন
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">১০K+</div>
                <div className="text-sm text-muted-foreground">কৃষক ব্যবহারকারী</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">৯৫%</div>
                <div className="text-sm text-muted-foreground">সঠিকতার হার</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-foreground">৫০+</div>
                <div className="text-sm text-muted-foreground">রোগ শনাক্তকরণ</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Floating cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {/* Main card */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 glass-card rounded-2xl p-6 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Scan className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">রোগ শনাক্ত</div>
                    <div className="text-sm text-muted-foreground">আর্লি ব্লাইট</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">নিশ্চয়তা</span>
                    <span className="font-semibold text-primary">৯৬%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full gradient-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '96%' }}
                      transition={{ duration: 1.5, delay: 1 }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    প্রস্তাবিত ওষুধ: ম্যানকোজেব
                  </div>
                </div>
              </motion.div>

              {/* Floating card 1 */}
              <motion.div 
                className="absolute top-10 right-10 w-48 glass-card rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <span className="text-green-600">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">সুস্থ ফসল</div>
                    <div className="text-xs text-muted-foreground">৮৯টি</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div 
                className="absolute bottom-20 left-0 w-52 glass-card rounded-xl p-4 shadow-lg"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              >
                <div className="text-xs text-muted-foreground mb-2">আজকের আবহাওয়া</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🌤️</span>
                    <span className="text-xl font-bold text-foreground">৩২°C</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <div>আর্দ্রতা: ৭৮%</div>
                    <div>বৃষ্টি: ৪০%</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 3 */}
              <motion.div 
                className="absolute bottom-10 right-20 w-44 glass-card rounded-xl p-4 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                    🌾
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-foreground">ধান স্ক্যান</div>
                    <div className="text-xs text-green-600">সুস্থ</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
