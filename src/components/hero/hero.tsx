'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ANIMATION_CONFIG } from '@/lib/animation-config'
import { siteConfig } from '@/config/site-config'

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden grid-background dark:dark-grid-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      </div>

      <motion.div
        className="max-w-container mx-auto"
        variants={ANIMATION_CONFIG.staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={ANIMATION_CONFIG.staggerItem}
          className="flex justify-center mb-8"
        >
          <span className="px-4 py-2 rounded-full bg-accent-50 dark:bg-accent-950 text-accent-700 dark:text-accent-300 text-xs font-medium border border-accent-100 dark:border-accent-900">
            ✨ Introducing Aurora v2.0
          </span>
        </motion.div>

        <motion.h1
          variants={ANIMATION_CONFIG.staggerItem}
          className="text-5xl md:text-6xl font-bold text-center leading-tight mb-6 text-neutral-900 dark:text-neutral-50"
        >
          {siteConfig.hero.headline}
        </motion.h1>

        <motion.p
          variants={ANIMATION_CONFIG.staggerItem}
          className="text-xl text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        <motion.div
          variants={ANIMATION_CONFIG.staggerItem}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button variant="primary" size="lg">
            {siteConfig.hero.cta1}
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button variant="secondary" size="lg">
            <Play size={18} className="mr-2" />
            {siteConfig.hero.cta2}
          </Button>
        </motion.div>

        <motion.div
          variants={ANIMATION_CONFIG.staggerItem}
          className="relative mx-auto max-w-4xl"
        >
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-2xl dark:shadow-xl dark:shadow-neutral-950/50">
            <div className="grid grid-cols-3 gap-4 h-64">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-100 dark:border-neutral-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                />
              ))}
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-accent-500/50 rounded-2xl blur-2xl opacity-20 -z-10" />
        </motion.div>
      </motion.div>
    </section>
  )
}
