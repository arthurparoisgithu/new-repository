import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Phone, FileText, CreditCard, Clock, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FadeIn } from '@/components/animated'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous — Cabinet KSNB Nantes',
  description: 'Réservez votre consultation de kinésithérapie en ligne via Doctolib. Première consultation 1 heure au cabinet KSNB à Nantes Chantenay. Accès direct, sans ordonnance possible.',
  alternates: { canonical: '/rendez-vous' },
}

export default function RendezVousPage() {
  return (
    <>
      <PageHero
        eyebrow="Prendre rendez-vous"
        title={<>Réservez en ligne, <span className="text-primary">24/7</span></>}
        description="Réservez votre consultation directement via Doctolib. Si vous ne trouvez pas de créneau, n’hésitez pas à m’appeler au cabinet : je peux parfois vous proposer une solution plus rapide."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Rendez-vous' }]}
        cta={false}
      />

      <section className="py-12">
        <div className="container-page grid lg:grid-cols-12 gap-8">
          <FadeIn className="lg:col-span-8">
            <div className="rounded-xl bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 md:p-12 shadow-[var(--shadow-md)] text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-5">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">Prise de rendez-vous via <span className="text-primary">Doctolib</span></h2>
              <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
                Cliquez sur le bouton ci-dessous pour accéder à mon agenda Doctolib et choisir le créneau qui vous convient. La réservation est gratuite, sécurisée et disponible 24/7.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href={SITE.doctolib} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-sm)] hover:bg-accent/90 hover:shadow-[var(--shadow-md)] transition-all">
                  <Calendar className="h-5 w-5" /> Réserver sur Doctolib
                  <ExternalLink className="h-4 w-4 opacity-70" />
                </a>
                <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-7 py-3.5 text-base font-semibold text-foreground hover:bg-muted transition-colors">
                  <Phone className="h-5 w-5 text-primary" /> {SITE.phone}
                </a>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">Vous serez redirigé vers Doctolib dans un nouvel onglet.</p>
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-card p-5 shadow-[var(--shadow-sm)] text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mb-2"><Calendar className="h-5 w-5 text-primary" /></div>
                <div className="font-display font-bold text-foreground text-sm">24h/24, 7j/7</div>
                <div className="text-xs text-muted-foreground mt-1">Réservation en ligne sans appel</div>
              </div>
              <div className="rounded-xl bg-card p-5 shadow-[var(--shadow-sm)] text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2"><Clock className="h-5 w-5 text-secondary" /></div>
                <div className="font-display font-bold text-foreground text-sm">1ˣᵉ conso. 1h</div>
                <div className="text-xs text-muted-foreground mt-1">Bilan complet + premiers soins</div>
              </div>
              <div className="rounded-xl bg-card p-5 shadow-[var(--shadow-sm)] text-center">
                <div className="mx-auto h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center mb-2"><FileText className="h-5 w-5 text-accent" /></div>
                <div className="font-display font-bold text-foreground text-sm">Accès direct</div>
                <div className="text-xs text-muted-foreground mt-1">Avec ou sans ordonnance</div>
              </div>
            </div>
          </FadeIn>

          <aside className="lg:col-span-4 space-y-5">
            <FadeIn delay={0.1}>
              <div className="rounded-xl bg-card p-6 shadow-[var(--shadow-sm)]">
                <h3 className="font-display font-bold text-lg flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /> Durée des consultations</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                  <li><strong>Première consultation :</strong> 1 heure (bilan complet + premiers soins)</li>
                  <li><strong>Séances de suivi :</strong> 30 à 45 minutes</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="rounded-xl bg-card p-6 shadow-[var(--shadow-sm)]">
                <h3 className="font-display font-bold text-lg flex items-center gap-2"><FileText className="h-5 w-5 text-primary" /> À apporter</h3>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                  <li>• Carte Vitale</li>
                  <li>• Carte de mutuelle</li>
                  <li>• Ordonnance (si vous en avez une)</li>
                  <li>• Examens complémentaires (radio, IRM, EMG…)</li>
                  <li>• Tenue confortable</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="rounded-xl bg-primary/5 p-6">
                <h3 className="font-display font-bold text-lg flex items-center gap-2"><CreditCard className="h-5 w-5 text-primary" /> Tarifs & paiement</h3>
                <ul className="mt-3 space-y-1 text-sm text-foreground/90">
                  <li>Bilan initial : 23€ (+25€ dépassement 1ˣᵉ conso.)</li>
                  <li>Suivi : 16€ à 22€</li>
                  <li>Conventionné secteur 1 — Tiers payant SS</li>
                </ul>
                <Link href="/tarifs" className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline">Voir le détail des tarifs →</Link>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>
    </>
  )
}
