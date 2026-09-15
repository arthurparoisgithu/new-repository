'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Scale, Globe, FileBadge, AlertOctagon, BookOpenCheck } from 'lucide-react'

const RULES = [
  {
    icon: Globe,
    title: 'Charte de nommage CSN',
    text: "Le CSN édicte une charte de nommage et réserve l'extension .notaires.fr. Selon votre situation, je travaille avec votre sous-domaine officiel ou un nom de domaine professionnel respectueux de la charte.",
  },
  {
    icon: FileBadge,
    title: 'Logo Notaires de France & Marianne',
    text: "Charte graphique officielle respectée à la lettre, hiérarchie visuelle conforme, mention obligatoire intégrée au design sans alourdir l'expérience.",
  },
  {
    icon: BookOpenCheck,
    title: 'Contrôle a posteriori de la chambre',
    text: "Le règlement national du CSN prévoit un contrôle après publication par la chambre départementale. Je conçois chaque page pour anticiper ce contrôle et éviter toute mise en demeure.",
  },
  {
    icon: Scale,
    title: 'Communication informative & sobre',
    text: "Pas de slogans agressifs, pas de témoignages identifiés, pas de publicité comparative. Un copywriting éducatif qui convertit sans jamais franchir la ligne déontologique.",
  },
  {
    icon: AlertOctagon,
    title: 'Pas de publicité personnalisée',
    text: "Le décret 2023-1297 encadre strictement la publicité personnalisée et comparative. Je m'appuie exclusivement sur le SEO naturel et l'optimisation locale, autorisés par la profession.",
  },
  {
    icon: ShieldCheck,
    title: 'Mentions légales & RGPD',
    text: "Médiateur de la consommation, RC professionnelle, hébergement UE, politique de cookies, déclaration CNIL : tout est intégré dès la livraison.",
  },
]

export function Conformite() {
  return (
    <section id="conformite" className="relative py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">Conformité CSN</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Un site qui convertit, <span className="italic text-accent">sans risque disciplinaire.</span>
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            Le notariat français est encadré par le <strong className="text-foreground">Décret n° 2023-1297</strong> et l&apos;<strong className="text-foreground">Arrêté du 29 janvier 2024</strong>. Une déviation publicitaire peut coûter jusqu&apos;à <strong className="text-foreground">5 % du chiffre d&apos;affaires</strong> de l&apos;étude. WebReset maîtrise chaque règle.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RULES.map((rule, i) => {
            const Icon = rule.icon
            return (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-md border border-border bg-background p-7 hover:border-accent/40 transition-colors"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground">{rule.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{rule.text}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 rounded-md border border-accent/30 bg-background p-7 md:p-9">
          <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="flex-shrink-0">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <ShieldCheck className="h-7 w-7" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                « 9 agences web sur 10 ignorent la déontologie notariale. Elles livrent des sites qui exposent l&apos;étude à une mise en demeure de la chambre. »
              </p>
              <p className="mt-2 text-sm text-foreground/60">— Position de WebReset</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
