'use client'
import { useEffect, useRef } from 'react'

export function AnimatedSection({ children, className = '', delay = 0, eager = false }: {
  children: React.ReactNode
  className?: string
  delay?: number
  /** Innhold over folden: rendres synlig fra server, så LCP ikke venter på hydrering. */
  eager?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (eager) return

    const el = ref.current
    if (!el) return

    const show = () => el.classList.add('visible')

    // Already in (or near) viewport on mount — show immediately
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) {
      show()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [eager])

  if (eager) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={`in-view ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
