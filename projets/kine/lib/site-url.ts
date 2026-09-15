/**
 * Adresses figées à la construction.
 *
 * En export statique il n'y a pas de requête entrante : on ne peut pas lire
 * l'hôte dans les en-têtes. Tout vient donc de l'environnement de build.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://thibaud-chiffoleau-kine.com'
).replace(/\/$/, '')

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || ''

/**
 * Préfixe un fichier de `public/` par le sous-chemin du site.
 *
 * `next/image` en mode `unoptimized` renvoie le `src` tel quel, sans y ajouter
 * le `basePath` : sur une GitHub Page de projet, `/images/x.jpg` pointerait à
 * la racine du domaine et renverrait 404. Cette fonction corrige ce cas.
 */
export const asset = (p: string) => (p.startsWith('/') ? `${BASE_PATH}${p}` : p)
