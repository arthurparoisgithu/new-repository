#!/usr/bin/env python3
"""Fabrique la version imprimable du dossier complet, et son PDF.

Le dossier vit dans index.html, sous forme de six planches qu'on ouvre à
l'onglet. Ce script les met bout à bout sur du papier, pour un lecteur qui
préfère recevoir un fichier plutôt qu'un lien.

  dossier.html                        page autonome, imprimable (Ctrl+P)
  assets/cv/Dossier-Arthur-Parois.pdf le même, rendu en A4 par Chromium

Ce qui ne survit pas au papier est remplacé, pas supprimé en silence : le
cours interactif et la démo rejouable deviennent un encadré qui donne leur
adresse, et les quatre consignes d'agents passent en annexe.

Usage :
    python3 scripts/construire-dossier-pdf.py          # écrit dossier.html
    python3 scripts/construire-dossier-pdf.py --pdf    # écrit aussi le PDF
"""
import base64
import os
import pathlib
import re
import sys

RACINE = pathlib.Path(__file__).resolve().parent.parent

# Le script du CV porte un tiret dans son nom : on ne peut pas l'importer,
# on l'exécute dans son propre espace de noms pour réutiliser ses fonctions
# plutôt que d'en recopier une seconde version qui divergerait.
_chemin_cv = RACINE / "scripts/construire-cv.py"
_ns: dict = {"__name__": "construire_cv", "__file__": str(_chemin_cv)}
exec(compile(_chemin_cv.read_text(encoding="utf-8"), str(_chemin_cv), "exec"), _ns)  # noqa: S102
polices_incrustees = _ns["polices_incrustees"]
feuille_de_style = _ns["feuille_de_style"]
figer_les_dates = _ns["figer_les_dates"]
CACHE = _ns["CACHE"]
FONTS_CSS = _ns["FONTS_CSS"]

DOSSIER_EN_LIGNE = "arthurparoisgithu.github.io/new-repository"

IMPRESSION = """
@page { size: A4; margin: 13mm 12mm; }

html, body { background: #fff !important; background-image: none !important; }
body { font-size: 12.5px; }

/* Les six planches sont des onglets à l'écran ; sur papier elles se suivent,
   chacune sur une page neuve. */
.plate { display: block !important; }
.plate + .plate { break-before: page; }
.main { padding: 0; }
.stack { gap: 34px; }

/* Le dévoilement au défilement dépend de JavaScript. Sans lui, le mot de la
   fin resterait invisible à l'impression : on le rétablit. */
[data-anime] > * { opacity: 1 !important; transform: none !important; }

h1 { font-size: 30px; }
h2 { font-size: 21px; }
h3 { font-size: 15px; }
.lede { font-size: 14px; }

img, figure, .duo, .outil, .cell, .project, .mot-fin, .kv, pre {
  break-inside: avoid;
}
figure.shot img { max-height: 118mm; object-fit: contain; }
.gallery img { max-height: 36mm; }
.duo .shot img { max-height: 62mm; }

/* Le canevas de nœuds et la console sont conçus pour un écran large. */
.runner { grid-template-columns: minmax(0, 250px) minmax(0, 1fr); }
.canvas { background: #F8F9FB; }
.log { max-height: none; overflow: visible; }

.papier-note {
  border: 1px solid var(--rule);
  border-left: 3px solid var(--accent);
  border-radius: 4px;
  padding: 14px 16px;
  font-family: var(--mono);
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--ink-2);
}
.papier-note b { color: var(--ink); }

/* La couverture */
.couverture { break-after: page; padding-top: 12mm; }
.couverture h1 { font-size: 40px; margin-bottom: 10px; }
.couverture .lede { max-width: 62ch; }
.couverture-adresse {
  margin-top: 26px;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-2);
  line-height: 1.9;
}
.couverture-adresse b { color: var(--ink); }
.sommaire { margin-top: 30px; border-top: 2px solid var(--ink); padding-top: 14px; }
.sommaire li {
  display: flex; gap: 14px; align-items: baseline;
  font-size: 14px; padding: 5px 0; border-bottom: 1px solid var(--rule-2);
}
.sommaire .n { font-family: var(--mono); font-size: 11px; color: var(--ink-3); }

.annexe { break-before: page; }
.annexe pre { font-size: 9.5px; line-height: 1.5; }
.annexe .prompt-block { border: 1px solid var(--rule); border-radius: 4px; margin-bottom: 14px; }
.annexe .prompt-block > div { padding: 0 14px 12px; }
.annexe .prompt-titre {
  font-family: var(--mono); font-size: 11px; letter-spacing: .1em;
  text-transform: uppercase; color: var(--accent-ink); padding: 12px 14px 8px;
}
"""

