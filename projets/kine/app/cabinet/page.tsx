import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Train, Bus, ParkingCircle, Accessibility, Phone, Calendar, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FadeIn, Stagger, StaggerItem } from '@/components/animated'
import { CabinetMap } from '@/components/cabinet-map'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Le cabinet KSNB — 5 Boulevard Georges Mandel, Nantes Chantenay',
  description: "Cabinet de kinésithérapie KSNB au 5 Boulevard Georges Mandel à Nantes Chantenay. Accès tram lignes 2 et 3, bus 26, parking proche, rez-de-chaussée accessible.",
  alternates: { canonical: '/cabinet' },
}

export default function CabinetPage() {
  return (
    <>
      <PageHero
        eyebrow="Le cabinet KSNB"
        title={<>Au cœur de <span className="text-primary">Nantes Chantenay</span></>}
        description="Un cabinet moderne, lumineux et facilement accessible en transports en commun comme en voiture, en plein quartier Chantenay."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Le cabinet' }]}
      />

      <section className="py-14">
        <div className="container-page grid lg:grid-cols-2 gap-6">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[var(--shadow-md)] bg-muted">
              <Image src={SITE.images.cabinet1} alt="Salle de traitement du cabinet KSNB à Nantes" fill sizes="(max-width:1024px) 100vw, 540px" className="object-cover" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[var(--shadow-md)] bg-muted">
              <Image src={SITE.images.cabinet2} alt="Espace de rééducation et ré-athlétisation" fill sizes="(max-width:1024px) 100vw, 540px" className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-14 bg-muted/40">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-5 space-y-5">
            <h2 className="font-display text-3xl font-bold tracking-tight">Adresse & accès</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">{SITE.address.street}</strong><br/>{SITE.address.postalCode} {SITE.address.city} — {SITE.address.district}</span></li>
              <li className="flex items-start gap-3"><Train className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">Tramway :</strong> {SITE.transports.tram}</span></li>
              <li className="flex items-start gap-3"><Bus className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">Bus :</strong> {SITE.transports.bus}</span></li>
              <li className="flex items-start gap-3"><ParkingCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">Parking public :</strong> {SITE.transports.parking}</span></li>
              <li className="flex items-start gap-3"><Accessibility className="h-5 w-5 text-primary mt-0.5 shrink-0" /><span><strong className="text-foreground">Accessibilité :</strong> rez-de-chaussée, entrée accessible</span></li>
              <li className="flex items-start gap-3"><Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" /><a href={`tel:${SITE.phoneRaw}`} className="text-foreground hover:text-primary"><strong>{SITE.phone}</strong></a></li>
              <li className="flex items-start gap-3"><Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" /><div className="space-y-0.5">{SITE.hours?.map?.((h) => (<div key={h.day} className="text-foreground"><strong className="font-medium">{h.day} :</strong> {h.value}</div>))}</div></li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/rendez-vous" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-sm)] hover:bg-accent/90 transition-all"><Calendar className="h-4 w-4" /> Prendre rendez-vous</Link>
              <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE.address.full)}`} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted">Itinéraire</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="lg:col-span-7">
            <CabinetMap />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
