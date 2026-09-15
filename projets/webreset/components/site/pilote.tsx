'use client'

import { motion } from 'framer-motion'
import { MapPin, Gift, Handshake, Target, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BLOCKS = [
  {
    icon: Gift,
    label: 'Ce que vous obtenez',
    items: [
      'Refonte complète à tarif fortement réduit',
      'Possibilité de gratuité totale selon le projet',
      'Même méthode et même qualité que l’offre standard',
      'Mise en ligne sous 7 à 10 jours',
    ],
  },
  {
    icon: Handshake,
    label: 'Ce que je demande en échange',
    items: [
      'Droit d’utiliser le projet comme étude de cas',
      'Captures avant / après pour le portfolio',
      'Un témoignage écrit (anonymisé si nécessaire)',
      'Disponibilité pour un retour d’expérience honnête',
    ],
  },
  {
    icon: Target,
    label: 'Profil recherché',
    items: [
      'Notaire, avocat, CGP, expert-comptable ou architecte',
      'Cabinet établi en Loire-Atlantique ou région nantaise',
      'Site actuel dépassé ou inexistant',
      'Volonté réelle de transformer son acquisition',
    ],
  },
]

export function Pilote() {
  return (
    <section id="pilote" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs tracking-wide text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">Projet pilote en cours — Nantes & région</span>
          </div>

          <h2 className="mt-5 font-serif text-4xl md:text-5xl tracking-tight leading-tight">
            Je cherche mon <span className="italic text-accent">premier cabinet pilote.</span>
          </h2>

          <p className="mt-5 text-foreground/70 leading-relaxed">
            WebReset démarre. Pour mon premier projet, je cherche un cabinet de profession libérale en région nantaise prêt à jouer le jeu d’une refonte complète à conditions exceptionnelles — contre le droit d’utiliser le projet comme étude de cas. C&apos;est une fenêtre limitée à <strong className="text-foreground">un seul cabinet</strong>, en toute transparence.
          </p>

          <p className="mt-3 text-sm text-foreground/55 italic">
            Pourquoi ce démarrage transparent ? Parce qu&apos;une agence qui prétend avoir déjà transformé « des dizaines de cabinets » dès sa première semaine ne dit pas la vérité. Je préfère une vraie première collaboration, documentée honnêtement.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BLOCKS.map((block, i) => {
            const Icon = block.icon
            return (
              <motion.div
                key={block.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-md border border-border bg-card p-7 hover:border-accent/40 transition-colors"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-sm bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-foreground">{block.label}</h3>
                <ul className="mt-3 space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70 leading-relaxed">
                      <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-md border border-accent/30 bg-background p-7 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-shrink-0">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <MapPin className="h-7 w-7" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-snug">
                Vous êtes en Loire-Atlantique et votre site mérite mieux ?
              </p>
              <p className="mt-2 text-sm text-foreground/65">
                Postulez en deux minutes. Je vous réponds personnellement sous 48 heures avec un retour honnête sur la pertinence du projet.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button asChild size="lg" className="rounded-sm">
                <a href="#contact">
                  Postuler comme pilote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
