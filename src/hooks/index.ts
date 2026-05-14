'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('down')
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      currentScrollY > prevScrollY ? setDirection('down') : setDirection('up')
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  return direction
}
