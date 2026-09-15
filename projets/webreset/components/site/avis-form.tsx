'use client'

import { postForm } from '@/lib/forms'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Send, ExternalLink, ArrowRight, Lock, MessageSquare, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

type Step = 'rating' | 'positive' | 'negative' | 'done'

export function AvisForm() {
  const [step, setStep] = useState<Step>('rating')
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [cabinetName, setCabinetName] = useState('')
  const [publicComment, setPublicComment] = useState('')
  const [privateComment, setPrivateComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [resultIsPositive, setResultIsPositive] = useState(false)

  const submitReview = async (willPublish: boolean) => {
    if (!fullName.trim() || !email.trim()) {
      toast.error('Merci d’indiquer votre nom et votre email.')
      return
    }
    setSubmitting(true)
    try {
      const { ok, data: json } = await postForm('/api/avis', {
          fullName: fullName.trim(),
          email: email.trim(),
          cabinetName: cabinetName.trim(),
          rating,
          publicComment: rating >= 4 ? publicComment.trim() : '',
          privateComment: rating <= 3 ? privateComment.trim() : '',
          willPublish,
      })
      if (!ok || !json?.success) throw new Error(json?.message || 'Erreur')
      setResultIsPositive(rating >= 4)
      setStep('done')
      toast.success('Merci pour votre retour.')
    } catch (err) {
      console.error(err)
      toast.error('Erreur lors de l’envoi. Merci de réessayer ou écrire à arthur270.parois@gmail.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {/* === STEP 1: Star rating === */}
        {step === 'rating' && (
          <motion.div
            key="rating"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
          >
            <div>
              <p className="eyebrow text-accent">Étape 1 / 3</p>
              <h2 className="mt-3 font-serif tracking-mag text-4xl md:text-5xl leading-[1.05] text-foreground">
                Comment évalueriez-vous votre expérience
                <span className="block italic text-accent">avec WebReset ?</span>
              </h2>
              <p className="mt-5 text-foreground/65 max-w-xl leading-relaxed">
                Votre retour est lu personnellement par Arthur. Aucun intermédiaire, aucun automatisme commercial.
              </p>
            </div>

            <div
              className="flex flex-wrap items-center gap-2 md:gap-3"
              onMouseLeave={() => setHover(0)}
            >
              {[1, 2, 3, 4, 5].map((n) => {
                const active = (hover || rating) >= n
                return (
                  <button
                    key={n}
                    type="button"
                    aria-label={`${n} étoile${n > 1 ? 's' : ''}`}
                    onMouseEnter={() => setHover(n)}
                    onClick={() => setRating(n)}
                    className="p-2 transition-transform hover:scale-110"
                  >
                    <Star
                      className={
                        'h-12 w-12 md:h-14 md:w-14 transition-all ' +
                        (active ? 'fill-accent text-accent drop-shadow-[0_2px_8px_hsl(35_30%_57%/0.4)]' : 'text-foreground/20')
                      }
                    />
                  </button>
                )
              })}
              {(hover || rating) > 0 && (
                <span className="ml-3 font-serif italic text-2xl md:text-3xl text-foreground/70">
                  {hover || rating}/5
                </span>
              )}
            </div>

            <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
              <div>
                <Label htmlFor="fullName" className="eyebrow text-foreground/55">Votre nom</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Maître Lucie Dupont"
                  className="mt-2 h-12 rounded-sm bg-card border-border"
                />
              </div>
              <div>
                <Label htmlFor="email" className="eyebrow text-foreground/55">Votre email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="l.dupont@etude-dupont.fr"
                  className="mt-2 h-12 rounded-sm bg-card border-border"
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="cabinet" className="eyebrow text-foreground/55">Cabinet (facultatif)</Label>
                <Input
                  id="cabinet"
                  value={cabinetName}
                  onChange={(e) => setCabinetName(e.target.value)}
                  placeholder="Étude Dupont — Notaire à Nantes"
                  className="mt-2 h-12 rounded-sm bg-card border-border"
                />
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Button
                size="lg"
                disabled={!rating || !fullName || !email}
                onClick={() => setStep(rating >= 4 ? 'positive' : 'negative')}
                className="rounded-sm px-7 h-12"
              >
                Continuer
                <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-xs text-foreground/45 max-w-xs leading-relaxed">
                Vos coordonnées servent uniquement à vous renvoyer un mail de remerciement et à répondre si besoin.
              </p>
            </div>
          </motion.div>
        )}

        {/* === STEP 2A: Positive (4-5 stars) === */}
        {step === 'positive' && (
          <motion.div
            key="positive"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div>
              <p className="eyebrow text-accent">Étape 2 / 3 · Merci</p>
              <h2 className="mt-3 font-serif tracking-mag text-4xl md:text-5xl leading-[1.05] text-foreground">
                Votre <span className="italic text-accent">{rating}/5</span> me touche.
                <span className="block">Aidez-moi à grandir ?</span>
              </h2>
              <p className="mt-5 text-foreground/65 max-w-2xl leading-relaxed">
                Si vous êtes prêt à publier votre avis publiquement, vous aidez les prochains cabinets à me trouver. Sinon, laissez-moi simplement quelques mots ci-dessous — je les garde pour moi.
              </p>
            </div>

            <div>
              <Label htmlFor="publicComment" className="eyebrow text-foreground/55">Quelques mots sur votre expérience</Label>
              <Textarea
                id="publicComment"
                value={publicComment}
                onChange={(e) => setPublicComment(e.target.value)}
                rows={5}
                placeholder="Ce qui vous a marqué dans la collaboration, le résultat, les retours de vos clients…"
                className="mt-2 rounded-sm bg-card border-border"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <button
                type="button"
                disabled={submitting}
                onClick={() => submitReview(true)}
                className="group rounded-md bg-primary text-primary-foreground p-6 text-left hover:bg-primary/95 transition disabled:opacity-50"
              >
                <ExternalLink className="h-5 w-5 text-accent" />
                <p className="mt-4 font-serif text-xl tracking-tight">Je publie mon avis sur Google</p>
                <p className="mt-2 text-sm text-primary-foreground/65 leading-relaxed">
                  Vous recevrez le lien direct par email après envoi.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-accent text-sm">
                  Envoyer & recevoir le lien <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={() => submitReview(false)}
                className="group rounded-md border border-border bg-card p-6 text-left hover:border-accent/50 transition disabled:opacity-50"
              >
                <Send className="h-5 w-5 text-foreground/60" />
                <p className="mt-4 font-serif text-xl tracking-tight">Juste pour Arthur</p>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">
                  Votre retour reste privé, lu uniquement par moi.
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-foreground/70 text-sm">
                  Envoyer en privé <ArrowRight className="h-3.5 w-3.5" />
                </p>
              </button>
            </div>

            <p className="text-xs text-foreground/45 max-w-2xl leading-relaxed pt-2">
              <Lock className="inline h-3 w-3 mr-1" />
              Vous restez libre, dans tous les cas, de publier votre avis où vous le souhaitez. Aucun avis ne peut être supprimé ou bloqué par WebReset — c’est une exigence légale et éthique.
            </p>
          </motion.div>
        )}

        {/* === STEP 2B: Negative (1-3 stars) === */}
        {step === 'negative' && (
          <motion.div
            key="negative"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div>
              <p className="eyebrow text-accent">Étape 2 / 3 · J’écoute</p>
              <h2 className="mt-3 font-serif tracking-mag text-4xl md:text-5xl leading-[1.05] text-foreground">
                <span className="italic text-accent">{rating}/5.</span>
                <span className="block">Quelque chose n’a pas été.</span>
              </h2>
              <p className="mt-5 text-foreground/65 max-w-2xl leading-relaxed">
                Je préfère l’entendre directement, en privé, plutôt que de le découvrir trop tard. Dites-moi ce qui n’a pas fonctionné — je vous contacte sous 48 h ouvrées pour en parler honnêtement.
              </p>
            </div>

            <div>
              <Label htmlFor="privateComment" className="eyebrow text-foreground/55">Votre retour détaillé (privé)</Label>
              <Textarea
                id="privateComment"
                value={privateComment}
                onChange={(e) => setPrivateComment(e.target.value)}
                rows={6}
                placeholder="Ce qui aurait dû être mieux, ce qui vous a manqué, ce que je dois corriger pour la prochaine fois…"
                className="mt-2 rounded-sm bg-card border-border"
              />
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Button
                size="lg"
                disabled={submitting || !privateComment.trim()}
                onClick={() => submitReview(false)}
                className="rounded-sm px-7 h-12"
              >
                <Lock className="h-4 w-4" />
                Envoyer en privé à Arthur
              </Button>
              <p className="text-xs text-foreground/45 max-w-md leading-relaxed">
                Vous restez bien sûr libre de publier votre avis sur Google ou ailleurs. Cet espace est juste pour me donner une chance d’entendre, comprendre et corriger avant.
              </p>
            </div>
          </motion.div>
        )}

        {/* === STEP 3: Done === */}
        {step === 'done' && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 max-w-2xl"
          >
            <CheckCircle2 className="h-16 w-16 text-accent" strokeWidth={1.2} />
            <div>
              <p className="eyebrow text-accent">Étape 3 / 3 · Reçu</p>
              <h2 className="mt-3 font-serif tracking-mag text-4xl md:text-5xl leading-[1.05] text-foreground">
                {resultIsPositive ? (
                  <>Merci, <span className="italic text-accent">sincèrement</span>.</>
                ) : (
                  <>Bien <span className="italic text-accent">reçu</span>.</>
                )}
              </h2>
            </div>
            <p className="text-foreground/70 leading-relaxed">
              {resultIsPositive
                ? 'Vous allez recevoir un mail de ma part avec, le cas échéant, le lien direct pour publier sur Google. C’est une aide précieuse pour faire connaître WebReset — et je vous en suis reconnaissant.'
                : 'Votre retour est arrivé dans ma boîte personnelle. Je vous écris sous 48 h ouvrées pour en parler. C’est ma priorité absolue.'}
            </p>
            <div className="flex items-center gap-3 pt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 font-serif italic text-lg text-foreground/85 hover:text-foreground border-b border-accent/60 hover:border-accent pb-0.5 transition"
              >
                Retour à l&apos;accueil
                <ArrowRight className="h-4 w-4 text-accent" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
