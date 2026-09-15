'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { IMAGES } from '@/lib/images'

// Format current month/year for editorial header
const MAG_LABEL = 'WebReset — Édition pilote 2026'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden grain-overlay">
      {/* Background tonality */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={IMAGES.heroBackground}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.32]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      {/* Massive editorial numeral, top-right faded watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-10 right-[-2vw] md:right-[-1vw] z-0"
      >
        <span className="editorial-numeral block text-[clamp(220px,38vw,520px)] text-accent/[0.08]">
          N°01
        </span>
      </div>

      {/* Vertical magazine spine label, left edge */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute left-3 lg:left-6 top-32 bottom-32 z-10 items-center"
      >
        <span className="vertical-label text-foreground/35">{MAG_LABEL}</span>
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5 md:px-12 pt-14 pb-16 md:pt-20 md:pb-24">
        {/* Tiny ribbon: pilote announcement */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 mb-12 md:mb-16"
        >
          <a
            href="#pilote"
            className="inline-flex items-center gap-2.5 text-foreground/70 hover:text-foreground transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="eyebrow text-foreground/80">Lancement · Cabinet pilote — Nantes & région</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <span aria-hidden="true" className="hidden sm:block h-px w-12 bg-foreground/20" />
          <span className="eyebrow text-foreground/45">N°01 / Refonte premium</span>
        </motion.div>

        {/* Editorial H1 — magazine cover style */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif tracking-mag text-foreground"
        >
          <span className="block text-[34px] sm:text-5xl md:text-6xl lg:text-[78px] leading-[1.02] whitespace-nowrap">
            Votre site doit devenir
          </span>
          <span className="block italic text-accent text-[44px] sm:text-6xl md:text-7xl lg:text-[100px] leading-[0.98] mt-1 md:mt-2 tracking-[-0.04em] whitespace-nowrap">
            une machine
          </span>
          <span className="block text-[34px] sm:text-5xl md:text-6xl lg:text-[78px] leading-[1.02] mt-1 whitespace-nowrap">
            à rendez-vous.
          </span>
        </motion.h1>

        {/* Gold rule + small caption */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-12 md:mt-14 flex items-start gap-6 max-w-2xl"
        >
          <div className="mag-rule w-[88px] mt-3 flex-shrink-0" />
          <p className="font-serif italic text-foreground/75 text-lg md:text-xl leading-snug tracking-[-0.005em]">
            Refonte de site web pour notaires, avocats, conseillers en gestion de patrimoine, experts-comptables et architectes.
          </p>
        </motion.div>

        {/* Body copy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-6 max-w-xl text-foreground/65 leading-relaxed"
        >
          Je transforme les sites « plaquette » en outils d’acquisition. Audit, copywriting, design et développement — livrés en 7 à 10 jours, garantie satisfait ou remboursé.
        </motion.p>

        {/* Editorial CTA pair: button + underline link */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
        >
          <Button asChild size="lg" className="rounded-sm px-7 h-12 text-[15px]">
            <a href="#pilote">
              Postuler comme cabinet pilote
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
          <a
            href="/audit"
            className="group inline-flex items-baseline gap-2 text-foreground/85 hover:text-foreground transition-colors"
          >
            <span className="font-serif italic text-lg border-b border-accent/60 group-hover:border-accent pb-0.5 transition-colors">
              ou faire l&apos;audit gratuit
            </span>
            <ArrowUpRight className="h-4 w-4 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom editorial strip: trust signals + meta */}
      <div className="relative z-10 border-y border-foreground/10 bg-background/60 backdrop-blur-sm">
        <div className="mx-auto max-w-[1240px] px-5 md:px-12 py-4 flex flex-wrap items-center gap-x-10 gap-y-2 text-[12px] text-foreground/65">
          <span className="eyebrow text-foreground/45">Garanties</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent" /> Satisfait ou remboursé
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent" /> Livraison en 7–10 jours
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent" /> Paiement en 2 fois sans frais
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent" /> Conformité CSN maîtrisée
          </span>
          <span className="ml-auto eyebrow text-foreground/40 hidden md:inline">PAR ARTHUR PAROIS</span>
        </div>
      </div>
    </section>
  )
}
