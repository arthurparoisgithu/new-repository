import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, BadgeCheck, Languages, Calendar, Stethoscope, Award } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FadeIn, Stagger, StaggerItem } from '@/components/animated'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: "À propos — Thibaud Chiffoleau, kinésithérapeute du sport",
  description: "Parcours et formations de Thibaud Chiffoleau, masseur-kinésithérapeute D.E. à Nantes Chantenay. Diplômé IFM3R 2023, formations McKenzie, névralgies, épaule, douleur chronique.",
  alternates: { canonical: '/a-propos' },
}

const formations = [
  { y: '2024', t: 'Méthode McKenzie — Partie A : Le Rachis Lombaire', org: 'Institut McKenzie France' },
  { y: '2024', t: 'Gestion des sciatiques et cruralgies en thérapie manuelle', org: 'Laurent Fabre, Guillaume Molinier' },
  { y: '2024', t: 'Gestion des névralgies cervicobrachiales en thérapie manuelle', org: 'Laurent Fabre, Guillaume Molinier' },
  { y: '2024', t: 'Lombalgie chronique', org: 'Joshua Lavallée' },
  { y: '2024', t: 'Gestion de la douleur', org: 'Anthony Halimi' },
  { y: '2025', t: 'Épaule, pratique basée sur les preuves', org: 'Azizz Youssef, Germain Delos' },
  { y: '2025', t: 'Les Mécaniques de la Douleur', org: 'Théo Chaumeil, Laurent Fabre, Alexandre Wickham' },
]

const parcours = [
  { y: '2023 — 2025', t: 'Cabinet libéral à Rezé', d: 'Premières années de pratique en cabinet libéral, prise en charge musculo-squelettique de l’adulte.' },
  { y: '2023 — 2024', t: 'Remplaçant — Hôpital Privé du Confluent (Nantes)', d: 'Service de rééducation : pathologies orthopédiques, post-opératoires et neurologiques.' },
  { y: '2023', t: 'Diplôme d’État — IFM3R (Pays-de-la-Loire)', d: 'Masseur-Kinésithérapeute D.E. — RPPS ' + SITE.rpps },
]

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={<>Un kiné formé en <span className="text-primary">continu</span>, ancré dans la science.</>}
        description="Mon objectif : vous proposer une prise en charge moderne, pédagogique et centrée sur des résultats durables. Apprenez-en plus sur mon parcours et mes formations."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
      />

      <section className="py-14">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="relative aspect-[3/4] max-w-md rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
              <Image src={SITE.images.portrait} alt="Thibaud Chiffoleau, kinésithérapeute à Nantes" fill sizes="(max-width:1024px) 100vw, 480px" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7">
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">Une approche basée sur les preuves, centrée sur le patient.</h2>
            <div className="prose-medical mt-2">
              <p>
                Je suis Thibaud Chiffoleau, masseur-kinésithérapeute D.E. diplômé de l’<strong>IFM3R des Pays-de-la-Loire en 2023</strong>. J’exerce au cabinet KSNB à Nantes Chantenay, dans un environnement moderne dédié à la rééducation musculo-squelettique et au sport.
              </p>
              <p>
                Ma philosophie : <strong>une rééducation active, pédagogique et personnalisée</strong>. Je consacre 1 heure à chaque première consultation parce qu’un bon traitement commence par un bon diagnostic. Mon rôle : combiner thérapie manuelle, exercices progressifs et explications claires pour vous rendre acteur de votre prise en charge.
              </p>
              <p>
                Je consulte en <strong>français et en anglais</strong>. Je suis conventionné secteur 1, accepte la carte vitale et pratique le tiers payant. Je n’accueille pas les enfants ni les pathologies vestibulaires ou respiratoires — je vous orienterai avec plaisir vers des collègues spécialisés sur Nantes.
              </p>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { i: BadgeCheck, t: 'Conventionné secteur 1' },
                { i: GraduationCap, t: 'MKDE — IFM3R 2023' },
                { i: Languages, t: 'Français / English' },
              ]?.map?.((b, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-[var(--shadow-sm)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary"><b.i className="h-5 w-5" /></span>
                  <span className="text-sm font-semibold text-foreground">{b.t}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container-page">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary mb-3"><Award className="h-3.5 w-3.5" /> Parcours</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Mon parcours.</h2>
          </FadeIn>
          <Stagger className="mt-8 space-y-4" staggerDelay={0.07}>
            {parcours?.map?.((p, i) => (
              <StaggerItem key={i}>
                <div className="grid md:grid-cols-12 gap-4 rounded-xl bg-card p-6 shadow-[var(--shadow-sm)]">
                  <div className="md:col-span-3 font-mono text-sm text-primary font-semibold">{p.y}</div>
                  <div className="md:col-span-9">
                    <div className="font-display text-lg font-bold text-foreground">{p.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.d}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3"><GraduationCap className="h-3.5 w-3.5" /> Formations continues</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Formations 2024 — 2025.</h2>
            <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl">Pour vous offrir une prise en charge moderne, je continue à me former chaque année auprès des références françaises et internationales.</p>
          </FadeIn>
          <Stagger className="mt-8 grid md:grid-cols-2 gap-4" staggerDelay={0.05}>
            {formations?.map?.((f, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 rounded-xl bg-card p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0"><Stethoscope className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs font-mono text-primary font-semibold">{f.y}</div>
                    <div className="font-display font-semibold text-foreground mt-0.5">{f.t}</div>
                    <div className="text-xs text-muted-foreground mt-1">{f.org}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn delay={0.2} className="mt-12 text-center">
            <Link href="/rendez-vous" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-md)] hover:bg-accent/90 transition-all">
              <Calendar className="h-5 w-5" /> Prendre rendez-vous
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
