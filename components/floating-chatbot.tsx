'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, Minimize2, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { mockChatResponses } from '@/lib/mock-data'

interface Message {
  id: number
  role: 'user' | 'assistant'
  content: string
}

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: 'হ্যালো! আমি AgroVision AI সহকারী। কিভাবে সাহায্য করতে পারি?',
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [keyword, response] of Object.entries(mockChatResponses)) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return response
      }
    }
    
    return mockChatResponses['default']
  }

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: inputValue,
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    const aiResponse: Message = {
      id: Date.now() + 1,
      role: 'assistant',
      content: getAIResponse(inputValue),
    }

    setIsTyping(false)
    setMessages(prev => [...prev, aiResponse])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <>
      {/* Chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full gradient-primary shadow-lg shadow-primary/30 flex items-center justify-center z-50"
          >
            <MessageCircle className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              height: isMinimized ? 'auto' : '450px',
            }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="gradient-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-semibold">AI সহকারী</div>
                  <div className="text-xs opacity-80">অনলাইন</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? (
                    <Maximize2 className="w-4 h-4" />
                  ) : (
                    <Minimize2 className="w-4 h-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-2xl px-4 py-2">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="প্রশ্ন লিখুন..."
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      size="icon"
                      className="gradient-primary text-white border-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
