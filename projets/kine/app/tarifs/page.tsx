import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, CreditCard, ShieldCheck, Wallet, Building2, CheckCircle2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FadeIn, Stagger, StaggerItem } from '@/components/animated'

export const metadata: Metadata = {
  title: 'Tarifs — Cabinet de kinésithérapie KSNB Nantes',
  description: 'Tarifs des consultations de kinésithérapie : bilan initial 23€ (+25€ dépassement 1ˣᵉ consultation), séances de suivi 16€ à 22€. Conventionné secteur 1, tiers payant accepté.',
  alternates: { canonical: '/tarifs' },
}

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs"
        title={<>Des tarifs <span className="text-primary">conventionnés</span> et transparents</>}
        description="Conventionné secteur 1, je pratique les tarifs de la Sécurité sociale. Aucun dépassement sur les séances de suivi. Carte vitale et tiers payant acceptés."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Tarifs' }]}
        cta={false}
      />
      <section className="py-14">
        <div className="container-page">
          <Stagger className="grid md:grid-cols-3 gap-5" staggerDelay={0.08}>
            {[
              { icon: ShieldCheck, t: 'Bilan kiné initial', price: '23€', sub: 'Tarif Sécurité sociale', d: 'Première consultation — 1 heure de bilan complet, diagnostic et plan de traitement.', extra: '+ 25€ de dépassement (1ˣᵉ consultation uniquement)' },
              { icon: CreditCard, t: 'Séance de suivi', price: '16€ — 22€', sub: 'Selon les actes', d: 'Durée 30 à 45 minutes. Pas de dépassement d’honoraires sur les séances de suivi.', extra: 'Cotation Sécurité sociale appliquée' },
              { icon: Wallet, t: 'Prise en charge', price: '60 / 100%', sub: 'SS + mutuelle', d: 'La Sécurité sociale rembourse 60%, votre mutuelle complète généralement les 40% restants.', extra: 'Tiers payant SS pratiqué' },
            ]?.map?.((c, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-xl bg-card p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4"><c.icon className="h-6 w-6" /></span>
                  <div className="font-display text-lg font-bold text-foreground">{c.t}</div>
                  <div className="mt-2 font-display text-3xl font-bold text-primary tracking-tight">{c.price}</div>
                  <div className="text-xs text-muted-foreground">{c.sub}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{c.d}</p>
                  <p className="mt-3 text-xs font-semibold text-secondary">{c.extra}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <FadeIn className="mt-12 grid md:grid-cols-2 gap-5">
            <div className="rounded-xl bg-card p-7 shadow-[var(--shadow-sm)]">
              <h2 className="font-display text-xl font-bold flex items-center gap-2"><Building2 className="h-5 w-5 text-primary" /> Modalités de paiement</h2>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {['Carte Vitale (mise à jour si possible)', 'Carte bancaire', 'Chèque', 'Virement bancaire'].map((m) => (
                  <li key={m} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" />{m}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl bg-primary/5 p-7">
              <h2 className="font-display text-xl font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Conventionné secteur 1</h2>
              <p className="mt-3 text-sm text-foreground/90">Je pratique les tarifs conventionnés par l’Assurance Maladie. Le tiers payant Sécurité sociale est appliqué systématiquement : vous n’avancez que la part mutuelle (sauf si votre mutuelle est connectée à mon logiciel).</p>
            </div>
          </FadeIn>

          <FadeIn className="mt-12 text-center">
            <Link href="/rendez-vous" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-md)] hover:bg-accent/90"><Calendar className="h-5 w-5" /> Prendre rendez-vous</Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
