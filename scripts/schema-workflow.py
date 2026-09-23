#!/usr/bin/env python3
"""Dessine le schema du workflow n8n a partir de l'export lui-meme.

Les positions des noeuds et les connexions ne sont pas redessinees a la
main : elles sont lues dans assets/n8n/webreset-audit-agents.json. Le
schema ne peut donc pas diverger du fichier que le lecteur telecharge.

Le SVG est ecrit a deux endroits :
  assets/img/workflow-n8n.svg   fichier autonome, partageable
  index.html                    entre les deux marqueurs « schema »

L'incrustation dans la page n'est pas un caprice : un SVG charge par
<img> vit dans son propre document et n'herite pas des variables CSS du
dossier. Incruste, il suit le theme clair comme le theme sombre.
"""
import json
import pathlib

RACINE = pathlib.Path(__file__).resolve().parent.parent
SOURCE = RACINE / "assets/n8n/webreset-audit-agents.json"
SORTIE = RACINE / "assets/img/workflow-n8n.svg"

COTE = 104          # cote d'un noeud principal, comme dans n8n
COTE_SOUS = 78      # les sous-noeuds (modele, format) sont plus petits

# Glyphe et famille par type de noeud. La famille donne la couleur.
TYPES = {
    "webhook":                ("⇥",  "declencheur"),
    "code":                   ("JS", "code"),
    "httpRequest":            ("↗",  "reseau"),
    "agent":                  ("◇",  "agent"),
    "lmChatAnthropic":        ("✳",  "modele"),
    "outputParserStructured": ("{}", "modele"),
    "merge":                  ("⋈",  "flux"),
    "switch":                 ("⋔",  "flux"),
    "gmail":                  ("@",  "sortie"),
    "googleSheets":           ("▦",  "sortie"),
    "respondToWebhook":       ("↩",  "declencheur"),
}

SOUS_NOEUDS = {"lmChatAnthropic", "outputParserStructured"}

# n8n se sert du nom d'un noeud comme identifiant dans les expressions
# — $('Nom du noeud') — et l'export est donc sans accents. On les
# restitue pour l'affichage seulement : le fichier, lui, ne bouge pas.
ACCENTS = {
    "Recuperer la page d'accueil": "Récupérer la page d'accueil",
    "Agent 1 - Visibilite locale": "Agent 1 — Visibilité locale",
    "Agent 2 - Conversion": "Agent 2 — Conversion",
    "Agent 3 - Conformite ordinale": "Agent 3 — Conformité ordinale",
    "Agent 4 - Superviseur": "Agent 4 — Superviseur",
    "Modele - analystes": "Modèle",
    "Modele - superviseur": "Modèle",
    "Format - rapport d'analyste": "Format",
    "Format - rapport final": "Format",
    "Preparer la ligne": "Préparer la ligne",
    "Repondre au formulaire": "Répondre au formulaire",
}


def court(nom: str) -> list[str]:
    """Le nom tel qu'il s'affiche sous le noeud, sur trois lignes au plus."""
    mots, lignes, courante = ACCENTS.get(nom, nom).split(), [], ""
    for mot in mots:
        essai = f"{courante} {mot}".strip()
        if len(essai) > 17 and courante:
            lignes.append(courante)
            courante = mot
        else:
            courante = essai
    lignes.append(courante)
    return lignes[:3]


def courbe(x1, y1, x2, y2) -> str:
    """Bezier horizontale, comme les liens de n8n."""
    dx = max(48, abs(x2 - x1) * 0.42)
    return f"M {x1:.0f} {y1:.0f} C {x1 + dx:.0f} {y1:.0f}, {x2 - dx:.0f} {y2:.0f}, {x2:.0f} {y2:.0f}"


