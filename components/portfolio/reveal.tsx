'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: 'delay-0' | 'delay-100' | 'delay-200' | 'delay-300' | 'delay-500'
}

export function Reveal({
  children,
  className = '',
  delay = 'delay-0',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -40px', threshold: 0.08 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`group/reveal transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${delay} ${className}`}
      data-visible={visible ? true : undefined}
    >
      {children}
    </div>
  )
}
