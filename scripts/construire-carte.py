#!/usr/bin/env python3
"""Fabrique la feuille d'adresses : une page, deux liens, le dépôt.

C'est le document qu'on joint à un mail quand on ne veut pas joindre seize
pages : le recruteur reçoit une feuille propre qui le mène au dossier et au
CV. Les deux adresses sont cliquables dans le PDF.

  assets/cv/Book-et-CV-Arthur-Parois.pdf

Usage :
    python3 scripts/construire-carte.py
"""
import os
import pathlib
import sys

RACINE = pathlib.Path(__file__).resolve().parent.parent

# On réutilise les fonctions du script du CV plutôt que de les recopier.
_chemin_cv = RACINE / "scripts/construire-cv.py"
_ns: dict = {"__name__": "construire_cv", "__file__": str(_chemin_cv)}
exec(compile(_chemin_cv.read_text(encoding="utf-8"), str(_chemin_cv), "exec"), _ns)  # noqa: S102
polices_incrustees = _ns["polices_incrustees"]
figer_les_dates = _ns["figer_les_dates"]
CACHE = _ns["CACHE"]

SITE = "https://arthurparoisgithu.github.io/new-repository/"
DEPOT = "https://github.com/arthurparoisgithu"

PAGE = """<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Arthur Parois — book et CV</title>
<!-- Fichier engendré par scripts/construire-carte.py -->
{polices}
<style>
@page {{ size: A4; margin: 0; }}
* {{ box-sizing: border-box; margin: 0; }}

html, body {{ background: #fff; }}
body {{
  font-family: "Archivo", system-ui, sans-serif;
  color: #14161A;
  -webkit-font-smoothing: antialiased;
}}

.feuille {{
  width: 210mm; height: 297mm;
  padding: 26mm 30mm 24mm;
  display: flex; flex-direction: column;
}}

.entete {{
  font-family: "JetBrains Mono", monospace;
  font-size: 11px; letter-spacing: .16em; text-transform: uppercase;
  color: #868D97;
  padding-bottom: 12px; border-bottom: 1px solid #DEE1E6;
  display: flex; justify-content: space-between;
}}

h1 {{
  margin-top: 30px;
  font-size: 54px; line-height: 1;
  font-variation-settings: "wdth" 108, "wght" 620;
  letter-spacing: -.025em;
}}
.role {{
  margin-top: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px; letter-spacing: .08em; text-transform: uppercase;
  color: #A9254A;
}}

/* Deux marges automatiques : l'espace libre se partage entre le haut et le
   bas, plutôt que de creuser un seul trou au milieu de la page. */
.liens {{ margin-top: auto; }}
.lien {{
  display: block; text-decoration: none; color: inherit;
  padding: 26px 0; border-top: 2px solid #14161A;
}}
.lien:last-of-type {{ border-bottom: 2px solid #14161A; }}
.lien-nom {{
  font-size: 46px; line-height: 1;
  font-variation-settings: "wdth" 104, "wght" 640;
  letter-spacing: -.02em;
}}
.lien-quoi {{
  margin-top: 8px;
  font-family: "Newsreader", Georgia, serif;
  font-size: 15px; line-height: 1.5; color: #545A63;
  max-width: 54ch;
}}
.lien-url {{
  margin-top: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12.5px; color: #A9254A;
  word-break: break-all;
}}

.pied {{
  margin-top: auto;
  padding-top: 26px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px; line-height: 2; color: #545A63;
}}
.pied b {{ color: #14161A; font-weight: 400; }}
.pied a {{ color: #545A63; text-decoration: none; }}
</style>
</head>
<body>
<div class="feuille">

  <div class="entete">
    <span>Candidature alternance</span>
    <span>Développement web &amp; IA</span>
  </div>

  <h1>Arthur Parois</h1>
  <p class="role">En reconversion · Développeur no-code &amp; IA</p>

  <div class="liens">
    <a class="lien" href="{site}">
      <span class="lien-nom">Book</span>
      <p class="lien-quoi">Six planches&nbsp;: deux sites en ligne, un cours interactif sur les
        fonctions n8n, un workflow d'audit supervisé par quatre agents et rejouable dans la page,
        une application pour animateurs, les compétences et la formation.</p>
      <p class="lien-url">{site}</p>
    </a>
    <a class="lien" href="{site}assets/cv/CV-Arthur-Parois.pdf">
      <span class="lien-nom">CV</span>
      <p class="lien-quoi">Une page A4, texte sélectionnable.</p>
      <p class="lien-url">{site}assets/cv/CV-Arthur-Parois.pdf</p>
    </a>
  </div>

  <p class="pied">
    <b>06 22 99 86 63</b> · arthur270.parois@gmail.com<br>
    Dépôts et travaux ouverts&nbsp;: <a href="{depot}">github.com/arthurparoisgithu</a>
  </p>

</div>
</body>
</html>
"""


def main() -> None:
    CACHE.mkdir(exist_ok=True)
    html = PAGE.format(polices=f"<style>\n{polices_incrustees()}\n</style>",
                       site=SITE, depot=DEPOT)
    temporaire = CACHE / "carte-impression.html"
    temporaire.write_text(html, encoding="utf-8")

    from playwright.sync_api import sync_playwright

    sortie = RACINE / "assets/cv/Book-et-CV-Arthur-Parois.pdf"
    sortie.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        chemin = os.environ.get("CHROME")
        navigateur = p.chromium.launch(executable_path=chemin) if chemin else p.chromium.launch()
        pg = navigateur.new_page()
        pg.goto(temporaire.as_uri(), wait_until="load")
        pg.emulate_media(media="print")
        pg.wait_for_timeout(900)
        # Les marges vivent dans .feuille : le PDF n'en ajoute aucune.
        pg.pdf(path=str(sortie), format="A4", print_background=True,
               margin={"top": "0", "bottom": "0", "left": "0", "right": "0"})
        navigateur.close()

    figer_les_dates(sortie)
    print(f"PDF écrit : {sortie.stat().st_size // 1024} Ko")


if __name__ == "__main__":
    main()
