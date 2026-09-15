'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { IMAGES, CONTACT } from '@/lib/images'

const PRINCIPES = [
  { title: 'Observer avant de créer', desc: "J’ai analysé des centaines de sites de professions libérales avant d’en refondre un seul. Chaque décision de design s’appuie sur un constat concret." },
  { title: 'Parler business, pas jargon', desc: "Je ne vous parlerai pas de ‘grids’ ou de ‘composants’. Je vous parlerai de rendez-vous entrants, de dossiers qualifiés et d’image perçue." },
  { title: 'Réduire votre risque', desc: "Satisfait ou remboursé, paiement en deux fois, livraison rapide. Je prends le risque à votre place, parce que je sais ce que je livre." },
]

export function APropos() {
  return (
    <section id="a-propos" className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 grid gap-14 lg:grid-cols-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-lg bg-muted shadow-[0_18px_40px_-12px_rgb(15_30_61_/_0.22)]">
            <Image
              src={IMAGES.arthurPortrait}
              alt={`Portrait studio de ${CONTACT.founder}, fondateur de WebReset`}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-6 flex items-center gap-3 max-w-[420px]">
            <div className="h-px flex-1 bg-accent/50" />
            <span className="text-xs uppercase tracking-[0.22em] text-foreground/60">{CONTACT.founder}</span>
            <div className="h-px flex-1 bg-accent/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-accent">À propos</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl tracking-tight leading-tight">
            Autodidacte, <span className="italic text-accent">méticuleux</span>, et obsédé par la conversion.
          </h2>

          <div className="mt-6 space-y-5 text-foreground/75 leading-relaxed">
            <p>
              Je m’appelle Arthur Parois. Je n’ai pas suivi de cursus classique en web design. J’ai appris en observant, en démontant, en analysant les sites des professions libérales — les bons, les mauvais, les oubliés.
            </p>
            <p>
              Ce que j’ai compris, c’est que la majorité de ces sites sont conçus comme des « plaquettes numériques ». Ils décrivent une activité au lieu de déclencher une prise de rendez-vous. Ils rassurent l’associé qui les commande, mais pas le client qui les consulte.
            </p>
            <p>
              J’ai créé <span className="text-foreground font-medium">WebReset</span> pour corriger ce décalage. Je ne vends pas un site : je vends une transformation business, avec un livrable pensé du premier mot à la dernière ligne de code pour votre cabinet.
            </p>
          </div>

          <div className="mt-10 relative rounded-lg bg-card p-6 shadow-[0_4px_10px_-2px_rgb(15_30_61_/_0.08)]">
            <Quote className="absolute -top-3 -left-3 h-8 w-8 text-accent" />
            <p className="font-serif text-xl md:text-2xl leading-snug tracking-tight text-foreground">
              “Je ne cherche pas à faire ‘le plus beau site’ de votre secteur. Je cherche à faire celui qui vous ramène le plus de rendez-vous qualifiés.”
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {PRINCIPES?.map((p) => (
              <div key={p?.title}>
                <div className="h-px w-10 bg-accent" />
                <h4 className="mt-4 font-serif text-lg tracking-tight">{p?.title}</h4>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{p?.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
