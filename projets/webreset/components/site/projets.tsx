'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Sparkles } from 'lucide-react'
import { BeforeAfter } from './before-after'
import { IMAGES } from '@/lib/images'

const CASES = [
  {
    id: 'notaire',
    tag: 'Étude notariale',
    title: 'Le site « historique » figé en 2010',
    subtitle: 'Cas archétypal — étude notariale en région',
    beforeSrc: IMAGES.mockupNotaireBefore,
    afterSrc: IMAGES.mockupNotaireAfter,
    problem:
      "Site hérité du début des années 2010, navigation confuse, contenu daté, photos pixelisées, image démodée d'une étude pourtant solide localement. Aucun parcours clair par domaine (immobilier, famille, patrimoine), pas de prise de rendez-vous, mentions légales obsolètes.",
    solution:
      "Repositionnement éditorial centré client, architecture par parcours, prise de rendez-vous intégrée en page d'accueil, charte CSN reprise à zéro, conformité RGPD complète.",
    gains: [
      'Image moderne & institutionnelle',
      'Prise de RDV en ligne 24/7',
      'Conformité CSN sécurisée',
    ],
  },
  {
    id: 'cgp',
    tag: 'Gestion de patrimoine',
    title: 'Le site « brochure bancaire » sans promesse',
    subtitle: 'Cas archétypal — CGP indépendant',
    beforeSrc: IMAGES.mockupCgpBefore,
    afterSrc: IMAGES.mockupCgpAfter,
    problem:
      "Template générique inspiré des sites bancaires, phrases creuses (« votre patrimoine, notre métier »), zéro différenciation, perte de la majorité des visiteurs en moins de 15 secondes faute de promesse claire.",
    solution:
      "Promesse explicite dès le premier écran, page de capture structurée, prise de RDV en ligne, clarification du périmètre d'intervention et du profil de client idéal.",
    gains: [
      'Promesse différenciante en 5s',
      'Capture des leads qualifiés',
      "Coût d'acquisition maîtrisé",
    ],
  },
  {
    id: 'avocat',
    tag: "Avocat d'affaires",
    title: 'Le site « moyen et passe-partout »',
    subtitle: "Cas archétypal — cabinet d'avocats associés",
    beforeSrc: IMAGES.mockupAvocatBefore,
    afterSrc: IMAGES.mockupAvocatAfter,
    problem:
      "Identité visuelle banale, présentation par profil d'associé sans logique métier, navigation labyrinthique, attire majoritairement des demandes à faible valeur ajoutée et fait perdre du temps de secrétariat.",
    solution:
      "Identité éditoriale forte, architecture par domaine d'expertise, formulaire qualifiant en amont du premier échange, ligne de réassurance pour cadres dirigeants et entreprises.",
    gains: [
      'Demandes mieux ciblées',
      'Image de cabinet spécialisé',
      'Premier RDV pré-qualifié',
    ],
  },
]

export function Projets() {
  return (
    <section id="projets" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Études de cas</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl tracking-tight leading-tight">
            L&apos;avant / après parle mieux que <span className="italic text-accent">n&apos;importe quel discours</span>.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Voici trois exemples typiques de mauvaise infrastructure, malheureusement encore trop souvent d&apos;actualité dans le milieu des professions libérales françaises. Glissez le curseur pour découvrir la transformation.
          </p>
          <p className="mt-3 text-xs text-foreground/50 italic">
            Cas archétypaux à vocation pédagogique. Aucun client identifié.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-24">
          {CASES?.map((p, idx) => (
            <motion.article
              key={p?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-10 lg:grid-cols-12 items-start"
            >
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <BeforeAfter
                  beforeSrc={p?.beforeSrc ?? ''}
                  afterSrc={p?.afterSrc ?? ''}
                  beforeAlt={`${p?.title} — avant refonte`}
                  afterAlt={`${p?.title} — après refonte`}
                />
              </div>
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/60">{p?.tag}</p>
                <h3 className="mt-2 font-serif text-3xl md:text-4xl tracking-tight leading-tight">{p?.title}</h3>
                <p className="mt-2 text-foreground/70">{p?.subtitle}</p>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <Target className="h-4 w-4 text-accent" />
                      <span className="font-medium">Constat initial</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/65 leading-relaxed">{p?.problem}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="font-medium">Transformation</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/65 leading-relaxed">{p?.solution}</p>
                  </div>
                </div>

                <div className="mt-6 rounded-md border border-accent/30 bg-background p-5">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <Sparkles className="h-4 w-4 text-accent" />
                    <span className="font-medium">Gain</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {p?.gains?.map((g) => (
                      <div
                        key={g}
                        className="rounded-sm bg-accent/5 border border-accent/20 px-3 py-3 text-center text-[12px] font-medium text-foreground/85 leading-snug"
                      >
                        {g}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
