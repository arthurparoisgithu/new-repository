import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, HelpCircle } from 'lucide-react'
import { faqRecords } from '@/lib/content'
import { PageHero } from '@/components/page-hero'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FadeIn } from '@/components/animated'

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes sur la kinésithérapie',
  description: 'Toutes les réponses aux questions sur la durée des séances, les tarifs, l’ordonnance, la carte vitale, la 1ˣᵉ consultation au cabinet KSNB à Nantes Chantenay.',
  alternates: { canonical: '/faq' },
}

function inline(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')
}

export default function FaqPage() {
  const items = [...faqRecords].sort(
    (a, b) => a.category.localeCompare(b.category) || a.ordering - b.ordering,
  )
  const grouped: Record<string, any[]> = {}
  ;(items ?? []).forEach((it: any) => {
    const k = it?.category ?? 'Général'
    if (!grouped[k]) grouped[k] = []
    grouped[k].push(it)
  })
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: (items ?? []).map((it: any) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer.replace(/\*\*|\*/g, '') },
    })),
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="FAQ"
        title={<>Questions <span className="text-primary">fréquentes</span></>}
        description="Tout ce que vous voulez savoir avant de venir au cabinet : tarifs, durée, ordonnance, carte vitale, première consultation, langues. Une question reste ? Appelez-moi."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'FAQ' }]}
        cta={false}
      />
      <section className="py-12">
        <div className="container-page max-w-3xl">
          {Object.entries(grouped)?.map?.(([cat, list]) => (
            <FadeIn key={cat} className="mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                <HelpCircle className="h-3.5 w-3.5" /> {cat}
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {list?.map?.((it) => (
                  <AccordionItem key={it.id} value={it.id} className="rounded-xl bg-card border-0 shadow-[var(--shadow-sm)] data-[state=open]:shadow-[var(--shadow-md)] px-5">
                    <AccordionTrigger className="text-left font-display text-base font-semibold py-5 hover:no-underline text-foreground">{it.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                      <span dangerouslySetInnerHTML={{ __html: inline(it?.answer ?? '') }} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeIn>
          ))}
          <div className="mt-12 rounded-xl bg-primary/5 p-8 text-center">
            <h3 className="font-display text-xl font-bold">Une autre question ?</h3>
            <p className="mt-2 text-muted-foreground">N’hésitez pas à réserver directement ou à m’appeler.</p>
            <Link href="/rendez-vous" className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90"><Calendar className="h-4 w-4" /> Prendre rendez-vous</Link>
          </div>
        </div>
      </section>
    </>
  )
}
