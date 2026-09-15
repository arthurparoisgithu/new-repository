import type { Metadata } from 'next'
import Link from 'next/link'
import { BlogCard } from '@/components/site/blog-card'
import { POSTS } from '@/lib/blog'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Le Journal WebReset — Stratégie web pour professions libérales',
  description:
    "Réglementation, conversion, refonte : analyses et méthodes pour les notaires, avocats et CGP qui veulent un site qui convertit. Articles signés Arthur Parois.",
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Le Journal WebReset — Stratégie web pour professions libérales',
    description:
      "Réglementation, conversion, refonte : analyses et méthodes pour les notaires, avocats et CGP.",
    type: 'website',
  },
}

export default function BlogIndexPage() {
  return (
    <div className="relative">
      {/* Header */}
      <section className="relative border-b border-border">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <span aria-hidden>←</span>
            Retour à l&apos;accueil
          </Link>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-accent font-medium">Le Journal</p>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight text-foreground max-w-3xl">
            Stratégie & méthode pour les <span className="italic text-accent">cabinets exigeants.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/70 leading-relaxed">
            Analyses, retours d&apos;expérience et règles pratiques pour les notaires, avocats, CGP et experts-comptables qui veulent un site web qui convertit. Sans bla-bla.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-16 rounded-md border border-accent/30 bg-muted/40 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug">
                Avant de refondre votre site, auditez-le.
              </h2>
              <p className="mt-3 text-foreground/70">
                2 minutes pour connaître votre score, 3 recommandations personnalisées — sans inscription.
              </p>
            </div>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 rounded-sm bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Lancer mon audit gratuit
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
