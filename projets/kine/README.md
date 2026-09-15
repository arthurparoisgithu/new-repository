# Thibaud Chiffoleau — masseur-kinésithérapeute à Nantes

Site du cabinet KSNB (Kiné Sport Nantes Beaulieu) : spécialités par pathologie,
conseils, FAQ, tarifs, accès et prise de rendez-vous.

**En ligne :** https://arthurparoisgithu.github.io/kin-/

## Pile technique

Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, MapLibre.
Quinze routes, huit articles en route dynamique, données structurées JSON-LD
par page (`Physician`, `LocalBusiness`, `FAQPage`, `Article`), `sitemap.ts` et
`robots.ts` générés.

## Ce que cette version change par rapport à l'originale

La version d'origine lit son contenu éditorial dans Postgres via Prisma.
GitHub Pages ne sert que des fichiers : cette version est donc construite en
**export statique**, et trois choses en découlent.

1. Les articles, avis et questions fréquentes sont passés de la base à
   `lib/content.ts`. Le contenu est identique ; seule la source change.
2. `sitemap.ts` et `robots.ts` ne lisent plus les en-têtes de la requête —
   il n'y en a pas au moment de la construction. L'adresse publique vient de
   `NEXT_PUBLIC_SITE_URL` (`lib/site-url.ts`).
3. Les visuels d'articles et les planches anatomiques restent servis depuis le
   CDN du projet. Les fichiers de `public/images/` livrés à l'origine étaient
   des images de banque sous licence, avec filigrane visible : ils ont été
   retirés. Ne les réintroduisez pas.

Les photos du praticien et des deux salles du cabinet, elles, sont de vraies
photos et vivent dans `public/images/`.

> Les avis affichés sont de **vrais avis Google publics** du cabinet, prénoms
> abrégés par respect de la vie privée. Ne jamais en inventer.

## Développer

```bash
npm install
npm run dev
```

## Construire comme en production

```bash
NEXT_OUTPUT_MODE=export \
NEXT_PUBLIC_BASE_PATH=/kin- \
NEXT_PUBLIC_SITE_URL=https://arthurparoisgithu.github.io/kin- \
npm run build          # produit out/
```

`NEXT_PUBLIC_BASE_PATH` porte le sous-chemin du dépôt. Sur un domaine dédié
(`thibaud-chiffoleau-kine.com`), laissez-le vide.

## Déploiement

`.github/workflows/deploy.yml` construit et publie sur GitHub Pages à chaque
push sur `main`. Le sous-chemin et l'URL sont déduits du dépôt par
`actions/configure-pages`, il n'y a rien à renseigner à la main.
