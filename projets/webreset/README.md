# WebReset — refonte de sites pour professions libérales

Site de l'agence : manifeste, offre pilote, méthode, conformité ordinale,
études de cas avant/après, journal et audit gratuit.

**En ligne :** https://arthurparoisgithu.github.io/web-rest/

## Pile technique

Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion.
Page unique à ancres + trois sous-routes (`/blog`, `/audit`, `/avis`),
comparateurs avant/après au curseur, données structurées JSON-LD.

## Ce que cette version change par rapport à l'originale

L'application complète écrit dans Postgres via trois routes API — demandes de
contact, demandes d'audit, avis clients — et envoie des notifications par
courriel. GitHub Pages ne sert que des fichiers : cette version est un
**export statique**, sans serveur ni base.

Les routes API ont donc été retirées, et les formulaires passent par
`lib/forms.ts` : en mode démonstration (`NEXT_PUBLIC_STATIC_DEMO=1`) ils se
parcourent de bout en bout mais **n'envoient rien**, et un bandeau le dit en
haut de chaque page. Un formulaire qui échoue en silence serait pire
qu'inutile.

`sitemap.ts` et `robots.ts` ne lisent plus les en-têtes de la requête ;
l'adresse publique vient de `NEXT_PUBLIC_SITE_URL` (`lib/site-url.ts`).

> Le module d'avis n'empêche jamais la publication d'un avis négatif. Une note
> basse mène au canal privé, mais la page écrit noir sur blanc que l'auteur
> reste libre de publier ailleurs. Cette règle n'est pas négociable.

## Développer

```bash
npm install
npm run dev
```

## Construire comme en production

```bash
NEXT_OUTPUT_MODE=export \
NEXT_PUBLIC_BASE_PATH=/web-rest \
NEXT_PUBLIC_SITE_URL=https://arthurparoisgithu.github.io/web-rest \
NEXT_PUBLIC_STATIC_DEMO=1 \
npm run build          # produit out/
```

Sur un domaine dédié (`webreset.fr`) avec un vrai serveur, laissez
`NEXT_OUTPUT_MODE` et `NEXT_PUBLIC_STATIC_DEMO` vides et restaurez les routes
API et Prisma.

## Déploiement

`.github/workflows/deploy.yml` construit et publie sur GitHub Pages à chaque
push sur `main`.
