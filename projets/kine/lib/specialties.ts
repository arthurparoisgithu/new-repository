import { SITE } from './site'

export type Specialty = {
  slug: string
  href: string
  title: string
  short: string
  description: string
  image: string
  imageAlt: string
  icon: 'shoulder' | 'spine' | 'nerve' | 'sport'
  conditions: string[]
}

export const SPECIALTIES: Specialty[] = [
  {
    slug: 'epaule',
    href: '/specialites/epaule',
    title: "Pathologies de l'épaule",
    short: "Épaule douloureuse, instable ou raide ?",
    description:
      "Tendinopathies, capsulite, conflit sous-acromial, instabilité. Bilan complet et rééducation basée sur les preuves.",
    image: SITE.images.shoulder,
    imageAlt: "Anatomie de l'épaule et de la coiffe des rotateurs",
    icon: 'shoulder',
    conditions: [
      'Tendinopathies de la coiffe des rotateurs',
      'Conflit sous-acromial',
      'Capsulite rétractile (épaule gelée)',
      'Instabilité gléno-humérale',
      'Tendinopathie calcifiante',
      'Suite de chirurgie (acromioplastie, coiffe, prothese)',
    ],
  },
  {
    slug: 'lombalgie',
    href: '/specialites/lombalgie',
    title: 'Rachis lombaire & lombalgie',
    short: 'Mal de dos chronique ou aigu ?',
    description:
      "Lombalgie, hernie discale, sciatique, cruralgie. Méthode McKenzie, thérapie active et exercices personnalisés.",
    image: SITE.images.spine,
    imageAlt: 'Anatomie de la colonne lombaire et des disques',
    icon: 'spine',
    conditions: [
      'Lombalgie aiguë et chronique',
      'Sciatique et cruralgie',
      'Hernie discale lombaire',
      'Discopathie dégénérative',
      'Spondylolisthésis',
      'Méthode McKenzie (MDT)',
    ],
  },
  {
    slug: 'nevralgies',
    href: '/specialites/nevralgies',
    title: 'Névralgies & neuropathies',
    short: 'Douleurs nerveuses, fourmillements ?',
    description:
      "Sciatique, névralgie cervicobrachiale, canal carpien, défilé thoracique. Thérapie manuelle neuro-orthopédique.",
    image: SITE.images.nerve,
    imageAlt: 'Illustration anatomique du trajet du nerf sciatique',
    icon: 'nerve',
    conditions: [
      'Sciatique et cruralgie',
      'Névralgie cervicobrachiale (NCB)',
      'Syndrome du canal carpien',
      'Syndrome du défilé thoraco-brachial',
      'Névralgies post-traumatiques',
      'Mobilisations neurodynamiques',
    ],
  },
  {
    slug: 'kine-sport',
    href: '/specialites/kine-sport',
    title: 'Kiné du sport & ré-athlétisation',
    short: 'Préparer le retour au sport sans rechuter',
    description:
      "Suivi du sportif, ré-athlétisation post-blessure, prévention, retour au sport en confiance avec tests objectifs.",
    image: SITE.images.sportsRehab,
    imageAlt: 'Sportif en séance de ré-athlétisation avec son kinésithérapeute',
    icon: 'sport',
    conditions: [
      'Entorses (cheville, genou)',
      'Suite de ligamentoplastie (LCA, LCP)',
      'Lésions musculaires',
      'Tendinopathies du sportif',
      'Ré-athlétisation et retour au sport',
      'Bilan préventif (runner, footballeur)',
    ],
  },
]
