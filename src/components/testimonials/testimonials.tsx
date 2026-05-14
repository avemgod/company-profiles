'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site-config'
import { ANIMATION_CONFIG } from '@/lib/animation-config'

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Loved by our customers
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            See what leading teams have to say about Aurora
          </p>
        </motion.div>

        <motion.div
          variants={ANIMATION_CONFIG.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {siteConfig.testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={ANIMATION_CONFIG.staggerItem}
            >
              <Card>
                <div className="flex flex-col h-full">
                  <p className="text-neutral-700 dark:text-neutral-300 mb-6 flex-1 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                    <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
