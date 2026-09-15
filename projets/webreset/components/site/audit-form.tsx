'use client'

import { postForm } from '@/lib/forms'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, CheckCircle2, Globe, Mail, Phone, User2, AlertCircle, Sparkles, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'

type Step = 1 | 2 | 3
type YesNo = 'yes' | 'no' | null

const PROFESSIONS = [
  'Notaire',
  'Avocat',
  "Conseiller en gestion de patrimoine (CGP)",
  'Expert-comptable',
  'Architecte',
  'Autre profession libérale',
]

type QKey = 'speed' | 'mobile' | 'rdv' | 'recent' | 'trust' | 'seo' | 'legal'

const WEIGHTS: Record<QKey, number> = {
  speed: 15,
  mobile: 15,
  rdv: 20,
  recent: 10,
  trust: 15,
  seo: 15,
  legal: 10,
}

const QUESTIONS: { key: QKey; label: string; help: string }[] = [
  {
    key: 'speed',
    label: 'Votre site charge en moins de 3 secondes sur mobile ?',
    help: 'Vérifiable gratuitement sur pagespeed.web.dev. Seuil critique : 53 % des visiteurs quittent un site mobile au-delà de 3 sec (source : Google).',
  },
  {
    key: 'mobile',
    label: 'Votre site s’affiche parfaitement sur smartphone (sans zoom, sans scroll horizontal) ?',
    help: 'Test rapide : ouvrez votre site sur votre propre mobile. Boutons cliquables au pouce, texte lisible sans pincer.',
  },
  {
    key: 'rdv',
    label: 'Un bouton « Prendre rendez-vous » est visible dès la page d’accueil ?',
    help: 'Sans avoir besoin de scroller ni de fouiller un menu. C’est le levier de conversion n°1.',
  },
  {
    key: 'recent',
    label: 'Votre site a-t-il été refait dans les 3 dernières années ?',
    help: 'Refonte structurelle, pas simple changement de couleur ou de photo.',
  },
  {
    key: 'trust',
    label: 'Vos domaines d’expertise et votre équipe sont clairement présentés ?',
    help: 'Photos professionnelles, parcours, spécialisations détaillées, ancienneté du cabinet.',
  },
  {
    key: 'seo',
    label: 'Votre site est optimisé pour les recherches locales (SEO local) ?',
    help: 'Fiche Google Business Profile complète, mots-clés géolocalisés. 46 % des recherches Google ont une intention locale (source : Google).',
  },
  {
    key: 'legal',
    label: 'Mentions légales, politique de confidentialité et conformité RGPD à jour ?',
    help: 'Pour les notaires : numéro d’agrément de chambre visible, médiateur de la consommation, hors-UE interdit.',
  },
]

type Answers = Record<QKey, YesNo>

