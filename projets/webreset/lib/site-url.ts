/** Adresses figées à la construction (voir next.config.js). */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://webreset.fr'
).replace(/\/$/, '')

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** Préfixe un fichier de `public/` par le sous-chemin du site. */
export const asset = (p: string) => (p.startsWith('/') ? `${BASE_PATH}${p}` : p)
