'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  Bot, 
  User, 
  Sparkles,
  Leaf,
  Pill,
  CloudRain,
  HelpCircle,
  RefreshCw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DashboardLayout } from '@/components/dashboard/dashboard-layout'
import { mockChatResponses } from '@/lib/mock-data'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const quickQuestions = [
  { icon: Leaf, text: 'রোগ সম্পর্কে জানতে চাই', keyword: 'রোগ' },
  { icon: Pill, text: 'ওষুধ ব্যবহারের নিয়ম', keyword: 'ওষুধ' },
  { icon: CloudRain, text: 'সেচ ব্যবস্থাপনা', keyword: 'সেচ' },
  { icon: HelpCircle, text: 'মৌসুমি ফসলের পরামর্শ', keyword: 'মৌসুম' },
]

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: 'আসসালামু আলাইকুম! আমি AgroVision AI সহকারী। কৃষি বিষয়ক যেকোনো প্রশ্ন করতে পারেন - রোগ শনাক্তকরণ, ওষুধের পরামর্শ, সেচ ব্যবস্থাপনা, মৌসুমি ফসল ইত্যাদি সম্পর্কে।',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [keyword, response] of Object.entries(mockChatResponses)) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return response
      }
    }
    
    return mockChatResponses['default']
  }

  const handleSend = async (content?: string) => {
    const messageContent = content || inputValue
    if (!messageContent.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    const aiResponse: Message = {
      id: Date.now() + 1,
      role: 'assistant',
      content: getAIResponse(messageContent),
      timestamp: new Date(),
    }

    setIsTyping(false)
    setMessages(prev => [...prev, aiResponse])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickQuestion = (keyword: string) => {
    handleSend(keyword)
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now(),
        role: 'assistant',
        content: 'চ্যাট মুছে ফেলা হয়েছে। নতুন করে শুরু করুন - আমি আপনাকে সাহায্য করতে প্রস্তুত!',
        timestamp: new Date(),
      },
    ])
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)]">
        <Card className="h-full flex flex-col">
          {/* Header */}
          <CardHeader className="flex-row items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">AI কৃষি সহকারী</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  অনলাইন
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleClearChat}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 p-0 overflow-hidden">
            <ScrollArea className="h-full p-4" ref={scrollRef}>
              <div className="space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex gap-3 ${
                        message.role === 'user' ? 'flex-row-reverse' : ''
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}>
                        {message.role === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                      </div>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.role === 'user'
                            ? 'text-primary-foreground/60'
                            : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString('bn-BD', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>
          </CardContent>

          {/* Quick questions */}
          <div className="px-4 py-3 border-t">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {quickQuestions.map((q) => (
                <Button
                  key={q.keyword}
                  variant="outline"
                  size="sm"
                  className="shrink-0"
                  onClick={() => handleQuickQuestion(q.text)}
                >
                  <q.icon className="w-4 h-4 mr-2" />
                  {q.text}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="আপনার প্রশ্ন লিখুন..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                className="gradient-primary text-white border-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              <Sparkles className="w-3 h-3 inline mr-1" />
              AI দ্বারা চালিত - সর্বদা বিশেষজ্ঞের পরামর্শ নিন
            </p>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}
