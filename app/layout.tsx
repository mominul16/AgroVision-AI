import type { Metadata, Viewport } from 'next'
import { Hind_Siliguri, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const hindSiliguri = Hind_Siliguri({ 
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
})

export const metadata: Metadata = {
  title: 'AgroVision AI - কৃষি রোগ শনাক্তকরণ',
  description: 'AI দিয়ে ফসলের রোগ শনাক্ত করুন মুহূর্তেই। ফসলের ছবি আপলোড করুন এবং AI থেকে রোগ শনাক্তকরণ, ওষুধের পরামর্শ ও চাষাবাদের স্মার্ট সমাধান পান।',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#22c55e' },
    { media: '(prefers-color-scheme: dark)', color: '#166534' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${hindSiliguri.variable} ${geistMono.variable} font-sans antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
