'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site-config'

export function TrustedBySection() {
  return (
    <section className="py-16 px-6 border-t border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-12"
        >
          Trusted by leading companies worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-12"
        >
          {siteConfig.clients.map((client) => (
            <motion.div
              key={client.name}
              className="text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors"
            >
              <div className="text-3xl font-light">{client.logo}</div>
              <div className="text-xs font-medium text-center mt-2 text-neutral-500 dark:text-neutral-400">{client.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