export function AuditForm() {
  const [step, setStep] = useState<Step>(1)
  const [submitting, setSubmitting] = useState(false)
  const [resultId, setResultId] = useState<string | null>(null)

  // Step 1 — contact
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [profession, setProfession] = useState('')
  const [websiteUrl, setWebsiteUrl] = useState('')

  // Step 2 — diagnostic
  const [answers, setAnswers] = useState<Answers>({
    speed: null,
    mobile: null,
    rdv: null,
    recent: null,
    trust: null,
    seo: null,
    legal: null,
  })

  const score = useMemo(() => {
    return (Object.keys(answers) as QKey[]).reduce((acc, key) => {
      if (answers[key] === 'yes') return acc + WEIGHTS[key]
      return acc
    }, 0)
  }, [answers])

  const allAnswered = Object.values(answers).every((v) => v !== null)

  const verdict = useMemo(() => {
    if (score <= 40)
      return {
        label: 'Refonte urgente',
        sentence:
          'Votre site fuit la majorité de ses visiteurs. Une refonte structurelle aurait un impact immédiat sur vos prises de rendez-vous.',
      }
    if (score <= 60)
      return {
        label: 'Améliorations majeures',
        sentence:
          'Plusieurs leviers de conversion ne sont pas activés. Une refonte ciblée débloque rapidement vos résultats.',
      }
    if (score <= 80)
      return {
        label: 'Optimisations possibles',
        sentence:
          'Votre site est correct, mais vous laissez encore des prises de rendez-vous sur la table. Quelques ajustements bien placés suffisent.',
      }
    return {
      label: 'Site performant',
      sentence:
        'Félicitations — votre site est dans le haut du panier. Un coup d’œil de pro pour optimiser les derniers détails reste pertinent.',
    }
  }, [score])

  const recommendations = useMemo(() => {
    const recs: { title: string; detail: string }[] = []
    if (answers.speed === 'no')
      recs.push({
        title: 'Accélérer la version mobile',
        detail:
          '53 % des visiteurs mobiles abandonnent un site qui dépasse 3 secondes de chargement (Google). Cible : 1,5 à 2,5 secondes via WebP, code minifié et hébergement dédié.',
      })
    if (answers.mobile === 'no')
      recs.push({
        title: 'Refondre l’expérience mobile',
        detail:
          'Boutons de 44 × 44 px minimum (norme tactile Apple/Google), texte lisible sans zoom, numéro de téléphone cliquable. Plus de 60 % des visites se font sur mobile.',
      })
    if (answers.rdv === 'no')
      recs.push({
        title: 'Installer un CTA prise de rendez-vous dès le premier écran',
        detail:
          'Un bouton visible sans scroll, dupliqué dans le header et après chaque grande section. C’est le levier de conversion le plus rentable.',
      })
    if (answers.recent === 'no')
      recs.push({
        title: 'Refondre le design pour 2026',
        detail:
          'Un site qui semble daté entame immédiatement votre crédibilité. Le visiteur décide en moins de 3 secondes s’il vous fait confiance.',
      })
    if (answers.trust === 'no')
      recs.push({
        title: 'Renforcer la réassurance & la présentation',
        detail:
          'Équipe avec photos pro, expériences cumulées, cas types anonymisés, agréments officiels : autant d’éléments qui déclenchent la prise de contact.',
      })
    if (answers.seo === 'no')
      recs.push({
        title: 'Activer le SEO local',
        detail:
          '46 % des recherches Google ont une intention locale (source : Google). Fiche Google Business complète, pages dédiées par expertise, mots-clés « profession + ville ».',
      })
    if (answers.legal === 'no')
      recs.push({
        title: 'Mettre à jour les mentions légales et la conformité RGPD',
        detail:
          'Mentions complètes (SIRET, juridiction, agrément chambre pour les notaires), politique de confidentialité, hébergement UE, médiateur de la consommation. Indispensable pour éviter sanctions et refus d’agrément.',
      })
    return recs.slice(0, 3)
  }, [answers])

  const canGoStep2 =
    fullName.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(email) &&
    profession.length > 0 &&
    websiteUrl.trim().length > 3

  async function handleSubmit() {
    setSubmitting(true)
    try {
      const { ok, data } = await postForm('/api/audit', {
          fullName,
          email,
          phone: phone || undefined,
          profession,
          websiteUrl,
          speedOk: answers.speed === 'yes',
          mobileOk: answers.mobile === 'yes',
          rdvOk: answers.rdv === 'yes',
          recentOk: answers.recent === 'yes',
          trustOk: answers.trust === 'yes',
          seoOk: answers.seo === 'yes',
          legalOk: answers.legal === 'yes',
      })
      if (!ok) throw new Error(data?.error || 'Erreur inconnue')
      setResultId(data.id)
      setStep(3)
      // Scroll to top of result so user doesn't miss it.
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } catch (err: any) {
      toast.error(err?.message || "Erreur lors de l'envoi de l'audit")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 mb-10">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                step >= (n as Step)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground/40'
              }`}
            >
              {step > (n as Step) ? <CheckCircle2 className="h-4 w-4" /> : n}
            </div>
            {n < 3 && (
              <div
                className={`h-px w-8 md:w-12 ${step > (n as Step) ? 'bg-primary' : 'bg-border'}`}
              />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step-1"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-md border border-border bg-background p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
              Vos coordonnées & le site à auditer
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              Aucune inscription, aucune carte bancaire. Juste 7 questions pour évaluer la performance réelle de votre site.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nom complet *</Label>
                <div className="relative">
                  <User2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                  <Input
                    id="fullName"
                    placeholder="Maître Jean Dupont"
                    className="pl-10"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail professionnel *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@etude.notaires.fr"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone (optionnel)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                  <Input
                    id="phone"
                    placeholder="06 12 34 56 78"
                    className="pl-10"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">Votre profession *</Label>
                <Select value={profession} onValueChange={setProfession}>
                  <SelectTrigger id="profession">
                    <SelectValue placeholder="Sélectionner…" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROFESSIONS.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="website">URL de votre site actuel *</Label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
                  <Input
                    id="website"
                    placeholder="https://votre-etude.notaires.fr"
                    className="pl-10"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button
                size="lg"
                className="rounded-sm"
                disabled={!canGoStep2}
                onClick={() => setStep(2)}
              >
                Passer au diagnostic
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="rounded-md border border-border bg-background p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">
              Diagnostic en 7 questions
            </h2>
            <p className="mt-2 text-sm text-foreground/70">
              Répondez en toute honnêteté. Le score est immédiatement calculé à la fin, avec une pondération selon l’impact réel de chaque critère.
            </p>

            <div className="mt-8 space-y-5">
              {QUESTIONS.map((q, idx) => (
                <div
                  key={q.key}
                  className="rounded-md border border-border p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium text-foreground/70">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{q.label}</p>
                      <p className="mt-1 text-xs text-foreground/55">{q.help}</p>
                      <div className="mt-3 flex gap-2">
                        {(['yes', 'no'] as YesNo[]).map((opt) => {
                          const selected = answers[q.key] === opt
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() =>
                                setAnswers((a) => ({ ...a, [q.key]: opt }))
                              }
                              className={`px-4 py-1.5 text-sm rounded-sm border transition-colors ${
                                selected
                                  ? opt === 'yes'
                                    ? 'border-accent bg-accent/10 text-foreground'
                                    : 'border-foreground/40 bg-foreground/5 text-foreground'
                                  : 'border-border text-foreground/60 hover:border-foreground/30'
                              }`}
                            >
                              {opt === 'yes' ? 'Oui' : 'Non'}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between sm:items-center">
              <Button
                variant="outline"
                size="lg"
                className="rounded-sm"
                onClick={() => setStep(1)}
                disabled={submitting}
              >
                <ArrowLeft className="h-4 w-4" />
                Retour
              </Button>
              <Button
                size="lg"
                className="rounded-sm"
                onClick={handleSubmit}
                disabled={!allAnswered || submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Calcul du score…
                  </>
                ) : (
                  <>
                    Voir mon score
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="rounded-md border border-accent/30 bg-background p-6 md:p-10 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                Votre score WebReset
              </div>
              <div className="mt-6">
                <div className="font-serif text-7xl md:text-8xl text-foreground leading-none">
                  {score}
                  <span className="text-3xl md:text-4xl text-foreground/50">/100</span>
                </div>
                <p className="mt-3 font-serif text-2xl md:text-3xl italic text-accent">
                  {verdict.label}
                </p>
                <p className="mt-3 max-w-xl mx-auto text-foreground/70">
                  {verdict.sentence}
                </p>
              </div>
            </div>

            {recommendations.length > 0 && (
              <div className="rounded-md border border-border bg-background p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">
                  Vos 3 priorités
                </p>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl text-foreground">
                  Recommandations personnalisées
                </h3>
                <ul className="mt-6 space-y-5">
                  {recommendations.map((r, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{r.title}</p>
                        <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                          {r.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {recommendations.length === 0 && (
              <div className="rounded-md border border-border bg-background p-6 md:p-8 text-center">
                <CheckCircle2 className="mx-auto h-10 w-10 text-accent" />
                <h3 className="mt-4 font-serif text-2xl text-foreground">Bravo — votre site est solide.</h3>
                <p className="mt-2 text-foreground/70">
                  Quelques ajustements de finition peuvent encore améliorer la conversion. Discutons-en si vous le souhaitez.
                </p>
              </div>
            )}

            <div className="rounded-md border border-accent/30 bg-muted/40 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Et maintenant ?</p>
                  <p className="mt-2 text-sm text-foreground/70">
                    Arthur Parois, fondateur de WebReset, prend personnellement contact avec vous sous 24 h ouvrées pour un échange sans engagement et un audit détaillé envoyé par e-mail.
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Réserver mon appel offert
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-5 py-2.5 text-sm font-medium hover:border-accent/40 transition-colors"
                    >
                      Lire les analyses du Journal
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {resultId && (
              <p className="text-center text-xs text-foreground/40">
                Référence : {resultId.slice(0, 12)}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
