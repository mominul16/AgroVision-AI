'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Palette,
  Save,
  Camera,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { ThemeToggle } from '@/components/theme-toggle'
import { toast } from 'sonner'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    weekly: true,
  })

  const handleSave = () => {
    toast.success('সেটিংস সংরক্ষণ করা হয়েছে!')
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">সেটিংস</h1>
          <p className="text-muted-foreground">আপনার অ্যাকাউন্ট ও অ্যাপ সেটিংস পরিচালনা করুন</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">প্রোফাইল</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">বিজ্ঞপ্তি</span>
            </TabsTrigger>
            <TabsTrigger value="appearance" className="gap-2">
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">থিম</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">নিরাপত্তা</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>প্রোফাইল তথ্য</CardTitle>
                  <CardDescription>আপনার ব্যক্তিগত তথ্য আপডেট করুন</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-20 h-20">
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                        রউ
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">
                        <Camera className="w-4 h-4 mr-2" />
                        ছবি পরিবর্তন
                      </Button>
                      <p className="text-xs text-muted-foreground mt-1">
                        JPG, PNG সর্বোচ্চ ২ MB
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Form fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">নাম</Label>
                      <Input id="firstName" defaultValue="রহিম" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">পদবি</Label>
                      <Input id="lastName" defaultValue="উদ্দিন" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">ইমেইল</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="email" defaultValue="farmer@example.com" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">মোবাইল নম্বর</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="phone" defaultValue="০১৭০০০০০০০০" className="pl-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">ঠিকানা</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="location" defaultValue="ময়মনসিংহ, বাংলাদেশ" className="pl-10" />
                    </div>
                  </div>

                  <Button onClick={handleSave} className="gradient-primary text-white border-0">
                    <Save className="w-4 h-4 mr-2" />
                    পরিবর্তন সংরক্ষণ করুন
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>বিজ্ঞপ্তি সেটিংস</CardTitle>
                  <CardDescription>কিভাবে বিজ্ঞপ্তি পেতে চান তা নির্বাচন করুন</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>ইমেইল বিজ্ঞপ্তি</Label>
                      <p className="text-sm text-muted-foreground">
                        রোগ শনাক্তকরণ ও পরামর্শ ইমেইলে পান
                      </p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, email: checked }))
                      }
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>পুশ বিজ্ঞপ্তি</Label>
                      <p className="text-sm text-muted-foreground">
                        ব্রাউজারে তাৎক্ষণিক বিজ্ঞপ্তি পান
                      </p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, push: checked }))
                      }
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SMS বিজ্ঞপ্তি</Label>
                      <p className="text-sm text-muted-foreground">
                        জরুরি সতর্কতা SMS এ পান
                      </p>
                    </div>
                    <Switch
                      checked={notifications.sms}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, sms: checked }))
                      }
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>সাপ্তাহিক রিপোর্ট</Label>
                      <p className="text-sm text-muted-foreground">
                        প্রতি সপ্তাহে সারসংক্ষেপ রিপোর্ট পান
                      </p>
                    </div>
                    <Switch
                      checked={notifications.weekly}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, weekly: checked }))
                      }
                    />
                  </div>

                  <Button onClick={handleSave} className="gradient-primary text-white border-0">
                    <Save className="w-4 h-4 mr-2" />
                    সেটিংস সংরক্ষণ করুন
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Appearance Tab */}
          <TabsContent value="appearance">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>অ্যাপিয়ারেন্স</CardTitle>
                  <CardDescription>অ্যাপের থিম ও ভাষা পরিবর্তন করুন</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>থিম</Label>
                      <p className="text-sm text-muted-foreground">
                        ডার্ক বা লাইট মোড নির্বাচন করুন
                      </p>
                    </div>
                    <ThemeToggle />
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>ভাষা</Label>
                    <Select defaultValue="bn">
                      <SelectTrigger className="w-full sm:w-[200px]">
                        <Globe className="w-4 h-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bn">বাংলা</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>নিরাপত্তা</CardTitle>
                  <CardDescription>আপনার অ্যাকাউন্ট সুরক্ষিত রাখুন</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors text-left">
                    <div>
                      <div className="font-medium text-foreground">পাসওয়ার্ড পরিবর্তন</div>
                      <div className="text-sm text-muted-foreground">
                        সর্বশেষ পরিবর্তন: ৩০ দিন আগে
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>

                  <Separator />

                  <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors text-left">
                    <div>
                      <div className="font-medium text-foreground">টু-ফ্যাক্টর অথেন্টিকেশন</div>
                      <div className="text-sm text-muted-foreground">
                        অতিরিক্ত নিরাপত্তা স্তর যোগ করুন
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>

                  <Separator />

                  <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-muted transition-colors text-left">
                    <div>
                      <div className="font-medium text-foreground">লগইন হিস্টোরি</div>
                      <div className="text-sm text-muted-foreground">
                        সকল ডিভাইসের লগইন তথ্য দেখুন
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </button>

                  <Separator />

                  <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-red-500/10 transition-colors text-left group">
                    <div>
                      <div className="font-medium text-red-600">অ্যাকাউন্ট মুছে ফেলুন</div>
                      <div className="text-sm text-muted-foreground">
                        স্থায়ীভাবে আপনার অ্যাকাউন্ট মুছে ফেলুন
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-red-600" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}
