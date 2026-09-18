# Refonte visuelle du générateur de jeux

Les deux fichiers de ce dossier sont destinés au dépôt
`arthurparoisgithu/animation` :

| fichier ici      | destination dans le dépôt `animation` |
| ---------------- | ------------------------------------- |
| `style.css`      | `app/static/style.css`                |
| `accueil.html`   | `app/templates/accueil.html`          |

Ils ne sont pas utilisés par le dossier lui-même : ils transitent par ce
dépôt parce que c'est le seul auquel la session d'édition a accès en
écriture.

## Ce qui change

L'interface de travail passe du sombre au clair : fond crème, cartes
blanches ombrées, boutons arrondis, une accroche centrée en haut de
page. Chaque format reçoit sa couleur et sa pastille emoji, attribuées
en CSS par `[data-code="…"]`, pour que le JavaScript qui reconstruit les
cartes après un filtrage n'ait rien à savoir de la décoration.

Le mode projection reste sombre : il est projeté dans une salle, c'est
une contrainte d'usage et non un goût. Ses variables sont simplement
redéfinies sous `body.projection`.

Les dix teintes sont assez profondes pour que le texte blanc passe le
seuil AA. Rapport de contraste le plus faible mesuré : 5,0.

Aucun fichier Python, aucune configuration, aucune clé n'est touchée.
