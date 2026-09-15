'use client'

import { motion } from 'framer-motion'
import { Mail, CalendarCheck, ShieldCheck } from 'lucide-react'
import { ContactForm } from './contact-form'
import { CONTACT } from '@/lib/images'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/40">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 grid gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl tracking-tight leading-tight">
            Parlons de votre cabinet, <span className="italic text-accent">sans engagement</span>.
          </h2>
          <p className="mt-5 text-foreground/70 leading-relaxed">
            Chaque projet commence par un échange de 20 minutes pour qualifier vos objectifs. Si le timing ou les besoins ne collent pas, je vous le dirai franchement.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-sm bg-primary/5 text-primary inline-flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Email direct</p>
                <a href={`mailto:${CONTACT.email}`} className="text-sm text-foreground/70 hover:text-accent transition-colors">{CONTACT.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-sm bg-primary/5 text-primary inline-flex items-center justify-center shrink-0">
                <CalendarCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Réponse rapide</p>
                <p className="text-sm text-foreground/70">Sous 24 h ouvrées, avec un premier retour honnête.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-sm bg-primary/5 text-primary inline-flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Confidentialité</p>
                <p className="text-sm text-foreground/70">Vos informations ne sortent jamais de mon studio. Aucun partage, aucune liste commerciale.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  )
}
