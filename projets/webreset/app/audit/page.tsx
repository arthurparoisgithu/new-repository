import type { Metadata } from 'next'
import Link from 'next/link'
import { AuditForm } from '@/components/site/audit-form'
import { ChevronLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Audit gratuit de votre site — 2 minutes, score sur 100 | WebReset',
  description:
    "Évaluez gratuitement la performance de votre site web de notaire, avocat, CGP ou expert-comptable. Score sur 100, 3 recommandations personnalisées, sans inscription.",
  alternates: { canonical: '/audit' },
  openGraph: {
    title: 'Audit gratuit de votre site — 2 minutes, score sur 100 | WebReset',
    description:
      "Évaluez gratuitement la performance de votre site. Score sur 100 et recommandations personnalisées en 2 minutes.",
    type: 'website',
  },
}

export default function AuditPage() {
  return (
    <div className="relative">
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Retour à l&apos;accueil
          </Link>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-accent font-medium">
            Audit gratuit
          </p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground max-w-3xl">
            Évaluez votre site en <span className="italic text-accent">2 minutes.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/70 leading-relaxed">
            7 questions ciblées, un score sur 100, 3 recommandations personnalisées. Aucune carte bancaire, aucune inscription. Juste un diagnostic honnête.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <AuditForm />
        </div>
      </section>
    </div>
  )
}
