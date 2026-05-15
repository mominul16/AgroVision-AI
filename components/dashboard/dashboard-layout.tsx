'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  ScanLine,
  History,
  Bot,
  BarChart3,
  Settings,
  Leaf,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ThemeToggle } from '@/components/theme-toggle'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'ড্যাশবোর্ড', href: '/dashboard' },
  { icon: ScanLine, label: 'নতুন স্ক্যান', href: '/upload' },
  { icon: History, label: 'রোগের ইতিহাস', href: '/dashboard/history' },
  { icon: Bot, label: 'AI পরামর্শ', href: '/assistant' },
  { icon: BarChart3, label: 'বিশ্লেষণ রিপোর্ট', href: '/dashboard/reports' },
  { icon: Settings, label: 'সেটিংস', href: '/settings' },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-bold">AgroVision AI</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-sidebar-foreground"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200',
                        isActive
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                          : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <ChevronRight className="w-4 h-4 ml-auto" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground">
                  রউ
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">রহিম উদ্দিন</div>
                <div className="text-xs text-sidebar-foreground/60 truncate">
                  farmer@example.com
                </div>
              </div>
            </div>
            <Link href="/">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              >
                <LogOut className="w-4 h-4" />
                লগআউট
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-background/80 backdrop-blur border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="flex-1 lg:flex-none" />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/upload">
              <Button className="hidden sm:flex gradient-primary text-white border-0">
                <ScanLine className="w-4 h-4 mr-2" />
                নতুন স্ক্যান
              </Button>
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
