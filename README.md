# Dossier Arthur Parois — candidature alternance

Site statique qui regroupe mes travaux en cinq planches : parcours, sites web,
n8n, analyse parlementaire, et une démonstration de workflow multi-agents.

Aucune dépendance, aucune étape de build : ouvrez `index.html`, ou servez le
dossier tel quel (GitHub Pages, Netlify, n'importe quel hébergeur statique).

```
index.html                              les cinq planches (onglets côté client)
assets/css/dossier.css                  feuille de style unique, thèmes clair et sombre
assets/js/dossier.js                    onglets, thème, chargement différé des pièces jointes
assets/js/audit-agents.js               rejeu du workflow d'agents + les trois dossiers figés
assets/n8n/webreset-audit-agents.json   le workflow n8n, importable tel quel (17 nœuds)
assets/img/                             visuels des projets kiné et Myrtille Sauvage
demos/n8n-fonctions.html                cours interactif « Les fonctions n8n, en pratique »
demos/lois-votes.html                   « Votes & Contradictions », XVIIe législature
```

## Le workflow n8n

`assets/n8n/webreset-audit-agents.json` s'importe dans un canevas n8n vide.
Il attend trois identifiants : un modèle de chat pour les agents, un compte de
messagerie pour l'alerte interne, une base Postgres pour l'archivage.

Chaîne : webhook → normalisation → récupération de la page → extraction de
18 signaux mesurables → trois agents spécialisés en parallèle (visibilité,
conversion, conformité) → fusion → agent superviseur → aiguillage sur le score
→ alerte + archivage → réponse.

La console de la planche 05 **rejoue** des exécutions capturées, hors ligne :
elle ne fait aucun appel réseau, et les cabinets des trois dossiers de
démonstration sont anonymisés.

## Publier sur GitHub Pages

Réglages du dépôt → Pages → *Deploy from a branch* → branche courante, dossier `/`.
