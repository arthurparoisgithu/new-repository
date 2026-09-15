import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FadeIn, Stagger, StaggerItem } from '@/components/animated'
import { SPECIALTIES } from '@/lib/specialties'

export const metadata: Metadata = {
  title: 'Spécialités — épaule, lombalgie, névralgies, kiné du sport à Nantes',
  description:
    "Découvrez mes 4 spécialités : pathologies de l'épaule, rachis lombaire & lombalgie, névralgies (sciatique, NCB, canal carpien) et kiné du sport. Cabinet KSNB à Nantes Chantenay.",
  alternates: { canonical: '/specialites' },
}

export default function SpecialitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mes spécialités"
        title={
          <>
            Une expertise <span className="text-primary">ciblée</span> sur quatre domaines.
          </>
        }
        description="Après mon diplôme en 2023, j'ai approfondi ma pratique avec des formations continues spécifiques. Cliquez sur une spécialité pour découvrir le détail des pathologies et de la prise en charge."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Spécialités' }]}
      />

      <section className="py-16">
        <div className="container-page">
          <Stagger className="grid gap-10">
            {SPECIALTIES?.map?.((s, i) => (
              <StaggerItem key={s.slug}>
                <article className="grid md:grid-cols-12 gap-6 md:gap-10 items-center bg-card rounded-2xl shadow-[var(--shadow-sm)] overflow-hidden">
                  <div className={`relative aspect-[4/3] md:aspect-auto md:h-[320px] md:col-span-5 bg-muted ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width:768px) 100vw, 480px"
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-7 p-6 md:p-10">
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                      {s.description}
                    </p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                      {s.conditions?.map?.((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      Découvrir cette spécialité
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
