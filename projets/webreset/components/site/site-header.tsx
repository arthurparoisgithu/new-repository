'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, BookOpen, Gauge } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SECTION_NAV = [
  { href: '/#pilote', label: 'Pilote Nantes' },
  { href: '/#projets', label: 'Études de cas' },
  { href: '/#offre', label: 'Offre' },
]

const PAGE_NAV = [
  { href: '/blog', label: 'Journal', icon: BookOpen },
  { href: '/audit', label: 'Audit gratuit', icon: Gauge },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window?.scrollY ?? 0) > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn('sticky top-0 z-50 w-full transition-all', scrolled ? 'backdrop-blur-md bg-background/85 shadow-[0_1px_0_0_hsl(var(--border))]' : 'bg-transparent')}>
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-serif text-lg">W</span>
          <span className="font-serif text-xl tracking-tight text-foreground">WebReset</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {SECTION_NAV?.map((item) => {
            const isPilote = item?.href === '/#pilote'
            return (
              <a
                key={item?.href}
                href={item?.href}
                className={cn(
                  'text-sm transition-colors inline-flex items-center gap-1.5',
                  isPilote ? 'text-emerald-700 hover:text-emerald-900 font-medium' : 'text-foreground/75 hover:text-foreground'
                )}
              >
                {isPilote && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                )}
                {item?.label}
              </a>
            )
          })}
          <span aria-hidden="true" className="h-4 w-px bg-border" />
          {PAGE_NAV?.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item?.href}
                href={item?.href}
                className="inline-flex items-center gap-1.5 text-sm text-foreground/75 hover:text-accent transition-colors"
              >
                <Icon className="h-3.5 w-3.5" />
                {item?.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="rounded-sm">
            <a href="/#contact">Réserver un appel</a>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-sm text-foreground hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-[1200px] px-5 py-4 flex flex-col gap-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-foreground/40 mt-1 mb-1">Page d&apos;accueil</p>
            {SECTION_NAV?.map((item) => (
              <a key={item?.href} href={item?.href} onClick={() => setOpen(false)} className="text-sm py-2 text-foreground/80">
                {item?.label}
              </a>
            ))}
            <p className="text-[10px] uppercase tracking-[0.22em] text-accent mt-4 mb-1">Ressources</p>
            {PAGE_NAV?.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item?.href}
                  href={item?.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 text-sm py-2 text-foreground/80"
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {item?.label}
                </Link>
              )
            })}
            <Button asChild size="sm" className="rounded-sm mt-4">
              <a href="/#contact" onClick={() => setOpen(false)}>Réserver un appel</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
