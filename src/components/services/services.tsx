'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Users, Shield, Code2, Headphones } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/config/site-config'
import { ANIMATION_CONFIG } from '@/lib/animation-config'

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={28} />,
  TrendingUp: <TrendingUp size={28} />,
  Users: <Users size={28} />,
  Shield: <Shield size={28} />,
  Code2: <Code2 size={28} />,
  Headphones: <Headphones size={28} />,
}

export function ServicesSection() {
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
            Powerful features for modern teams
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Everything you need to streamline operations and accelerate growth.
          </p>
        </motion.div>

        <motion.div
          variants={ANIMATION_CONFIG.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteConfig.services.map((service) => (
            <motion.div
              key={service.id}
              variants={ANIMATION_CONFIG.staggerItem}
            >
              <Card variant="hover" className="h-full flex flex-col">
                <div className="text-accent-500 mb-4">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
