'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const sections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Security', href: '#' },
        { label: 'Status', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Cookie Policy', href: '#' },
        { label: 'GDPR', href: '#' },
      ],
    },
  ]

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-400 dark:text-neutral-500 border-t border-neutral-800 dark:border-neutral-900">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white dark:text-neutral-50 font-bold text-lg mb-4">Aurora</h3>
            <p className="text-sm">Building the future of work with modern technology.</p>
          </motion.div>

          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white dark:text-neutral-50 font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white dark:hover:text-neutral-50 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-neutral-800 dark:border-neutral-900 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-600">© 2024 Aurora. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-neutral-50 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-neutral-50 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-neutral-50 transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-neutral-50 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