TITRES = [
    ("parcours", "Parcours"),
    ("sites", "Sites web"),
    ("n8n", "Automatisation n8n"),
    ("agents", "Workflow multi-agents"),
    ("jeux", "AnimApp"),
    ("outils", "Compétences et formation"),
]


def planches(html: str) -> dict:
    """Découpe index.html en ses six planches, par identifiant."""
    trouve = {}
    for cle, _ in TITRES:
        d = html.index(f'<section class="plate" id="plate-{cle}"')
        f = html.index("\n  </section>", d) + len("\n  </section>")
        trouve[cle] = html[d:f]
    return trouve


def incruster_images(html: str) -> str:
    """Les images deviennent des données : le PDF ne dépend plus des fichiers."""
    for chemin in sorted(set(re.findall(r'src="(assets/img/[^"]+)"', html))):
        fichier = RACINE / chemin
        if not fichier.exists():
            continue
        b64 = base64.b64encode(fichier.read_bytes()).decode()
        html = html.replace(f'src="{chemin}"', f'src="data:image/jpeg;base64,{b64}"')
    return html


def note(texte: str) -> str:
    return f'<p class="papier-note">{texte}</p>'


def couper_div(html: str, ouvrant: str, remplacement: str = "") -> str:
    """Retire le <div> nommé et tout ce qu'il contient.

    Un `.*?` non gourmand s'arrêterait au premier </div> rencontré, celui
    d'un enfant, et laisserait une fermante orpheline : c'est ce qui avait
    soudé la planche 03 à la planche 04 dans une première version.
    """
    if ouvrant not in html:
        return html
    debut = html.index(ouvrant)
    ligne = html.rindex("\n", 0, debut) + 1
    profondeur, fin = 0, debut
    for m in re.finditer(r"<div\b|</div>", html[debut:]):
        profondeur += 1 if m.group() == "<div" else -1
        if profondeur == 0:
            fin = debut + m.end()
            break
    fin = html.index("\n", fin) + 1
    return html[:ligne] + (remplacement + "\n" if remplacement else "") + html[fin:]


def adapter(cle: str, bloc: str) -> tuple:
    """Remplace ce qui ne vit qu'à l'écran. Renvoie (planche, annexe)."""
    annexe = ""

    # Les boutons d'action n'ont pas de sens sur papier.
    bloc = couper_div(bloc, '<div class="cta-row">')
    bloc = couper_div(bloc, '<div class="cv-actions">')
    bloc = re.sub(r'\s*<p class="cv-actions">.*?</p>\n', "\n", bloc, flags=re.S)
    bloc = re.sub(r'\s*<span class="live-invite"[^>]*>[^<]*</span>', "", bloc)

    # Les renvois internes restent lisibles, mais ne sont plus des liens.
    bloc = re.sub(r'<a (?:class="[^"]*" )?href="#\w+" data-go="\w+">([^<]*)</a>',
                  r'<span class="outil-preuve">\1</span>', bloc)

    if cle == "n8n":
        # Le cours s'exécute dans la page : sur papier, on donne son adresse.
        bloc = couper_div(bloc, '<div class="viewer">', note(
            "<b>Ce document est interactif.</b> Les six exemples se recalculent "
            "dans la page et les exercices se corrigent tout seuls. Pour l'essayer&nbsp;: "
            f"{DOSSIER_EN_LIGNE}#n8n"))

    if cle == "agents":
        # La barre de commandes pilote une démo rejouable.
        bloc = couper_div(bloc, '<div class="console-bar"', note(
            "<b>Cette exécution se rejoue en ligne</b>, nœud par nœud, sur trois "
            "dossiers de démonstration. Le workflow complet se télécharge au "
            f"format n8n depuis&nbsp;: {DOSSIER_EN_LIGNE}#agents"))
        # Deux phrases décrivent des boutons qui n'existent pas sur papier.
        bloc = bloc.replace(
            "Pour le rejouer chez vous, deux chemins : le bouton\n"
            "        <em>Copier le workflow</em> place le JSON dans le presse-papier, il suffit de le coller dans un\n"
            "        canevas n8n vide ; <em>Télécharger le JSON</em> enregistre le fichier, à reprendre avec\n"
            "        <span class=\"mono\">Import from File</span> dans n8n.",
            f"Il se copie et se télécharge depuis le dossier en ligne, "
            f"{DOSSIER_EN_LIGNE}#agents, pour être repris avec "
            "<span class=\"mono\">Import from File</span> dans n8n.")
        bloc = bloc.replace(
            "lui, est complet (bouton « Copier le workflow » ci-dessus).",
            "lui, est complet et se télécharge en ligne.")
        # Le pied de planche répète les coordonnées de la couverture.
        bloc = re.sub(r"\s*<footer style=\"border-top.*?</footer>\n", "\n", bloc, flags=re.S)

        # Les quatre consignes d'agents partent en annexe.
        d = bloc.index("<h3>Les consignes réellement écrites dans les nœuds</h3>")
        d = bloc.rindex("      <section>", 0, d)
        f = bloc.index("      </section>", d) + len("      </section>\n")
        section, bloc = bloc[d:f], bloc[:d] + bloc[f:]
        annexe = section

    return bloc, annexe


