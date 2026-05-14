'use client'

import React from 'react'
import { cn } from '@/lib/cn'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-accent-500 text-white hover:bg-accent-600 active:scale-95',
    secondary: 'border border-neutral-200 text-neutral-900 hover:bg-neutral-50',
    ghost: 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3 text-base',
  }

  return (
    <button
      className={cn(
        'rounded-lg font-medium transition-all duration-200 focus:outline-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
