import { ReactNode } from 'react'
import Link from 'next/link'
import { Calendar, ChevronRight } from 'lucide-react'
import { FadeIn } from './animated'

export function PageHero({
  eyebrow,
  title,
  description,
  cta = true,
  breadcrumb,
}: {
  eyebrow?: string
  title: string | ReactNode
  description: string
  cta?: boolean
  breadcrumb?: { label: string; href?: string }[]
}) {
  return (
    <section className="relative hero-soft border-b border-border">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" aria-hidden />
      <div className="container-page relative py-14 md:py-20">
        {breadcrumb && breadcrumb?.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5" aria-label="Fil d'Ariane">
            {breadcrumb?.map?.((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {b?.href ? (
                  <Link href={b.href} className="hover:text-foreground">{b?.label}</Link>
                ) : (
                  <span className="text-foreground">{b?.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <FadeIn>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-3xl md:text-5xl tracking-tight font-bold text-foreground max-w-3xl">
            {title}
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </p>
          {cta && (
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:bg-accent/90 transition-all"
              >
                <Calendar className="h-4 w-4" />
                Prendre rendez-vous
              </Link>
              <Link
                href="/specialites"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Découvrir les spécialités
              </Link>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
