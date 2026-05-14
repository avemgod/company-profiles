'use client'

import React from 'react'
import { cn } from '@/lib/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover'
}

export function Card({
  className,
  variant = 'default',
  ...props
}: CardProps) {
  const variants = {
    default: 'border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-lg',
    hover: 'border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-lg transition-all duration-300 hover:border-accent-500 dark:hover:border-accent-500 hover:shadow-lg dark:hover:shadow-accent-500/20 hover:-translate-y-1',
  }

  return (
    <div
      className={cn('p-6', variants[variant], className)}
      {...props}
    />
  )
}