def main() -> None:
    graphe = json.loads(SOURCE.read_text(encoding="utf-8"))
    noeuds = {}
    for n in graphe["nodes"]:
        typ = n["type"].split(".")[-1]
        x, y = n["position"]
        cote = COTE_SOUS if typ in SOUS_NOEUDS else COTE
        noeuds[n["name"]] = {
            "x": x, "y": y, "cote": cote, "type": typ,
            "glyphe": TYPES.get(typ, ("•", "flux"))[0],
            "famille": TYPES.get(typ, ("•", "flux"))[1],
        }

    xs = [n["x"] for n in noeuds.values()]
    ys = [n["y"] for n in noeuds.values()]
    x0, y0 = min(xs) - 64, min(ys) - 60
    x1 = max(n["x"] + n["cote"] for n in noeuds.values()) + 64
    y1 = max(n["y"] + n["cote"] for n in noeuds.values()) + 96

    liens_principaux, liens_sous = [], []
    for source, sorties in graphe["connections"].items():
        for genre, branches in sorties.items():
            for branche in branches or []:
                for lien in branche or []:
                    cible = lien["node"]
                    if source not in noeuds or cible not in noeuds:
                        continue
                    a, b = noeuds[source], noeuds[cible]
                    if genre == "main":
                        liens_principaux.append(courbe(
                            a["x"] + a["cote"], a["y"] + a["cote"] / 2,
                            b["x"], b["y"] + b["cote"] / 2))
                    else:
                        # Un sous-noeud se rattache par le dessous de l'agent.
                        liens_sous.append(
                            f'M {a["x"] + a["cote"] / 2:.0f} {a["y"]:.0f} '
                            f'C {a["x"] + a["cote"] / 2:.0f} {a["y"] - 60:.0f}, '
                            f'{b["x"] + b["cote"] / 2:.0f} {b["y"] + b["cote"] + 60:.0f}, '
                            f'{b["x"] + b["cote"] / 2:.0f} {b["y"] + b["cote"]:.0f}')

    parties = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0} {y0} {x1 - x0} {y1 - y0}" '
        f'role="img" aria-label="Schéma du workflow n8n : dix-huit nœuds, du formulaire d\'audit à la réponse" '
        f'class="schema-n8n">',
        """<style>
  .schema-n8n text { font-family: ui-sans-serif, system-ui, sans-serif; }
  .sn-fond   { fill: var(--sn-fond, #F7F6F2); }
  .sn-point  { fill: var(--sn-point, #D8D5CC); }
  .sn-boite  { fill: var(--sn-boite, #FFFFFF); stroke: var(--sn-bord, #D8D5CC); stroke-width: 2; }
  .sn-lien   { fill: none; stroke: var(--sn-lien, #B9B5AA); stroke-width: 2.5; }
  .sn-lien-sous { fill: none; stroke: var(--sn-lien, #B9B5AA); stroke-width: 2; stroke-dasharray: 5 6; }
  .sn-nom    { fill: var(--sn-nom, #2B2B2B); font-size: 19px; font-weight: 600; text-anchor: middle; }
  .sn-glyphe { font-size: 34px; text-anchor: middle; dominant-baseline: central; }
  .sn-etiq   { fill: var(--sn-etiq, #6E6A60); font-size: 16px; font-weight: 600;
               text-anchor: middle; letter-spacing: .04em; }
  .f-declencheur .sn-glyphe { fill: #B45309; }
  .f-declencheur rect       { stroke: #E7B168; }
  .f-code   .sn-glyphe { fill: #4338CA; }
  .f-reseau .sn-glyphe { fill: #0369A1; }
  .f-agent  .sn-glyphe { fill: #BE185D; }
  .f-agent  rect       { stroke: #E79FBE; stroke-width: 2.5; }
  .f-modele .sn-glyphe { fill: #6D28D9; }
  .f-flux   .sn-glyphe { fill: #0F766E; }
  .f-sortie .sn-glyphe { fill: #15803D; }
</style>""",
        f'<rect x="{x0}" y="{y0}" width="{x1 - x0}" height="{y1 - y0}" class="sn-fond"/>',
        '<defs><pattern id="sn-grille" width="28" height="28" patternUnits="userSpaceOnUse">'
        '<circle cx="1.5" cy="1.5" r="1.5" class="sn-point"/></pattern></defs>',
        f'<rect x="{x0}" y="{y0}" width="{x1 - x0}" height="{y1 - y0}" fill="url(#sn-grille)"/>',
    ]

    for d in liens_sous:
        parties.append(f'<path d="{d}" class="sn-lien-sous"/>')
    for d in liens_principaux:
        parties.append(f'<path d="{d}" class="sn-lien"/>')

    for nom, n in noeuds.items():
        c = n["cote"]
        parties.append(f'<g class="f-{n["famille"]}">')
        parties.append(
            f'<rect x="{n["x"]}" y="{n["y"]}" width="{c}" height="{c}" rx="16" class="sn-boite"/>')
        parties.append(
            f'<text x="{n["x"] + c / 2:.0f}" y="{n["y"] + c / 2:.0f}" class="sn-glyphe">{n["glyphe"]}</text>')
        lignes = court(nom)
        for i, ligne in enumerate(lignes):
            classe = "sn-etiq" if n["type"] in SOUS_NOEUDS else "sn-nom"
            parties.append(
                f'<text x="{n["x"] + c / 2:.0f}" y="{n["y"] + c + 26 + i * 23:.0f}" '
                f'class="{classe}">{ligne}</text>')
        parties.append("</g>")

    parties.append("</svg>")
    svg = "\n".join(parties)
    SORTIE.parent.mkdir(parents=True, exist_ok=True)
    SORTIE.write_text(svg, encoding="utf-8")

    page = RACINE / "index.html"
    texte = page.read_text(encoding="utf-8")
    debut, fin = "<!-- schema:debut -->", "<!-- schema:fin -->"
    a, b = texte.index(debut), texte.index(fin)
    indente = "\n".join("        " + ligne for ligne in svg.splitlines())
    page.write_text(texte[:a] + debut + "\n" + indente + "\n        " + texte[b:],
                    encoding="utf-8")

    print(f"{SORTIE.relative_to(RACINE)} et index.html — {len(noeuds)} nœuds, "
          f"{len(liens_principaux)} liens, {len(liens_sous)} rattachements")


if __name__ == "__main__":
    main()
