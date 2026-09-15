'use client'

import { motion } from 'framer-motion'

const STEPS = [
  {
    day: 'Jour 1–2',
    n: '01',
    title: 'Audit & stratégie',
    desc: "Analyse du site existant, interview de 45 min, définition d’un positionnement clair et d’un objectif business mesurable.",
  },
  {
    day: 'Jour 3–5',
    n: '02',
    title: 'Design & copywriting',
    desc: 'Maquette sur-mesure et rédaction orientée conversion. Une seule boucle de retour pour rester sur le rythme.',
  },
  {
    day: 'Jour 6–8',
    n: '03',
    title: 'Développement',
    desc: 'Intégration soignée, responsive, rapide, sécurisée. Branchement des outils (calendrier, formulaire, analytics).',
  },
  {
    day: 'Jour 9–10',
    n: '04',
    title: 'Mise en ligne',
    desc: 'Déploiement sur votre domaine, vérifications finales, formation courte de 30 min à la gestion du site.',
  },
]

export function Process() {
  return (
    <section id="methode" className="py-28 md:py-36 bg-secondary/30">
      <div className="mx-auto max-w-[1240px] px-5 md:px-12">
        {/* Editorial header */}
        <div className="grid gap-10 md:gap-16 md:grid-cols-12 mb-16 md:mb-24">
          <div className="md:col-span-5">
            <p className="eyebrow text-accent">Méthode</p>
            <div className="mag-rule w-[88px] mt-4" />
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif tracking-mag text-4xl md:text-6xl leading-[1.02] text-foreground">
              Un processus condensé
              <span className="block italic text-accent">en dix jours.</span>
            </h2>
            <p className="mt-6 max-w-xl text-foreground/65 leading-relaxed">
              Un cabinet est une organisation exigeante. Votre refonte ne peut pas s’étaler sur des mois. Voici comment je tiens le délai — étape par étape.
            </p>
          </div>
        </div>

        {/* Vertical editorial timeline */}
        <div className="relative">
          {/* central vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[22px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/30 to-transparent md:-translate-x-1/2"
          />

          <div className="flex flex-col gap-12 md:gap-20">
            {STEPS.map((s, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start"
                >
                  {/* Numeral marker on the line */}
                  <div
                    aria-hidden="true"
                    className="absolute left-[22px] md:left-1/2 top-3 -translate-x-1/2 z-10"
                  >
                    <span className="flex h-3 w-3 rounded-full bg-accent ring-4 ring-secondary" />
                  </div>

                  {/* Left/right alternating layout (desktop) */}
                  <div
                    className={
                      'pl-12 md:pl-0 ' +
                      (isLeft
                        ? 'md:order-1 md:pr-12 md:text-right'
                        : 'md:order-2 md:pl-12')
                    }
                  >
                    <span className="editorial-numeral text-6xl md:text-8xl text-accent/30 block leading-none">
                      {s.n}
                    </span>
                    <p className="mt-3 eyebrow text-foreground/55">{s.day}</p>
                  </div>

                  <div
                    className={
                      'pl-12 md:pl-0 ' +
                      (isLeft ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12 md:text-right')
                    }
                  >
                    <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-foreground/65 leading-relaxed max-w-md md:inline-block">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
