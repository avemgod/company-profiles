'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site-config'
import { ANIMATION_CONFIG } from '@/lib/animation-config'

export function TeamSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Meet the team
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Experienced leaders building the future of work
          </p>
        </motion.div>

        <motion.div
          variants={ANIMATION_CONFIG.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {siteConfig.team.map((member) => (
            <motion.div
              key={member.id}
              variants={ANIMATION_CONFIG.staggerItem}
              className="text-center"
            >
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-100 to-accent-50 dark:from-accent-950 dark:to-accent-900 mx-auto mb-4 flex items-center justify-center border border-accent-200 dark:border-accent-900"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-4xl font-light text-accent-400 dark:text-accent-600">
                  {member.name[0]}
                </span>
              </motion.div>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
