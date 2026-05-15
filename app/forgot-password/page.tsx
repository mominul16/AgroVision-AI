'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Mail, ArrowRight, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { toast } from 'sonner'

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
    
    toast.success('ইমেইল পাঠানো হয়েছে!', {
      description: 'আপনার ইমেইল চেক করুন',
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 gradient-hero">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AgroVision AI</span>
          </Link>

          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-foreground mb-2">
                  পাসওয়ার্ড ভুলে গেছেন?
                </h1>
                <p className="text-muted-foreground">
                  আপনার ইমেইল দিন, আমরা পাসওয়ার্ড রিসেট লিংক পাঠাব
                </p>
              </div>

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

                <Button 
                  type="submit" 
                  className="w-full gradient-primary text-white border-0"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      পাঠানো হচ্ছে...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      রিসেট লিংক পাঠান
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">
                ইমেইল পাঠানো হয়েছে!
              </h2>
              <p className="text-muted-foreground mb-6">
                আপনার ইমেইলে পাসওয়ার্ড রিসেট লিংক পাঠানো হয়েছে। অনুগ্রহ করে আপনার ইনবক্স চেক করুন।
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsSubmitted(false)}
              >
                আবার চেষ্টা করুন
              </Button>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link 
              href="/login" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              লগইনে ফিরে যান
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
