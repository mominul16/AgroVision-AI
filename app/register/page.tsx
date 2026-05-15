'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function RegisterPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('অ্যাকাউন্ট তৈরি হয়েছে!', {
      description: 'আপনাকে ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...',
    })
    
    setTimeout(() => {
      router.push('/dashboard')
    }, 500)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Decorative */}
      <div className="hidden lg:flex flex-1 gradient-primary items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 text-center text-white"
        >
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
            <Leaf className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-balance">
            আজই যোগ দিন
          </h2>
          <p className="text-white/80 max-w-sm mx-auto text-pretty">
            হাজারো কৃষকের সাথে যুক্ত হন এবং AI প্রযুক্তির সুবিধা উপভোগ করুন
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">১০K+</div>
              <div className="text-sm text-white/70">কৃষক</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">৫০+</div>
              <div className="text-sm text-white/70">রোগ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">৯৫%</div>
              <div className="text-sm text-white/70">সঠিকতা</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AgroVision AI</span>
          </Link>

          <h1 className="text-3xl font-bold text-foreground mb-2">
            নতুন অ্যাকাউন্ট তৈরি করুন
          </h1>
          <p className="text-muted-foreground mb-8">
            আপনার তথ্য দিয়ে রেজিস্ট্রেশন সম্পন্ন করুন
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">নাম</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    id="firstName"
                    placeholder="প্রথম নাম"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">পদবি</Label>
                <Input 
                  id="lastName"
                  placeholder="পদবি"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">মোবাইল নম্বর</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="০১XXXXXXXXX"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">ইমেইল</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  id="email"
                  type="email"
                  placeholder="ইমেইল লিখুন"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">পাসওয়ার্ড</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  id="password"
                  type="password"
                  placeholder="পাসওয়ার্ড তৈরি করুন"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Checkbox id="terms" className="mt-1" required />
              <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
                আমি{' '}
                <Link href="#" className="text-primary hover:underline">
                  শর্তাবলী
                </Link>
                {' '}এবং{' '}
                <Link href="#" className="text-primary hover:underline">
                  গোপনীয়তা নীতি
                </Link>
                {' '}পড়েছি এবং সম্মত আছি
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full gradient-primary text-white border-0"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  অ্যাকাউন্ট তৈরি হচ্ছে...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  রেজিস্ট্রেশন করুন
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-muted-foreground">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
            <Link href="/login" className="text-primary hover:underline font-medium">
              লগইন করুন
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}
