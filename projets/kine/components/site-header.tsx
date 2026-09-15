'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, Stethoscope, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SITE } from '@/lib/site'

const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/specialites', label: 'Spécialités' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/cabinet', label: 'Cabinet' },
  { href: '/conseils', label: 'Conseils' },
  { href: '/tarifs', label: 'Tarifs' },
  { href: '/faq', label: 'FAQ' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-normal',
        scrolled
          ? 'backdrop-blur-md bg-background/80 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.06)]'
          : 'bg-background/60 backdrop-blur-sm'
      )}
    >
      <div className="container-page flex h-16 md:h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Accueil — Cabinet Thibaud Chiffoleau"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-[var(--shadow-sm)] transition-transform group-hover:scale-105">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold tracking-tight text-[15px] md:text-base text-foreground">
              Thibaud Chiffoleau
            </span>
            <span className="text-[11px] text-muted-foreground hidden sm:block">
              Kiné du sport — Nantes Chantenay
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Menu principal">
          {NAV?.map?.((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname?.startsWith?.(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  active
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/75 hover:text-foreground hover:bg-muted'
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/rendez-vous"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:bg-accent/90 transition-all"
          >
            <Calendar className="h-4 w-4" />
            Prendre rendez-vous
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:bg-muted"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 border-t border-border',
          open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container-page py-3 flex flex-col gap-1" aria-label="Menu mobile">
          {NAV?.map?.((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname?.startsWith?.(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'px-3 py-2.5 text-sm font-medium rounded-md transition-colors',
                  active
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground/80 hover:bg-muted'
                )}
              >
                {item.label}
              </Link>
            )
          })}
          <Link
            href="/rendez-vous"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-sm)]"
          >
            <Calendar className="h-4 w-4" />
            Prendre rendez-vous
          </Link>
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Appeler {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  )
}
