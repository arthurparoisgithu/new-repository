import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Calendar, Phone, CheckCircle2 } from 'lucide-react'
import { PageHero } from './page-hero'
import { FadeIn } from './animated'
import { SITE } from '@/lib/site'

export function SpecialtyPageLayout({
  eyebrow,
  title,
  description,
  intro,
  image,
  imageAlt,
  sections,
  conditions,
  whenToConsult,
  approach,
}: {
  eyebrow: string
  title: string | ReactNode
  description: string
  intro: ReactNode
  image: string
  imageAlt: string
  sections: { heading: string; content: ReactNode }[]
  conditions: string[]
  whenToConsult: string[]
  approach: string[]
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        breadcrumb={[
          { label: 'Accueil', href: '/' },
          { label: 'Spécialités', href: '/specialites' },
          { label: eyebrow },
        ]}
      />

      <section className="py-14">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-7">
            <div className="prose-medical">{intro}</div>
            {sections?.map?.((s, i) => (
              <div key={i} className="prose-medical">
                <h2>{s.heading}</h2>
                {s.content}
              </div>
            ))}
          </FadeIn>

          <aside className="lg:col-span-5 space-y-5 lg:sticky lg:top-24 self-start">
            <FadeIn delay={0.05}>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-[var(--shadow-md)]">
                <Image src={image} alt={imageAlt} fill sizes="(max-width:1024px) 100vw, 480px" className="object-cover" />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-xl bg-card p-6 shadow-[var(--shadow-sm)]">
                <h3 className="font-display text-lg font-bold text-foreground">Pathologies traitées</h3>
                <ul className="mt-3 space-y-2">
                  {conditions?.map?.((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-xl bg-card p-6 shadow-[var(--shadow-sm)]">
                <h3 className="font-display text-lg font-bold text-foreground">Quand consulter ?</h3>
                <ul className="mt-3 space-y-2">
                  {whenToConsult?.map?.((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-foreground/90">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-xl bg-primary/5 p-6">
                <h3 className="font-display text-lg font-bold text-foreground">Mon approche</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                  {approach?.map?.((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/rendez-vous"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-sm)] hover:bg-accent/90 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  Prendre rendez-vous
                </Link>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
                </a>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>
    </>
  )
}
