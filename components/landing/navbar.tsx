'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Leaf, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">AgroVision AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
              ফিচার্স
            </Link>
            <Link href="/#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              কিভাবে কাজ করে
            </Link>
            <Link href="/#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
              রিভিউ
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="ghost">লগইন</Button>
            </Link>
            <Link href="/register">
              <Button className="gradient-primary text-white border-0">
                শুরু করুন
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              <Link 
                href="/#features" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                ফিচার্স
              </Link>
              <Link 
                href="/#how-it-works" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                কিভাবে কাজ করে
              </Link>
              <Link 
                href="/#testimonials" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                রিভিউ
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Link href="/login">
                  <Button variant="outline" className="w-full">লগইন</Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full gradient-primary text-white border-0">
                    শুরু করুন
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
