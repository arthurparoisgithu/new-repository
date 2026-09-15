'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface Props {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function BeforeAfter({ beforeSrc, afterSrc, beforeAlt, afterAlt, className }: Props) {
  const [pos, setPos] = useState<number>(55)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef<boolean>(false)

  const onMove = useCallback((clientX: number) => {
    const el = ref?.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.max(4, Math.min(96, (x / rect.width) * 100))
    setPos(pct)
  }, [])

  return (
    <div
      ref={ref}
      className={cn('relative w-full select-none overflow-hidden rounded-lg bg-muted shadow-[0_18px_40px_-12px_rgb(15_30_61_/_0.22)]', className)}
      style={{ aspectRatio: '16 / 9' }}
      onMouseDown={(e) => { dragging.current = true; onMove(e.clientX) }}
      onMouseMove={(e) => { if (dragging?.current) onMove(e.clientX) }}
      onMouseUp={() => { dragging.current = false }}
      onMouseLeave={() => { dragging.current = false }}
      onTouchStart={(e) => { dragging.current = true; onMove(e.touches?.[0]?.clientX ?? 0) }}
      onTouchMove={(e) => { if (dragging?.current) onMove(e.touches?.[0]?.clientX ?? 0) }}
      onTouchEnd={() => { dragging.current = false }}
    >
      {/* AFTER (full) */}
      <Image src={afterSrc} alt={afterAlt} fill sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
      {/* BEFORE (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <div className="relative h-full" style={{ width: `${(100 / Math.max(pos, 1)) * 100}%` }}>
          <Image src={beforeSrc} alt={beforeAlt} fill sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] bg-foreground/85 text-background px-2 py-1 rounded-sm">Avant</span>
      <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.2em] bg-accent text-accent-foreground px-2 py-1 rounded-sm">Après</span>

      {/* Divider */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-accent shadow-[0_0_12px_rgba(184,153,105,0.7)]" style={{ left: `${pos}%`, transform: 'translateX(-1px)' }}>
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-9 w-9 rounded-full bg-background border border-accent flex items-center justify-center text-accent shadow-md cursor-ew-resize">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6-6 6 6 6"/><path d="m15 6 6 6-6 6"/></svg>
        </div>
      </div>
    </div>
  )
}
