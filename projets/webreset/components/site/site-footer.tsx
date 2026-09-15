import Link from 'next/link'
import { Mail } from 'lucide-react'
import { CONTACT } from '@/lib/images'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-accent text-accent-foreground font-serif text-lg">W</span>
            <span className="font-serif text-xl tracking-tight">WebReset</span>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-sm">
            La refonte web qui transforme les cabinets de professions libérales en machines à rendez-vous qualifiés.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><a href="/#projets" className="hover:text-accent transition-colors">Projets</a></li>
            <li><a href="/#offre" className="hover:text-accent transition-colors">Offre</a></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Journal</Link></li>
            <li><Link href="/audit" className="hover:text-accent transition-colors">Audit gratuit</Link></li>
            <li><Link href="/avis" className="hover:text-accent transition-colors">Donner mon avis</Link></li>
            <li><a href="/#a-propos" className="hover:text-accent transition-colors">À propos d&apos;Arthur</a></li>
            <li><a href="/#contact" className="hover:text-accent transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Contact</p>
          <div className="mt-4 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-accent" />
            <a href={`mailto:${CONTACT.email}`} className="hover:text-accent transition-colors">{CONTACT.email}</a>
          </div>
          <p className="mt-3 text-sm text-primary-foreground/70">{CONTACT.founder}, fondateur</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8 py-5 text-xs text-primary-foreground/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} WebReset. Tous droits réservés.</p>
          <p>Conçu et développé avec rigueur.</p>
        </div>
      </div>
    </footer>
  )
}
