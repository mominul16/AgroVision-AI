'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Mail, Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('সফলভাবে লগইন হয়েছে!', {
      description: 'আপনাকে ড্যাশবোর্ডে নিয়ে যাওয়া হচ্ছে...',
    })
    
    setTimeout(() => {
      router.push('/dashboard')
    }, 500)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
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
            স্বাগতম!
          </h1>
          <p className="text-muted-foreground mb-8">
            আপনার অ্যাকাউন্টে লগইন করুন
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="পাসওয়ার্ড লিখুন"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer">
                  মনে রাখুন
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full gradient-primary text-white border-0"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  লগইন হচ্ছে...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  লগইন করুন
                  <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-muted-foreground">
            অ্যাকাউন্ট নেই?{' '}
            <Link href="/register" className="text-primary hover:underline font-medium">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right side - Decorative */}
      <div className="hidden lg:flex flex-1 gradient-primary items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
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
            AI দিয়ে স্মার্ট কৃষি
          </h2>
          <p className="text-white/80 max-w-sm mx-auto text-pretty">
            আপনার ফসলের রোগ শনাক্ত করুন এবং সঠিক চিকিৎসা পরামর্শ পান মুহূর্তেই
          </p>
        </motion.div>
      </div>
    </div>
  )
}
