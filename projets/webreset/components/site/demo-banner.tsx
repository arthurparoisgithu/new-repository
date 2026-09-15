import { CONTACT_EMAIL, STATIC_DEMO } from '@/lib/forms'

/**
 * Bandeau affiché uniquement sur la version de démonstration statique.
 * Il évite qu'un visiteur croie avoir envoyé un message.
 */
export function DemoBanner() {
  if (!STATIC_DEMO) return null
  return (
    <div className="bg-foreground text-background">
      <p className="mx-auto max-w-[1200px] px-5 py-2 text-center text-[13px] leading-snug md:px-8">
        Version de démonstration — les formulaires de cette page ne transmettent rien.
        Pour un échange réel, écrivez à{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </div>
  )
}
