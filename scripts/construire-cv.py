#!/usr/bin/env python3
"""Fabrique la version imprimable du CV et son PDF.

Le CV n'existe qu'à UN seul endroit : l'article `.cv` de index.html.
Ce script l'en extrait et produit deux fichiers, pour qu'aucune copie du
contenu n'ait à être tenue à jour à la main :

  cv.html                        page autonome, imprimable (Ctrl+P) et partageable
  assets/cv/CV-Arthur-Parois.pdf le même, rendu en A4 par Chromium

Usage :
    python3 scripts/construire-cv.py          # écrit cv.html
    python3 scripts/construire-cv.py --pdf    # écrit aussi le PDF

Le PDF incruste polices et portrait : son rendu ne dépend d'aucun réseau.
"""
import base64
import os
import pathlib
import re
import subprocess
import sys

RACINE = pathlib.Path(__file__).resolve().parent.parent
CACHE = RACINE / ".cache-polices"
FONTS_CSS = ("https://fonts.googleapis.com/css2"
             "?family=Archivo:wdth,wght@85..120,400..700"
             "&family=Newsreader:opsz,wght@6..72,400..600"
             "&family=JetBrains+Mono:wght@400;500&display=swap")

# Mise en page propre au papier. Le reste vient de la feuille du dossier.
IMPRESSION = """
@page { size: A4; margin: 10mm 10mm; }

html, body { background: #fff !important; background-image: none !important; }
body { font-size: 12px; }

.cv { border: 0; border-radius: 0; background: #fff; padding: 0; gap: 9px; max-width: 190mm; margin: 0 auto; }
.cv-cols { grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: 24px; }

/* Rien ne se coupe au milieu d'un poste ou d'un bloc. */
.cv-job, .cv-skill, .cv-built-grid > div { break-inside: avoid; }
.cv-rub { break-after: avoid; }

.cv-name { font-size: 26px; }
.cv-photo { flex-basis: 106px; width: 106px; height: 106px; }
/* Pas de filet noir sous l'en-tete : sur papier il coupe la page en deux. */
.cv-head { border-bottom: 0; padding-bottom: 4px; }
.cv-head > div { padding-top: 3px; }
.cv-contact a { border-bottom: 0; }
.cv-intro { font-size: 11.4px; line-height: 1.46; padding-left: 14px; max-width: none; }
.cv-rub { margin: 0 0 8px; padding-bottom: 5px; }
.cv-side .cv-rub:not(:first-child) { margin-top: 17px; }
.cv-job { margin-bottom: 8px; }
.cv-job h4 { font-size: 13.5px; }
.cv-job ul { margin-top: 4px; gap: 2.5px; padding-left: 13px; }
.cv-job li { font-size: 11.1px; line-height: 1.32; }
.cv-meta, .xp-where { font-size: 9.5px; }
.cv-skill { margin-bottom: 9px; }
.cv-skill p { font-size: 11.4px; line-height: 1.46; }
.cv-skill-t { font-size: 12.6px !important; }
.cv-built { padding-top: 2px; }
.cv-built-grid { gap: 20px; }
.cv-built-grid h4 { font-size: 13px; }
.cv-built-grid p { font-size: 11.4px; line-height: 1.46; margin: 5px 0 0; }

.cv-source {
  margin: 0;
  border-top: 1px solid var(--rule);
  padding-top: 6px;
  font-family: var(--mono);
  font-size: 9px;
  color: var(--ink-3);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

/* À l'écran, la page autonome garde un peu d'air autour du document. */
@media screen {
  body { padding: 26px 18px 40px; background: #F1F2EE !important; }
  .cv { background: #fff; padding: 26px 24px; box-shadow: 0 10px 34px -18px rgba(22,24,28,.4); }
}
"""


def corps_du_cv() -> str:
    """Le CV tel qu'il est affiché dans le dossier, nettoyé de ce qui ne s'imprime pas."""
    index = (RACINE / "index.html").read_text(encoding="utf-8")
    a = index.index('<article class="cv">')
    b = index.index("</article>", a) + len("</article>")
    cv = index[a:b]

    photo = base64.b64encode((RACINE / "assets/img/arthur-parois.jpg").read_bytes()).decode()
    cv = cv.replace('src="assets/img/arthur-parois.jpg"', f"src=\"data:image/jpeg;base64,{photo}\"")

    # Les renvois « planche 04 » n'ont pas de sens hors du dossier.
    cv = re.sub(r'\s*<a href="#\w+" data-go="\w+">[^<]*</a>', "", cv)

    return cv.replace("</article>", """  <p class="cv-source">
    <span>Dossier complet, travaux ouverts : github.com/arthurparoisgithu</span>
    <span>arthur270.parois@gmail.com · 06 22 99 86 63</span>
  </p>
</article>""")


