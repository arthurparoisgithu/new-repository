"""Fabrique assets/cv/CV-Arthur-Parois.pdf à partir du CV de la planche 01.

Le CV n'existe qu'à un seul endroit : l'article .cv de index.html. Ce script
le reprend tel quel, neutralise ce qui n'a pas de sens sur papier (thème
sombre, mises en page pour écran étroit), embarque le portrait et les polices,
puis laisse Chromium imprimer la page en A4.

    python3 scripts/construire-cv-pdf.py   # écrit /tmp/.../cv-impression.html
    # puis l'étape d'impression, voir le bas du fichier

Les fichiers de police sont téléchargés depuis Google Fonts au premier passage.

import pathlib, re, base64
SP = "/tmp/claude-0/-home-user-new-repository/359b8d8e-31de-54e6-990c-ea36fd918922/scratchpad"
R  = "/home/user/new-repository"

polices = pathlib.Path(f"{SP}/fonts/embarque.css").read_text(encoding='utf-8')
feuille = pathlib.Path(f"{R}/assets/css/dossier.css").read_text(encoding='utf-8')
index   = pathlib.Path(f"{R}/index.html").read_text(encoding='utf-8')

# Le CV vient de la page : une seule source de vérité.
a = index.index('<article class="cv">')
b = index.index('</article>', a) + len('</article>')
cv = index[a:b]

photo = base64.b64encode(pathlib.Path(f"{R}/assets/img/arthur-parois.jpg").read_bytes()).decode()
cv = cv.replace('src="assets/img/arthur-parois.jpg"', f'src="data:image/jpeg;base64,{photo}"')
cv = re.sub(r'\s*<a href="#\w+" data-go="\w+">[^<]*</a>', '', cv)
cv = cv.replace('</article>', '''  <p class="cv-source">
    <span>Dossier complet, travaux ouverts : github.com/arthurparoisgithu</span>
    <span>arthur270.parois@gmail.com · 06 22 99 86 63</span>
  </p>
</article>''')

# Un PDF n'a ni thème sombre ni écran étroit : on retire les deux familles de règles,
# sinon la largeur A4 déclenche l'affichage mobile et les colonnes s'effondrent.
feuille = re.sub(r"@media \(prefers-color-scheme: dark\) \{.*?\n\}\n", "", feuille, flags=re.S)
feuille = re.sub(r":root\[data-theme=\"dark\"\] \{.*?\n\}\n", "", feuille, flags=re.S)
feuille = re.sub(r"@media \(max-width: \d+px\) \{.*?\n\}\n", "", feuille, flags=re.S)

impression = """
@page { size: A4; margin: 10mm 10mm; }

html, body { background: #fff !important; background-image: none !important; }
body { font-size: 12px; }

.cv { border: 0; border-radius: 0; background: #fff; padding: 0; gap: 6px; }
.cv-cols { grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr); gap: 20px; }

/* Rien ne se coupe au milieu d'un poste ou d'un bloc. */
.cv-job, .cv-skill, .cv-built-grid > div { break-inside: avoid; }
.cv-rub { break-after: avoid; }

.cv-name { font-size: 25px; }
.cv-photo { flex-basis: 84px; width: 84px; height: 84px; }
.cv-head { padding-bottom: 8px; }
.cv-contact a { border-bottom: 0; }
.cv-intro { font-size: 11.3px; line-height: 1.42; padding-left: 13px; max-width: none; }
.cv-rub { margin: 0 0 7px; padding-bottom: 4px; }
.cv-side .cv-rub:not(:first-child) { margin-top: 12px; }
.cv-job { margin-bottom: 7px; }
.cv-job h4 { font-size: 13.5px; }
.cv-job ul { margin-top: 4px; gap: 2px; padding-left: 13px; }
.cv-job li { font-size: 11.1px; line-height: 1.28; }
.cv-meta, .xp-where { font-size: 9.5px; }
.cv-skill { margin-bottom: 6px; }
.cv-skill p { font-size: 11.4px; line-height: 1.4; }
.cv-skill-t { font-size: 12.6px !important; }
.cv-built { padding-top: 7px; }
.cv-built-grid { gap: 18px; }
.cv-built-grid h4 { font-size: 13px; }
.cv-built-grid p { font-size: 11.4px; line-height: 1.45; margin: 4px 0 0; }
.cv-search { padding-top: 7px; font-size: 11.4px; line-height: 1.45; }

/* Rappel discret de l'endroit où le dossier vit. */
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
"""

page = f"""<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>CV — Arthur Parois</title>
<style>
{polices}
{feuille}
{impression}
</style>
</head>
<body>
{cv}
</body>
</html>
"""
pathlib.Path(f"{SP}/cv-impression.html").write_text(page, encoding='utf-8')
print("page d'impression reconstruite :", len(page)//1024, "Ko")
