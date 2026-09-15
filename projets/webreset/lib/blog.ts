// Centralised blog content & metadata.
// Articles are written as plain TSX components for simplicity and SEO.

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  description: string
  excerpt: string
  category: string
  readingTime: string
  publishedAt: string // ISO
  updatedAt: string // ISO
  keywords: string[]
}

export const POSTS: BlogPost[] = [
  {
    slug: 'charte-csn-2024-obligations-site-notaire',
    title: 'Charte CSN 2024 : les 5 obligations à connaître pour votre site notaire',
    metaTitle:
      'Charte CSN 2024 : 5 obligations site internet notaire | WebReset',
    description:
      "Décret 2023-1297 et arrêté du 29 janvier 2024 : tout ce qu'un notaire doit savoir avant de refondre son site web. Domaine, logo, agrément, publicité, mentions légales — guide complet 2024.",
    excerpt:
      "Décret 2023-1297, arrêté du 29 janvier 2024, sanctions jusqu'à 5 % du CA : le guide complet pour rester conforme tout en convertissant.",
    category: 'Réglementation',
    readingTime: '7 min',
    publishedAt: '2026-04-15T09:00:00.000Z',
    updatedAt: '2026-04-22T09:00:00.000Z',
    keywords: [
      'charte CSN site notaire',
      'obligations site internet notaire 2024',
      'décret 2023-1297',
      'arrêté 29 janvier 2024 notaire',
      'déontologie communication notaire',
      'site notaire conforme',
    ],
  },
  {
    slug: 'prix-refonte-site-notaire-2026',
    title: 'Site internet de notaire en 2026 : combien ça coûte vraiment ?',
    metaTitle:
      'Prix refonte site notaire 2026 : tarifs réels et coûts cachés | WebReset',
    description:
      "Combien coûte la refonte d'un site notaire en 2026 ? Comparatif des fourchettes (700 €, 2 000 €, 6 000 €+), coûts cachés, ROI réel et grille de décision pour ne pas se tromper.",
    excerpt:
      "De 700 € à 8 000 € : pourquoi le moins cher coûte souvent le plus cher. Décryptage des fourchettes réelles et des coûts cachés.",
    category: 'Stratégie',
    readingTime: '8 min',
    publishedAt: '2026-04-08T09:00:00.000Z',
    updatedAt: '2026-04-20T09:00:00.000Z',
    keywords: [
      'prix site notaire',
      'tarif refonte site notaire',
      'coût site internet notaire',
      'budget site web étude notariale',
      'devis refonte site notaire',
    ],
  },
  {
    slug: 'site-notaire-conversion-prise-rendez-vous',
    title: "Les 7 fuites silencieuses qui empêchent un site de notaire de convertir",
    metaTitle:
      'Site notaire & conversion : 7 leviers à activer en 2026 | WebReset',
    description:
      "53 % des visiteurs mobiles abandonnent au-delà de 3 secondes (Google). Les 7 erreurs qui font fuir les clients d'un site notaire — et les correctifs concrets pour transformer votre site en machine à prise de rendez-vous.",
    excerpt:
      'Mobile lent, absence de prise de RDV, copywriting institutionnel : les 7 fuites silencieuses qui ruinent vos conversions (données Google sourcées).',
    category: 'Conversion',
    readingTime: '9 min',
    publishedAt: '2026-03-28T09:00:00.000Z',
    updatedAt: '2026-04-18T09:00:00.000Z',
    keywords: [
      'site notaire conversion',
      'prise de rendez-vous notaire en ligne',
      'site notaire performant',
      'site notaire mobile',
      'taux de conversion site notaire',
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug)
}
