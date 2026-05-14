'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTABannerSection() {
  return (
    <section className="py-24 px-6 bg-neutral-900 dark:bg-neutral-950 text-white">
      <div className="max-w-container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-neutral-400 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using Aurora to accelerate growth and streamline operations.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="primary" size="lg">
              Start Your Free Trial
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
