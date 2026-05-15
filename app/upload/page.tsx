'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Upload, 
  Image as ImageIcon, 
  X, 
  ScanLine, 
  CheckCircle,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { supportedCrops } from '@/lib/mock-data'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'

export default function UploadPage() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [analysisStage, setAnalysisStage] = useState('')

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleAnalyze = async () => {
    if (!selectedImage) return
    
    setIsAnalyzing(true)
    setProgress(0)

    const stages = [
      { progress: 20, text: 'ছবি প্রসেস করা হচ্ছে...' },
      { progress: 40, text: 'AI মডেল লোড হচ্ছে...' },
      { progress: 60, text: 'রোগ বিশ্লেষণ চলছে...' },
      { progress: 80, text: 'ফলাফল প্রস্তুত করা হচ্ছে...' },
      { progress: 100, text: 'সম্পন্ন!' },
    ]

    for (const stage of stages) {
      setAnalysisStage(stage.text)
      setProgress(stage.progress)
      await new Promise(resolve => setTimeout(resolve, 800))
    }

    setTimeout(() => {
      router.push('/result')
    }, 500)
  }

  const removeImage = () => {
    setSelectedImage(null)
    setSelectedCrop(null)
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">নতুন স্ক্যান</h1>
          <p className="text-muted-foreground">আপনার ফসলের ছবি আপলোড করুন এবং AI বিশ্লেষণ শুরু করুন</p>
        </div>

        {/* Upload area */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <AnimatePresence mode="wait">
              {!selectedImage ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <label
                    htmlFor="file-upload"
                    className={`
                      relative flex flex-col items-center justify-center min-h-[400px] p-8 cursor-pointer
                      border-2 border-dashed rounded-xl transition-all duration-300
                      ${isDragging 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }
                    `}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleFileSelect}
                    />
                    
                    <motion.div
                      animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
                      className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                    >
                      <Upload className="w-10 h-10 text-primary" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      এখানে ফসলের ছবি আপলোড করুন
                    </h3>
                    <p className="text-muted-foreground text-center mb-4">
                      ছবি টেনে আনুন অথবা ক্লিক করে সিলেক্ট করুন
                    </p>
                    <p className="text-sm text-muted-foreground">
                      সমর্থিত ফরম্যাট: JPG, PNG, WEBP (সর্বোচ্চ ১০ MB)
                    </p>
                  </label>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Image preview */}
                    <div className="relative">
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                        <img
                          src={selectedImage}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        {isAnalyzing && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-center text-white">
                              <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin" />
                              <p className="font-medium">{analysisStage}</p>
                            </div>
                          </div>
                        )}
                      </div>
                      {!isAnalyzing && (
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={removeImage}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    {/* Options */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3">
                          ফসল নির্বাচন করুন (ঐচ্ছিক)
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                          {supportedCrops.map((crop) => (
                            <button
                              key={crop.id}
                              onClick={() => setSelectedCrop(crop.id)}
                              disabled={isAnalyzing}
                              className={`
                                p-3 rounded-xl border text-center transition-all
                                ${selectedCrop === crop.id
                                  ? 'border-primary bg-primary/10 text-primary'
                                  : 'border-border hover:border-primary/50'
                                }
                                ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}
                              `}
                            >
                              <span className="text-2xl block mb-1">{crop.icon}</span>
                              <span className="text-sm">{crop.name}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {isAnalyzing && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{analysisStage}</span>
                            <span className="font-medium text-primary">{progress}%</span>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      )}

                      <Button
                        onClick={handleAnalyze}
                        disabled={isAnalyzing}
                        className="w-full gradient-primary text-white border-0 h-12"
                      >
                        {isAnalyzing ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            বিশ্লেষণ চলছে...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <ScanLine className="w-5 h-5" />
                            AI বিশ্লেষণ শুরু করুন
                          </span>
                        )}
                      </Button>

                      {!isAnalyzing && (
                        <p className="text-xs text-muted-foreground text-center">
                          AI আপনার ছবি বিশ্লেষণ করে রোগ শনাক্ত করবে এবং চিকিৎসার পরামর্শ দেবে
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Supported crops info */}
        {!selectedImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  সমর্থিত ফসল
                </h3>
                <div className="flex flex-wrap gap-3">
                  {supportedCrops.map((crop) => (
                    <div
                      key={crop.id}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted"
                    >
                      <span className="text-lg">{crop.icon}</span>
                      <span className="text-sm text-foreground">{crop.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Tips */}
        {!selectedImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  ভালো ফলাফলের জন্য টিপস
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    আক্রান্ত অংশের কাছ থেকে স্পষ্ট ছবি তুলুন
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    দিনের আলোতে ছবি তুলুন
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    ছবিতে যেন আক্রান্ত পাতা বা ফল ভালোভাবে দেখা যায়
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    একাধিক কোণ থেকে ছবি তুলতে পারেন
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
}