def annexe_papier(section: str) -> str:
    """Les <details> ne s'ouvrent pas à l'impression : on les met à plat."""
    section = section.replace('<div class="section-rule">',
                              '<div class="section-rule">').replace(
        "<h3>Les consignes réellement écrites dans les nœuds</h3>",
        "<h2>Annexe&nbsp;: les consignes réellement écrites dans les nœuds</h2>")
    section = re.sub(r'<details class="prompt-block">\s*<summary>(.*?)'
                     r'<span class="tagline">([^<]*)</span></summary>',
                     r'<div class="prompt-block">'
                     r'<p class="prompt-titre">\1 · \2</p>', section, flags=re.S)
    section = section.replace("</details>", "</div>")
    return f'<section class="plate annexe">{section}</section>'


RESUME = (
    "Huit ans au contact du public, puis une année à construire des outils web. "
    "Ce dossier réunit ce qui m'a servi à apprendre&nbsp;: deux sites en ligne, un cours "
    "interactif sur les fonctions n8n, un workflow d'audit supervisé par quatre agents, "
    "et une application pour animateurs de vacances. Chaque planche montre le travail "
    "lui-même, pas son résumé."
)


def couverture() -> str:
    return f"""<section class="plate couverture">
  <div class="plate-head">
    <p class="k">Dossier de candidature<span class="sep">/</span>Alternance</p>
    <p class="meta">Version imprimable du dossier en ligne</p>
  </div>
  <h1>Arthur Parois</h1>
  <p class="lede">{RESUME}</p>
  <p class="couverture-adresse">
    <b>06 22 99 86 63</b> · arthur270.parois@gmail.com<br>
    Dossier en ligne, avec la démo rejouable et le cours interactif&nbsp;:<br>
    <b>{DOSSIER_EN_LIGNE}</b><br>
    Dépôts et travaux ouverts&nbsp;: github.com/arthurparoisgithu
  </p>
  <ul class="sommaire">
    {"".join(f'<li><span class="n">{i:02d}</span><span>{t}</span></li>'
             for i, (_, t) in enumerate(TITRES, start=1))}
    <li><span class="n">A</span><span>Annexe : les consignes des quatre agents</span></li>
  </ul>
</section>"""


def corps() -> str:
    html = (RACINE / "index.html").read_text(encoding="utf-8")
    parts = planches(html)

    morceaux, annexes = [couverture()], []
    for cle, _ in TITRES:
        bloc, annexe = adapter(cle, parts[cle])
        morceaux.append(bloc)
        if annexe:
            annexes.append(annexe_papier(annexe))
    return incruster_images("\n".join(morceaux + annexes))


def page(styles_polices: str) -> str:
    return f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Dossier Arthur Parois</title>
<meta name="description" content="Dossier de candidature en alternance d'Arthur Parois, version imprimable.">
<!-- Fichier engendré par scripts/construire-dossier-pdf.py : ne pas modifier
     à la main, le dossier se modifie dans index.html. -->
{styles_polices}
<style>
{feuille_de_style()}
{IMPRESSION}
</style>
</head>
<body>
<main class="main">
{corps()}
</main>
</body>
</html>
"""


def main() -> None:
    lien = ('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
            f'<link rel="stylesheet" href="{FONTS_CSS}">')
    (RACINE / "dossier.html").write_text(page(lien), encoding="utf-8")
    print("dossier.html écrit")

    if "--pdf" not in sys.argv:
        return

    CACHE.mkdir(exist_ok=True)
    temporaire = CACHE / "dossier-impression.html"
    temporaire.write_text(page(f"<style>\n{polices_incrustees()}\n</style>"), encoding="utf-8")

    from playwright.sync_api import sync_playwright

    sortie = RACINE / "assets/cv/Dossier-Arthur-Parois.pdf"
    sortie.parent.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        chemin = os.environ.get("CHROME")
        navigateur = p.chromium.launch(executable_path=chemin) if chemin else p.chromium.launch()
        pg = navigateur.new_page(viewport={"width": 1180, "height": 1500})
        pg.goto(temporaire.as_uri(), wait_until="load")
        pg.emulate_media(media="print")
        pg.wait_for_timeout(2000)
        pg.pdf(path=str(sortie), format="A4", print_background=True, scale=0.88,
               margin={"top": "13mm", "bottom": "13mm", "left": "12mm", "right": "12mm"})
        navigateur.close()

    figer_les_dates(sortie)
    print(f"PDF écrit : {sortie.stat().st_size // 1024} Ko")


if __name__ == "__main__":
    main()
