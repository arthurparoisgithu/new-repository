#!/usr/bin/env bash
# Reconstruit la branche « gh-pages » à partir de la branche de travail.
#
# GitHub Pages sert cette branche telle quelle : elle ne contient que ce qui
# est réellement chargé par le navigateur — pas les sources des projets
# clients, qui vivent dans projets/ et se déploient depuis leurs propres
# dépôts.
#
# Usage : bash scripts/publier-le-dossier.sh
set -euo pipefail

RACINE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BRANCHE_SOURCE="$(git -C "$RACINE" rev-parse --abbrev-ref HEAD)"
ATELIER="$(mktemp -d)"   # les fichiers a servir
SORTIE="$(mktemp -d)"    # la copie de travail de la branche gh-pages
trap 'rm -rf "$ATELIER" "$SORTIE"' EXIT

cd "$RACINE"

if [ -n "$(git status --porcelain)" ]; then
  echo "Des modifications ne sont pas encore commitées. On les commite d'abord." >&2
  exit 1
fi

# Le CV est engendré : on le régénère avant de publier, pour qu'il ne puisse
# pas diverger de l'article .cv de index.html.
python3 scripts/construire-cv.py --pdf

echo "→ collecte des fichiers servis"
for chemin in index.html cv.html assets demos; do
  mkdir -p "$ATELIER/$(dirname "$chemin")"
  cp -r "$chemin" "$ATELIER/$(dirname "$chemin")/"
done
touch "$ATELIER/.nojekyll"

cat > "$ATELIER/README.md" <<'MD'
# Dossier Arthur Parois — branche de publication

Cette branche ne contient que le site, servi tel quel par GitHub Pages.
Le code et les sources des projets sont sur la branche de travail.

Ne pas éditer ici : reconstruire avec `scripts/publier-le-dossier.sh`.
MD

echo "→ écriture de la branche gh-pages"
git fetch origin gh-pages --quiet || true
rmdir "$SORTIE"
git worktree add --quiet --force "$SORTIE" -B gh-pages origin/gh-pages 2>/dev/null \
  || git worktree add --quiet --force "$SORTIE" -B gh-pages

find "$SORTIE" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -r "$ATELIER"/. "$SORTIE/"

cd "$SORTIE"
git add -A
if git diff --cached --quiet; then
  echo "Rien de nouveau à publier."
else
  git commit -q -m "Publie le dossier depuis $BRANCHE_SOURCE ($(git -C "$RACINE" rev-parse --short HEAD))"
  echo "→ envoi"
  for essai in 1 2 3 4; do
    git push -u origin gh-pages && break || sleep $((2 ** essai))
  done
fi

cd "$RACINE"
git worktree remove --force "$SORTIE"
echo "Publié."
