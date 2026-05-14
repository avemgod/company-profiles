'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site-config'
import { useTheme } from '@/lib/theme-context'
import { cn } from '@/lib/cn'

function ThemeToggle() {
  try {
    const { theme, toggleTheme } = useTheme()
    return (
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </button>
    )
  } catch {
    return null
  }
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm dark:shadow-neutral-800/20' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
          {siteConfig.name}
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-neutral-900 dark:text-neutral-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md">
          <div className="max-w-container mx-auto px-6 py-4 flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                {item.label}
              </a>
            ))}
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
