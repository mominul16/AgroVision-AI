'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  AlertTriangle,
  Pill,
  Leaf,
  Calendar,
  Shield,
  CloudRain,
  CheckCircle,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { mockDiseaseResult } from '@/lib/mock-data'
import { toast } from 'sonner'

export default function ResultPage() {
  const result = mockDiseaseResult

  const handleDownload = () => {
    toast.success('রিপোর্ট ডাউনলোড হচ্ছে...')
  }

  const handleShare = () => {
    toast.success('শেয়ার লিংক কপি করা হয়েছে!')
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/upload">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">বিশ্লেষণ ফলাফল</h1>
              <p className="text-muted-foreground">AI রোগ শনাক্তকরণ রিপোর্ট</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">শেয়ার</span>
            </Button>
            <Button onClick={handleDownload} className="gradient-primary text-white border-0">
              <Download className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">ডাউনলোড</span>
            </Button>
          </div>
        </div>

        {/* Main result card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="overflow-hidden">
            <div className="gradient-primary p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-4xl">
                    🍅
                  </div>
                  <div className="text-white">
                    <div className="text-sm opacity-80">শনাক্তকৃত ফসল</div>
                    <div className="text-2xl font-bold">{result.cropName}</div>
                  </div>
                </div>
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur">
                  {result.severity}
                </Badge>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Disease info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">শনাক্তকৃত রোগ</div>
                      <div className="text-xl font-bold text-foreground">{result.diseaseName}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">নিশ্চয়তার হার</span>
                      <span className="text-lg font-bold text-primary">{result.confidenceScore}%</span>
                    </div>
                    <Progress value={result.confidenceScore} className="h-3" />
                  </div>
                </div>

                {/* Affected parts */}
                <div>
                  <div className="text-sm text-muted-foreground mb-3">আক্রান্ত অংশ</div>
                  <div className="flex flex-wrap gap-2">
                    {result.affectedParts.map((part) => (
                      <Badge key={part} variant="secondary" className="text-sm">
                        {part}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Description */}
              <div>
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  রোগের বিবরণ
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Treatment cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Medicine recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Pill className="w-5 h-5 text-blue-500" />
                  </div>
                  প্রস্তাবিত ওষুধ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                    <div className="font-semibold text-foreground text-lg">
                      {result.recommendedMedicine}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      রাসায়নিক ছত্রাকনাশক
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">স্প্রে করার সময়:</span>
                    <span className="font-medium text-foreground">{result.spraySchedule}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Organic solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-500" />
                  </div>
                  জৈব সমাধান
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                    <div className="font-semibold text-foreground text-lg">
                      {result.organicSolution}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      পরিবেশবান্ধব প্রাকৃতিক সমাধান
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>জৈব চাষের জন্য উপযুক্ত</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Prevention tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                প্রতিরোধের উপায়
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {result.preventionTips.map((tip, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-muted/50"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Weather alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-orange-500/20 bg-orange-500/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                  <CloudRain className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    আবহাওয়া সতর্কতা
                  </h3>
                  <p className="text-muted-foreground">
                    {result.weatherAlert}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/upload" className="flex-1">
            <Button variant="outline" className="w-full h-12">
              নতুন স্ক্যান করুন
            </Button>
          </Link>
          <Link href="/assistant" className="flex-1">
            <Button className="w-full h-12 gradient-primary text-white border-0">
              AI সহকারীর সাথে কথা বলুন
            </Button>
          </Link>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
