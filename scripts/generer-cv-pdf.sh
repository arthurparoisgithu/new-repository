#!/usr/bin/env bash
# ============================================================
#  Fabrique assets/cv/arthur-parois-cv.pdf à partir de cv.html.
#
#  cv.html est la source unique : on le rend dans un Chromium
#  sans interface, au format A4. Les polices Google sont d'abord
#  téléchargées et incrustées en base64 dans une copie temporaire,
#  pour que le rendu ne dépende d'aucun accès réseau au moment
#  de l'impression — et donc qu'il soit identique à chaque fois.
#
#  Usage :  ./scripts/generer-cv-pdf.sh
#  Prérequis : bash, curl, python3, et un Chromium/Chrome.
#              CHROME=/chemin/vers/chrome pour en imposer un.
# ============================================================
set -euo pipefail

racine="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_html="$racine/cv.html"
sortie="$racine/assets/cv/arthur-parois-cv.pdf"

[ -f "$source_html" ] || { echo "cv.html introuvable"; exit 1; }

# ---------- trouver un navigateur ----------

navigateur="${CHROME:-}"
if [ -z "$navigateur" ]; then
  for candidat in \
    /opt/pw-browsers/chromium \
    /opt/pw-browsers/chromium/chrome \
    "$(command -v chromium || true)" \
    "$(command -v chromium-browser || true)" \
    "$(command -v google-chrome || true)" \
    "$(command -v google-chrome-stable || true)" \
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  do
    [ -n "$candidat" ] && [ -x "$candidat" ] && { navigateur="$candidat"; break; }
  done
fi
[ -n "$navigateur" ] || { echo "Aucun Chromium trouvé. Renseignez CHROME=/chemin/vers/chrome"; exit 1; }

travail="$(mktemp -d)"
trap 'rm -rf "$travail"' EXIT

# ---------- incruster les polices ----------

ua="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36"
css_polices="$travail/polices.css"
feuille="$(python3 - "$source_html" <<'PY'
import io, re, sys
html = io.open(sys.argv[1], encoding="utf-8").read()
m = re.search(r'href="(https://fonts\.googleapis\.com/css2[^"]+)"', html)
print(m.group(1).replace("&amp;", "&") if m else "")
PY
)"

if [ -n "$feuille" ] && curl -sS --max-time 30 -A "$ua" "$feuille" -o "$css_polices"; then
  echo "Polices récupérées, incrustation…"
else
  echo "Polices distantes indisponibles : rendu avec les polices système."
  : > "$css_polices"
fi

python3 - "$source_html" "$css_polices" "$travail/cv-rendu.html" <<'PY'
import base64, io, re, subprocess, sys

source, css_path, sortie = sys.argv[1], sys.argv[2], sys.argv[3]
html = io.open(source, encoding="utf-8").read()
css = io.open(css_path, encoding="utf-8").read()

vus = {}
def incruster(m):
    url = m.group(1)
    if url not in vus:
        brut = subprocess.run(
            ["curl", "-sS", "--max-time", "30", url],
            capture_output=True, check=True,
        ).stdout
        vus[url] = "data:font/woff2;base64," + base64.b64encode(brut).decode()
    return "url(%s)" % vus[url]

if css.strip():
    css = re.sub(r"url\((https://fonts\.gstatic\.com/[^)]+)\)", incruster, css)

# on remplace les <link> vers Google Fonts par le CSS incrusté
html = re.sub(
    r'\s*<link rel="preconnect" href="https://fonts\.(googleapis|gstatic)\.com"[^>]*>', "", html
)
html = re.sub(
    r'\s*<link rel="stylesheet" href="https://fonts\.googleapis\.com/css2[^"]*">',
    ("\n<style>\n%s\n</style>" % css) if css.strip() else "",
    html,
)

# les images locales aussi : la copie temporaire vit hors du dépôt,
# les chemins relatifs n'y résoudraient pas
import mimetypes, os
racine = os.path.dirname(os.path.abspath(source))

def incruster_image(m):
    attr, chemin = m.group(1), m.group(2)
    fichier = os.path.join(racine, chemin)
    if not os.path.isfile(fichier):
        return m.group(0)
    type_mime = mimetypes.guess_type(fichier)[0] or "application/octet-stream"
    with open(fichier, "rb") as f:
        donnees = base64.b64encode(f.read()).decode()
    return '%s="data:%s;base64,%s"' % (attr, type_mime, donnees)

html, images = re.subn(r'(src)="(?!https?:|data:)([^"]+)"', incruster_image, html)

io.open(sortie, "w", encoding="utf-8").write(html)
print("%d fichier(s) de police et %d image(s) incrusté(s)" % (len(vus), images))
PY

# ---------- imprimer ----------

mkdir -p "$(dirname "$sortie")"

"$navigateur" \
  --headless \
  --no-sandbox \
  --disable-gpu \
  --disable-dev-shm-usage \
  --hide-scrollbars \
  --force-color-profile=srgb \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=10000 \
  --no-pdf-header-footer \
  --print-to-pdf="$sortie" \
  "file://$travail/cv-rendu.html" 2>/dev/null

[ -s "$sortie" ] || { echo "Échec : le PDF est vide"; exit 1; }
echo "PDF écrit : ${sortie#"$racine"/} ($(du -h "$sortie" | cut -f1))"
