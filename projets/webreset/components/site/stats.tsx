'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 18, mass: 1 })
  const rounded = useTransform(spring, (v) => `${prefix}${Math.round(v ?? 0)}${suffix}`)

  useEffect(() => {
    if (inView) mv.set(value ?? 0)
  }, [inView, value, mv])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

const STATS = [
  { value: 7, suffix: ' jours', label: 'Délai de livraison moyen' },
  { value: 100, suffix: ' %', label: 'Satisfait ou remboursé' },
  { value: 3, suffix: 'x', label: 'Plus de demandes entrantes' },
  { value: 12, suffix: '+', label: 'Cabinets transformés' },
]

export function Stats() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS?.map((s, i) => (
          <motion.div
            key={s?.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="font-serif text-4xl md:text-5xl text-foreground tracking-tight">
              <Counter value={s?.value ?? 0} suffix={s?.suffix ?? ''} />
            </div>
            <p className="mt-2 text-sm text-foreground/60">{s?.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
