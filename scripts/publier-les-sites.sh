#!/usr/bin/env bash
#
# Pousse les deux sites de projets/ vers leurs dépôts GitHub.
#
# Chaque dépôt contient déjà le workflow .github/workflows/deploy.yml : dès que
# le push arrive, GitHub Actions installe les dépendances, construit l'export
# statique et publie sur Pages. Rien d'autre à configurer.
#
#   ./scripts/publier-les-sites.sh
#
set -euo pipefail

COMPTE="${COMPTE:-arthurparoisgithu}"
# Surchargeable pour tester le script sans toucher à GitHub.
DEPOT_BASE="${DEPOT_BASE:-https://github.com/$COMPTE}"
RACINE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

publier () {
  local dossier="$1" depot="$2" titre="$3"
  local source="$RACINE/projets/$dossier"

  [ -d "$source" ] || { echo "✗ introuvable : $source" >&2; return 1; }

  local travail
  travail="$(mktemp -d)"
  trap 'rm -rf "$travail"' RETURN

  echo "→ $titre  ($COMPTE/$depot)"
  cp -R "$source/." "$travail/"
  rm -rf "$travail/node_modules" "$travail/.next" "$travail/out" "$travail/.git"

  git -C "$travail" init -q -b main
  git -C "$travail" add -A
  git -C "$travail" commit -q -m "$titre — version export statique pour GitHub Pages"
  git -C "$travail" remote add origin "$DEPOT_BASE/$depot.git"

  # --force : le dépôt de destination est un miroir de projets/, pas un historique.
  git -C "$travail" push -u --force origin main

  echo "   publié · https://$COMPTE.github.io/$depot/"
  echo "   suivi du déploiement : https://github.com/$COMPTE/$depot/actions"
}

publier kine     "kin-"     "Thibaud Chiffoleau — kinésithérapeute"
publier webreset "web-rest" "WebReset"

cat <<'FIN'

Les deux workflows tournent maintenant sur GitHub (2 à 4 minutes).
Si une publication échoue avec « Pages n'est pas activé » : ouvrez
Settings → Pages du dépôt, choisissez « GitHub Actions » comme source,
puis relancez le workflow depuis l'onglet Actions.
FIN
