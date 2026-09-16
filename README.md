# Dossier Arthur Parois — candidature alternance

Site statique qui regroupe mes travaux en quatre planches : parcours et CV,
sites web, n8n, et une démonstration de workflow multi-agents.

Aucune dépendance, aucune étape de build : ouvrez `index.html`, ou servez le
dossier tel quel (GitHub Pages, Netlify, n'importe quel hébergeur statique).

```
index.html                              les quatre planches (onglets côté client)
assets/css/dossier.css                  feuille de style unique, thèmes clair et sombre
assets/js/dossier.js                    onglets, thème, chargement différé des pièces jointes
assets/js/audit-agents.js               rejeu du workflow d'agents + les trois dossiers figés
assets/n8n/webreset-audit-agents.json   le workflow n8n, importable tel quel (17 nœuds)
assets/img/                             visuels des projets kiné et Myrtille Sauvage
demos/n8n-fonctions.html                cours interactif « Les fonctions n8n, en pratique »
```

## Le workflow n8n

`assets/n8n/webreset-audit-agents.json` s'importe dans un canevas n8n vide.
Il attend trois identifiants : un modèle de chat pour les agents, un compte de
messagerie pour l'alerte interne, une base Postgres pour l'archivage.

Chaîne : webhook → normalisation → récupération de la page → extraction de
18 signaux mesurables → trois agents spécialisés en parallèle (visibilité,
conversion, conformité) → fusion → agent superviseur → aiguillage sur le score
→ alerte + archivage → réponse.

La console de la planche 04 **rejoue** des exécutions capturées, hors ligne :
elle ne fait aucun appel réseau, et les cabinets des trois dossiers de
démonstration sont anonymisés.

## Publier sur GitHub Pages

Réglages du dépôt → Pages → *Deploy from a branch* → branche courante, dossier `/`.

## Les deux sites clients

`projets/kine` et `projets/webreset` contiennent les applications Next.js,
préparées pour l'export statique et prêtes à être publiées sur GitHub Pages.

```bash
./scripts/publier-les-sites.sh
```

Le script pousse `projets/kine` vers `arthurparoisgithu/kin-` et
`projets/webreset` vers `arthurparoisgithu/web-rest`. Chaque dépôt embarque son
propre workflow GitHub Actions : il construit l'export statique et le publie.

- https://arthurparoisgithu.github.io/kin-/
- https://arthurparoisgithu.github.io/web-rest/

## Publier le dossier lui-même

La branche `gh-pages` de ce dépôt contient le dossier prêt à être servi.
Pour le mettre en ligne : rendre le dépôt public, puis
Settings → Pages → Source : *Deploy from a branch* → `gh-pages` / `(root)`.

Adresse obtenue : https://arthurparoisgithu.github.io/new-repository/
