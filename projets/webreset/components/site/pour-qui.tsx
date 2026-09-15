'use client'

import { motion } from 'framer-motion'

const AUDIENCES = [
  {
    n: '01',
    title: 'Notaires',
    desc: "Cabinets notariaux qui veulent refléter l’autorité de leur étude en ligne, dans le respect strict de la déontologie CSN.",
  },
  {
    n: '02',
    title: 'Avocats',
    desc: 'Cabinets cherchant à attirer des dossiers plus qualifiés et mieux rémunérés, sur leurs domaines d’expertise.',
  },
  {
    n: '03',
    title: 'CGP',
    desc: 'Conseillers en gestion de patrimoine qui veulent structurer leur prise de RDV et clarifier leur promesse client.',
  },
  {
    n: '04',
    title: 'Experts-comptables',
    desc: 'Cabinets souhaitant se différencier d’une concurrence identique, standardisée, et souvent invisible en ligne.',
  },
  {
    n: '05',
    title: 'Architectes',
    desc: 'Agences qui veulent un site digne de leur travail, pensé pour signer des projets résidentiels ou tertiaires.',
  },
  {
    n: '06',
    title: 'Professions réglementées',
    desc: 'Médecins spécialistes, ostéopathes, kinésithérapeutes haut de gamme, psychologues en libéral.',
  },
]

export function PourQui() {
  return (
    <section id="pour-qui" className="py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-5 md:px-12">
        {/* Editorial header in 2 columns */}
        <div className="grid gap-10 md:gap-16 md:grid-cols-12 mb-14 md:mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow text-accent">Pour qui</p>
            <div className="mag-rule w-[88px] mt-4" />
          </div>
          <div className="md:col-span-7">
            <h2 className="font-serif tracking-mag text-4xl md:text-6xl leading-[1.02] text-foreground">
              Pensé pour les métiers
              <span className="block italic text-accent">où la confiance</span>
              <span className="block">est la première compétence.</span>
            </h2>
            <p className="mt-6 max-w-xl text-foreground/65 leading-relaxed">
              Les professions libérales n’ont pas besoin d’un « beau site ». Elles ont besoin d’un site qui rassure, qui positionne, et qui déclenche la prise de rendez-vous.
            </p>
          </div>
        </div>

        {/* Editorial numbered list — no cards */}
        <div className="divide-y divide-foreground/10 border-y border-foreground/10">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.55 }}
              className="group grid grid-cols-12 items-start gap-4 md:gap-8 py-7 md:py-9 hover:bg-secondary/40 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="editorial-numeral text-3xl md:text-5xl text-accent/70 group-hover:text-accent transition-colors">
                  {a.n}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground leading-tight">
                  {a.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-foreground/65 leading-relaxed">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
