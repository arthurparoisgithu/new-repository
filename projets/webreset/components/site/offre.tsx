'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Clock, CreditCard, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PILLARS = [
  { icon: ShieldCheck, title: 'Satisfait ou remboursé', desc: "Si le site livré ne vous convient pas à l’issue du projet, je vous rembourse intégralement. Le risque est entièrement sur moi." },
  { icon: Clock, title: 'Livraison en 7 à 10 jours', desc: "Un processus condensé et encadré : audit, arborescence, design, copywriting, développement, mise en ligne. Aucun projet qui traîne." },
  { icon: CreditCard, title: 'Paiement en deux fois', desc: "50 % au lancement, 50 % à la livraison. Vous ne payez jamais la totalité avant d’avoir validé le résultat final." },
]

const INCLUDED = [
  'Audit stratégique du site actuel',
  'Copywriting orienté conversion',
  'Design premium sur-mesure',
  'Développement rapide et sécurisé',
  'Intégration de la prise de RDV',
  'Optimisation SEO technique',
  'Mise en ligne sur votre domaine',
  'Formation de 30 min à la gestion',
]

export function Offre() {
  return (
    <section id="offre" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">L’offre</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl tracking-tight leading-tight">
            Une offre <span className="italic text-accent">irrationnelle</span> pour vous, raisonnable pour moi.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Je supprime les trois objections habituelles — le risque, le délai, la trésorerie — pour que la seule question qui reste soit : « est-ce que ce site peut vraiment changer mon cabinet ? ».
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PILLARS?.map((p, i) => (
            <motion.div
              key={p?.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative rounded-lg bg-card p-7 shadow-[0_4px_10px_-2px_rgb(15_30_61_/_0.08)] hover:shadow-[0_18px_40px_-12px_rgb(15_30_61_/_0.18)] transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-sm bg-primary text-primary-foreground inline-flex items-center justify-center">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl tracking-tight">{p?.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p?.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative overflow-hidden rounded-lg bg-primary text-primary-foreground p-8 md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Ce qui est inclus</p>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl tracking-tight leading-tight">
                Tout ce dont votre cabinet a besoin, rien de plus.
              </h3>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {INCLUDED?.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-primary-foreground/85">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5 space-y-4">
              <div className="rounded-lg bg-emerald-500/10 backdrop-blur p-6 border border-emerald-400/40 relative overflow-hidden">
                <div className="absolute top-3 right-3 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white tracking-wide uppercase">
                  Lancement
                </div>
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-300">Tarif pilote</p>
                <div className="mt-3 font-serif text-3xl tracking-tight leading-tight">
                  Réduction forte<br/><span className="text-base font-sans text-primary-foreground/70 italic">jusqu'à la gratuité totale</span>
                </div>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  Pour le 1<sup>er</sup> cabinet pilote en région nantaise, contre droit d&apos;utiliser le projet comme étude de cas.
                </p>
                <Button asChild size="lg" variant="secondary" className="rounded-sm w-full mt-5 bg-emerald-500 text-white hover:bg-emerald-600">
                  <a href="#pilote">Voir l&apos;offre pilote</a>
                </Button>
              </div>
              <div className="rounded-lg bg-background/10 backdrop-blur p-6 border border-primary-foreground/10">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Tarif standard</p>
                <div className="mt-3 font-serif text-5xl tracking-tight">2 800 € <span className="text-lg text-primary-foreground/60 align-middle">HT</span></div>
                <p className="mt-2 text-sm text-primary-foreground/70">Ou 2 × 1 400 € HT, sans frais.</p>
                <ul className="mt-5 space-y-2 text-sm text-primary-foreground/85">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Garantie satisfait ou remboursé</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Livraison en 7 à 10 jours</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" />Aucun engagement mensuel</li>
                </ul>
                <Button asChild size="lg" variant="secondary" className="rounded-sm w-full mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="#contact">Réserver un appel découverte</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
