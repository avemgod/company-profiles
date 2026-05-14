'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site-config'

export function StatsSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8"
        >
          {siteConfig.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 bg-clip-text text-transparent mb-2">
                {stat.metric}
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
