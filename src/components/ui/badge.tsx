'use client'

import { cn } from '@/lib/cn'

interface BadgeProps {
  label: string
  variant?: 'default' | 'accent'
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-neutral-100 text-neutral-700',
    accent: 'bg-accent-50 text-accent-700',
  }

  return (
    <span className={cn('px-3 py-1 rounded-full text-xs font-medium', variants[variant])}>
      {label}
    </span>
  )
}