def feuille_de_style() -> str:
    """La feuille du dossier, débarrassée de ce qui n'existe pas sur papier.

    Sans cela, la largeur A4 déclenche les règles d'écran étroit et les deux
    colonnes du CV s'effondrent en une seule.
    """
    css = (RACINE / "assets/css/dossier.css").read_text(encoding="utf-8")
    css = re.sub(r"@media \(prefers-color-scheme: dark\) \{.*?\n\}\n", "", css, flags=re.S)
    css = re.sub(r":root\[data-theme=\"dark\"\] \{.*?\n\}\n", "", css, flags=re.S)
    css = re.sub(r"@media \(max-width: \d+px\) \{.*?\n\}\n", "", css, flags=re.S)
    return css


def polices_incrustees() -> str:
    """Les fichiers de police en base64, pour un PDF identique à chaque rendu."""
    CACHE.mkdir(exist_ok=True)
    fichier = CACHE / "polices.css"
    if fichier.exists():
        return fichier.read_text(encoding="utf-8")

    ua = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120 Safari/537.36"
    css = subprocess.run(["curl", "-sS", "-A", ua, FONTS_CSS],
                         capture_output=True, text=True, check=True).stdout

    # Seuls les jeux latins nous servent ; le reste alourdirait le PDF pour rien.
    blocs = re.findall(r"/\* ([^*]+) \*/\s*(@font-face \{.*?\})", css, re.S)
    gardes = [b for nom, b in blocs if nom.strip() in ("latin", "latin-ext")]

    embarque = "\n".join(gardes)
    for url in sorted({u for b in gardes for u in re.findall(r"url\((https://[^)]+)\)", b)}):
        brut = subprocess.run(["curl", "-sS", "-A", ua, url], capture_output=True, check=True).stdout
        embarque = embarque.replace(url, "data:font/woff2;base64," + base64.b64encode(brut).decode())
    embarque = re.sub(r"\s*unicode-range:[^;]+;", "", embarque)

    fichier.write_text(embarque, encoding="utf-8")
    return embarque


def page(styles_polices: str) -> str:
    return f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>CV — Arthur Parois</title>
<meta name="description" content="CV d'Arthur Parois — chef de projet digital, automatisation et IA.">
<!-- Fichier engendré par scripts/construire-cv.py : ne pas modifier à la main,
     le CV se modifie dans l'article .cv de index.html. -->
{styles_polices}
<style>
{feuille_de_style()}
{IMPRESSION}
</style>
</head>
<body>
{corps_du_cv()}
</body>
</html>
"""


def figer_les_dates(pdf: pathlib.Path) -> None:
    """Remplace l'horodatage que Chromium inscrit dans le PDF.

    Sans cela, deux rendus du même CV diffèrent de six octets — l'heure de
    génération — et le PDF ressort modifié dans `git status` à chaque
    publication, pour un document identique. Les deux dates ont une longueur
    fixe : les substituer ne décale aucun offset de la table xref.
    """
    FIGEE = b"D:20260101000000+00'00'"
    brut = pdf.read_bytes()
    fige = re.sub(rb"D:\d{14}\+\d{2}'\d{2}'", FIGEE, brut)
    if fige != brut:
        pdf.write_bytes(fige)


def main() -> None:
    lien = ('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
            f'<link rel="stylesheet" href="{FONTS_CSS}">')
    (RACINE / "cv.html").write_text(page(lien), encoding="utf-8")
    print("cv.html écrit")

    if "--pdf" not in sys.argv:
        return

    temporaire = CACHE / "cv-impression.html"
    temporaire.write_text(page(f"<style>\n{polices_incrustees()}\n</style>"), encoding="utf-8")

    from playwright.sync_api import sync_playwright

    sortie = RACINE / "assets/cv/CV-Arthur-Parois.pdf"
    sortie.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        # CHROME=/chemin/vers/chrome si le navigateur n'est pas là où Playwright l'attend.
        chemin = os.environ.get("CHROME")
        navigateur = p.chromium.launch(executable_path=chemin) if chemin else p.chromium.launch()
        pg = navigateur.new_page()
        pg.goto(temporaire.as_uri(), wait_until="load")
        pg.emulate_media(media="print")
        pg.wait_for_timeout(1200)
        # 0.94 : le CV est composé plus aéré qu'il ne tient sur une A4, et on
        # le réduit de 6 % plutôt que de resserrer les blancs. C'est l'« ajuster
        # à la page » d'un navigateur ; le texte reste vectoriel et sélectionnable.
        pg.pdf(path=str(sortie), format="A4", print_background=True, scale=0.94,
               margin={"top": "10mm", "bottom": "10mm", "left": "10mm", "right": "10mm"})
        navigateur.close()

    figer_les_dates(sortie)
    print(f"PDF écrit : {sortie.stat().st_size // 1024} Ko")


if __name__ == "__main__":
    main()
