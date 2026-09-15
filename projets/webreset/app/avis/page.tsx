import type { Metadata } from 'next'
import { AvisForm } from '@/components/site/avis-form'

export const metadata: Metadata = {
  title: 'Donner mon avis sur WebReset',
  description:
    'Vous avez collaboré avec WebReset ? Votre retour est lu personnellement par Arthur Parois. Avis public ou privé, comme vous le souhaitez.',
  alternates: { canonical: '/avis' },
  robots: {
    index: false,
    follow: true,
  },
}

export default function AvisPage() {
  return (
    <section className="relative py-16 md:py-24 grain-overlay">
      <div className="mx-auto max-w-[1100px] px-5 md:px-12">
        {/* Editorial header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="editorial-numeral text-5xl md:text-6xl text-accent/70">¶</span>
          <div>
            <p className="eyebrow text-accent">Retour client</p>
            <p className="mt-1 text-sm text-foreground/55">Avis honnête — lu personnellement par Arthur</p>
          </div>
        </div>

        <div className="mag-rule w-[120px] mb-12" />

        <AvisForm />
      </div>
    </section>
  )
}
