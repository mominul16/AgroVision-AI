'use client'

import Link from 'next/link'
import { Leaf, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">AgroVision AI</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              AI প্রযুক্তি ব্যবহার করে ফসলের রোগ শনাক্তকরণ ও চিকিৎসা পরামর্শ
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  ফিচার্স
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  কিভাবে কাজ করে
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  রোগ স্ক্যান
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  ড্যাশবোর্ড
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">সাহায্য</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  সাধারণ প্রশ্ন
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  ব্যবহারবিধি
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  গোপনীয়তা নীতি
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  শর্তাবলী
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                support@agrovision.ai
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                +৮৮০ ১৭০০-০০০০০০
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                ঢাকা, বাংলাদেশ
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © ২০২৬ AgroVision AI। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-sm text-muted-foreground">
            বাংলাদেশে তৈরি 🇧🇩
          </p>
        </div>
      </div>
    </footer>
  )
}
