import Link from 'next/link'
import { ArrowRight, CalendarCheck, Sparkles } from 'lucide-react'

export function BlogCTA() {
  return (
    <aside className="my-14 rounded-md border border-accent/30 bg-muted/40 p-7 md:p-9 not-prose">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
        <Sparkles className="h-3.5 w-3.5" />
        <span>Audit gratuit</span>
      </div>
      <h3 className="mt-4 font-serif text-2xl md:text-3xl text-foreground leading-snug">
        Votre site convertit-il vraiment ?
      </h3>
      <p className="mt-3 text-sm md:text-base text-foreground/70 leading-relaxed max-w-2xl">
        Recevez en 2 minutes un score de performance personnalisé et 3 recommandations concrètes pour transformer votre site en machine à rendez-vous.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Link
          href="/audit"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <CalendarCheck className="h-4 w-4" />
          Lancer mon audit gratuit
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-5 py-2.5 text-sm font-medium hover:border-accent/40 transition-colors"
        >
          Parler à Arthur
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  )
}
