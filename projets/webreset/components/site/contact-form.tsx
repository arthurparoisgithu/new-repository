'use client'

import { postForm } from '@/lib/forms'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Mail, User, Phone, Globe, MessageSquare, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CONTACT } from '@/lib/images'

interface FormState {
  fullName: string
  email: string
  phone: string
  profession: string
  website: string
  budget: string
  message: string
}

const initial: FormState = {
  fullName: '',
  email: '',
  phone: '',
  profession: '',
  website: '',
  budget: '',
  message: '',
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial)
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const update = (k: keyof FormState, v: string) => setValues((s) => ({ ...s, [k]: v }))

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!values?.fullName?.trim() || !values?.email?.trim() || !values?.message?.trim()) {
      toast.error('Merci de renseigner votre nom, email et message.')
      return
    }
    try {
      setSubmitting(true)
      const res = await postForm('/api/contact', values ?? {})
      if (!res.ok) throw new Error('fail')
      setSent(true)
      setValues(initial)
      toast.success('Votre message a bien été envoyé. Arthur vous répondra sous 24 h ouvrées.')
    } catch {
      toast.error("L'envoi a échoué. Réessayez ou écrivez directement à arthur270.parois@gmail.com.")
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg bg-card p-10 text-center shadow-[0_4px_10px_-2px_rgb(15_30_61_/_0.08)]"
      >
        <div className="mx-auto h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-serif text-2xl tracking-tight">Message bien reçu.</h3>
        <p className="mt-2 text-foreground/70">
          Arthur revient vers vous sous 24 h ouvrées avec un premier retour et, si pertinent, un créneau pour un appel de 20 minutes.
        </p>
        <Button variant="outline" className="mt-6 rounded-sm" onClick={() => setSent(false)}>Envoyer un autre message</Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg bg-card p-6 md:p-8 shadow-[0_4px_10px_-2px_rgb(15_30_61_/_0.08)] space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Nom complet *</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input id="fullName" value={values?.fullName ?? ''} onChange={(e) => update('fullName', e.target.value ?? '')} placeholder="Me Jean Dupont" className="pl-10" autoComplete="name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email professionnel *</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input id="email" type="email" value={values?.email ?? ''} onChange={(e) => update('email', e.target.value ?? '')} placeholder="contact@cabinet.fr" className="pl-10" autoComplete="email" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input id="phone" value={values?.phone ?? ''} onChange={(e) => update('phone', e.target.value ?? '')} placeholder="06 00 00 00 00" className="pl-10" autoComplete="tel" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="profession">Profession</Label>
          <Select value={values?.profession ?? ''} onValueChange={(v) => update('profession', v ?? '')}>
            <SelectTrigger id="profession">
              <SelectValue placeholder="Sélectionnez votre profession" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="notaire">Notaire</SelectItem>
              <SelectItem value="avocat">Avocat</SelectItem>
              <SelectItem value="cgp">Conseiller en gestion de patrimoine</SelectItem>
              <SelectItem value="expert-comptable">Expert-comptable</SelectItem>
              <SelectItem value="architecte">Architecte</SelectItem>
              <SelectItem value="autre">Autre profession libérale</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="website">Site actuel</Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/50" />
            <Input id="website" value={values?.website ?? ''} onChange={(e) => update('website', e.target.value ?? '')} placeholder="https://..." className="pl-10" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget envisagé</Label>
          <Select value={values?.budget ?? ''} onValueChange={(v) => update('budget', v ?? '')}>
            <SelectTrigger id="budget">
              <SelectValue placeholder="Indiquez une fourchette" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2000-3500">2 000 — 3 500 € HT</SelectItem>
              <SelectItem value="3500-6000">3 500 — 6 000 € HT</SelectItem>
              <SelectItem value="6000+">Plus de 6 000 € HT</SelectItem>
              <SelectItem value="a-definir">À définir ensemble</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Votre message *</Label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-foreground/50" />
          <Textarea
            id="message"
            value={values?.message ?? ''}
            onChange={(e) => update('message', e.target.value ?? '')}
            placeholder="Décrivez votre activité en 2–3 phrases et ce que vous attendez d’une refonte."
            className="pl-10 min-h-[130px]"
          />
        </div>
      </div>

      <p className="text-xs text-foreground/55">
        Vos informations sont conservées uniquement pour répondre à votre demande. Aucun partage avec un tiers. Vous pouvez demander leur suppression à tout moment.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <Button type="submit" size="lg" className="rounded-sm w-full sm:w-auto" disabled={submitting}>
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {submitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
        </Button>
        <a href={`mailto:${CONTACT.email}`} className="text-sm text-foreground/70 hover:text-accent transition-colors">
          Ou écrivez à {CONTACT.email}
        </a>
      </div>
    </form>
  )
}
