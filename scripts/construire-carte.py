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
  print-color-adjust: exact; -webkit-print-color-adjust: exact;
}}

.feuille {{ width: 210mm; height: 297mm; display: flex; flex-direction: column; }}

/* ---------- le bandeau ---------- */

/* Le même renversement que le mot de la fin du dossier : encre au fond,
   papier au texte. Une feuille d'adresses se reconnaît de loin. */
.bandeau {{
  background: #14161A; color: #F4F5F6;
  padding: 30mm 26mm 24mm;
}}
.bandeau-k {{
  font-family: "JetBrains Mono", monospace;
  font-size: 10.5px; letter-spacing: .18em; text-transform: uppercase;
  color: #FF8BA6;
  display: flex; justify-content: space-between; gap: 20px;
}}
.bandeau h1 {{
  margin-top: 22px;
  font-size: 58px; line-height: .98;
  font-variation-settings: "wdth" 108, "wght" 620;
  letter-spacing: -.028em;
}}
.filet {{ width: 54px; height: 3px; background: #FF8BA6; margin-top: 20px; }}
.bandeau .role {{
  margin-top: 18px;
  font-family: "Newsreader", Georgia, serif;
  font-size: 17px; line-height: 1.5; color: #C9CDD3;
  max-width: 46ch;
}}

/* ---------- le corps ---------- */

.corps {{ padding: 22mm 26mm 0; flex: 1; display: flex; flex-direction: column; }}

.lien {{ display: block; text-decoration: none; color: inherit; }}
.lien-nom {{
  font-size: 44px; line-height: 1;
  font-variation-settings: "wdth" 104, "wght" 640;
  letter-spacing: -.02em;
}}
.lien-et {{ font-variation-settings: "wdth" 100, "wght" 420; color: #868D97; }}
.lien-url {{
  margin-top: 16px; padding: 12px 15px;
  border: 1.5px solid #14161A; border-radius: 4px;
  display: inline-block;
  font-family: "JetBrains Mono", monospace;
  font-size: 13px; color: #A9254A;
}}

/* Le sommaire reprend la numérotation du rail du dossier. */
.sommaire {{ margin-top: 30px; border-top: 1px solid #DEE1E6; }}
.sommaire div {{
  display: flex; align-items: baseline; gap: 14px;
  padding: 12.5px 0; border-bottom: 1px solid #EDEFF2;
  font-size: 14.5px;
}}
.sommaire .n {{
  font-family: "JetBrains Mono", monospace;
  font-size: 11px; color: #A9254A; min-width: 22px;
}}
.sommaire .quoi {{ margin-left: auto; font-size: 12.5px; color: #868D97; text-align: right; }}

.pied {{
  margin-top: auto; padding: 18px 0 24mm;
  font-family: "JetBrains Mono", monospace;
  font-size: 12px; line-height: 2; color: #545A63;
  border-top: 2px solid #14161A;
}}
.pied b {{ color: #14161A; font-weight: 400; }}
.pied a {{ color: #545A63; text-decoration: none; }}
</style>
</head>
<body>
<div class="feuille">

  <div class="bandeau">
    <p class="bandeau-k"><span>Candidature alternance</span><span>Développement web &amp; IA</span></p>
    <h1>Arthur Parois</h1>
    <div class="filet"></div>
    <p class="role">En reconversion vers le développement web et l'intelligence
      artificielle. Huit ans au contact du public, puis une année à construire
      des outils.</p>
  </div>

  <div class="corps">
    <a class="lien" href="{site}">
      <span class="lien-nom">Book <span class="lien-et">et CV</span></span>
      <span class="lien-url">{site}</span>
    </a>

    <div class="sommaire">
      <div><span class="n">01</span><span>Parcours</span><span class="quoi">la lettre et le CV</span></div>
      <div><span class="n">02</span><span>Sites web</span><span class="quoi">deux sites en ligne</span></div>
      <div><span class="n">03</span><span>Automatisation n8n</span><span class="quoi">un cours interactif</span></div>
      <div><span class="n">04</span><span>Workflow multi-agents</span><span class="quoi">rejouable dans la page</span></div>
      <div><span class="n">05</span><span>AnimApp</span><span class="quoi">une application en ligne</span></div>
      <div><span class="n">06</span><span>Compétences et formation</span><span class="quoi">outils et parcours</span></div>
    </div>

    <p class="pied">
      <b>06 22 99 86 63</b> · arthur270.parois@gmail.com<br>
      Dépôts et travaux ouverts&nbsp;: <a href="{depot}">github.com/arthurparoisgithu</a>
    </p>
  </div>

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
