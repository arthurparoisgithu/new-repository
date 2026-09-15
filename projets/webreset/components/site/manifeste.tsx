'use client'

import { motion } from 'framer-motion'

export function Manifeste() {
  return (
    <section className="relative py-28 md:py-40 bg-primary text-primary-foreground overflow-hidden">
      {/* Massive watermark numeral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-6 md:-left-2 select-none"
      >
        <span className="editorial-numeral text-[260px] md:text-[420px] text-accent/[0.07] leading-[0.85]">
          “
        </span>
      </div>

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow text-accent">Manifeste</p>
            <div className="mt-4 h-[2px] w-[60px] bg-accent" />
            <p className="mt-6 text-sm text-primary-foreground/55 leading-relaxed max-w-[200px]">
              Trois convictions qui structurent chaque projet WebReset.
            </p>
          </div>

          <div className="md:col-span-9 space-y-12 md:space-y-16">
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="pull-quote text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-[1.06] tracking-[-0.02em] max-w-[20ch]"
            >
              Un site de cabinet n&apos;est pas une <span className="text-accent not-italic font-serif">plaquette&nbsp;numérique</span>.
              C&apos;est le premier rendez-vous.
            </motion.blockquote>

            <div className="grid sm:grid-cols-3 gap-10 md:gap-12 pt-6 border-t border-primary-foreground/10">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <p className="eyebrow text-accent">I</p>
                <h4 className="mt-3 font-serif text-xl md:text-2xl tracking-tight">
                  Observer avant
                  <br />de créer.
                </h4>
                <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
                  Chaque décision de design s’appuie sur l’analyse de centaines de sites de professions libérales.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.12 }}
              >
                <p className="eyebrow text-accent">II</p>
                <h4 className="mt-3 font-serif text-xl md:text-2xl tracking-tight">
                  Parler business,
                  <br />pas jargon.
                </h4>
                <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
                  Pas de « grids » ni de « composants ». Des rendez-vous entrants, des dossiers qualifiés, une image perçue.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.19 }}
              >
                <p className="eyebrow text-accent">III</p>
                <h4 className="mt-3 font-serif text-xl md:text-2xl tracking-tight">
                  Réduire votre
                  <br />risque.
                </h4>
                <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
                  Satisfait ou remboursé, paiement en deux fois, livraison rapide. Le risque est sur moi.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
