import Link from 'next/link'
import { Stethoscope, MapPin, Phone, Clock, Calendar } from 'lucide-react'
import { SITE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="container-page py-14 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </span>
            <span className="font-display font-bold tracking-tight text-base">
              Thibaud Chiffoleau
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-background/70 max-w-sm">
            Masseur-Kinésithérapeute D.E. — spécialiste épaule, lombalgie et névralgies
            au cabinet KSNB à Nantes Chantenay. Approche basée sur les preuves et thérapie
            active.
          </p>
          <a
            href={SITE.doctolib}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
          >
            <Calendar className="h-4 w-4" />
            Prendre rendez-vous sur Doctolib
          </a>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-background/90">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-background/70">
            <li><Link href="/specialites" className="hover:text-background transition-colors">Spécialités</Link></li>
            <li><Link href="/a-propos" className="hover:text-background transition-colors">À propos</Link></li>
            <li><Link href="/cabinet" className="hover:text-background transition-colors">Le cabinet</Link></li>
            <li><Link href="/conseils" className="hover:text-background transition-colors">Conseils</Link></li>
            <li><Link href="/tarifs" className="hover:text-background transition-colors">Tarifs</Link></li>
            <li><Link href="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div className="md:col-span-5 space-y-4 text-sm text-background/80">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-background/90">
            Cabinet KSNB
          </h3>
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" />
            <div>
              <div>{SITE.address.street}</div>
              <div>{SITE.address.postalCode} {SITE.address.city} — quartier {SITE.address.district}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 mt-0.5 text-primary shrink-0" />
            <a href={`tel:${SITE.phoneRaw}`} className="hover:text-background">
              {SITE.phone}
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 mt-0.5 text-primary shrink-0" />
            <div className="space-y-0.5">
              <div>Lun. — Jeu. : 8h00 — 19h30</div>
              <div>Vendredi : 8h00 — 19h00</div>
              <div>Samedi : sur rendez-vous</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-background/60">
          <span>
            © {new Date().getFullYear()} Thibaud Chiffoleau — RPPS {SITE.rpps} — MKDE 2023 (IFM3R)
          </span>
          <span className="text-background/50">
            Conventionné secteur 1 • Carte Vitale • Tiers payant
          </span>
        </div>
      </div>
    </footer>
  )
}
