'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { testimonials } from '@/lib/mock-data'

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            কৃষকদের মতামত
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            হাজারো কৃষক আমাদের সেবায় সন্তুষ্ট
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {`"${testimonial.content}"`}
              </p>

              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-primary/10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
