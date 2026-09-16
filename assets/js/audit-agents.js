/* ============================================================
   Rejeu du workflow « Audit multi-agents » dans le navigateur.

   Ce fichier ne contient AUCUN appel réseau. Les trois dossiers
   ci-dessous sont des exécutions réelles du workflow n8n
   (assets/n8n/webreset-audit-agents.json), capturées puis figées
   pour que la page puisse les rejouer hors ligne.
   Les données des cabinets sont anonymisées.
   ============================================================ */

const DOSSIERS = {
  notaire: {
    label: "Étude notariale — Nantes (44)",
    entree: { url: "https://www.etude-xxxxx-nantes.fr", metier: "notaire", ville: "Nantes", email: "contact@etude-xxxxx-nantes.fr" },
    dossier: "notaire_20260118_4417",
    faits: {
      statut: 200,
      https: true,
      poidsKo: 412,
      title: "Bienvenue sur le site de l'Étude",
      metaDescription: "",
      viewport: false,
      h1: ["Notaires associés"],
      h2: ["L'étude", "Nos actualités", "Nous contacter"],
      nbImagesSansAlt: 14,
      formulaire: false,
      telCliquable: false,
      mailto: true,
      priseRdvEnLigne: false,
      mentionsLegales: true,
      rgpd: false,
      cookiesBanniere: false,
      motsVisibles: 381
    },
    agents: {
      visibilite: {
        score: 28,
        pensee: "Le title ne contient ni le métier, ni la ville. Sur « notaire Nantes », rien ne rattache cette page à la requête. Je regarde ensuite si la description et le H1 rattrapent — ce n'est pas le cas.",
        synthese: "La page ne se déclare nulle part comme une étude notariale nantaise.",
        problemes: [
          { gravite: "critique", constat: "Le title est « Bienvenue sur le site de l'Étude » : ni métier, ni ville, ni nom d'étude.", signal: "title", correctif: "Réécrire en « Notaire à Nantes — Étude … | Immobilier, succession, famille »." },
          { gravite: "critique", constat: "Aucune meta description. Google compose alors lui-même l'extrait affiché, à partir du premier texte venu.", signal: "metaDescription", correctif: "Rédiger 150 caractères qui annoncent la spécialité et la ville." },
          { gravite: "notable", constat: "Le H1 « Notaires associés » ne dit ni ce qui est proposé, ni où.", signal: "h1", correctif: "Un H1 unique qui reprend la requête réelle du visiteur." },
          { gravite: "notable", constat: "Pas de balise viewport et 14 images sans texte alternatif : la page n'a pas été pensée pour le mobile.", signal: "viewport, nbImagesSansAlt", correctif: "Ajouter le viewport, décrire les images." }
        ]
      },
      conversion: {
        score: 22,
        pensee: "Je cherche le chemin le plus court entre l'arrivée et le contact. Il n'y a pas de numéro cliquable, pas de formulaire, pas de prise de rendez-vous. Le seul chemin restant est un lien mailto en pied de page.",
        synthese: "Un visiteur convaincu n'a aucun moyen simple de vous joindre depuis son téléphone.",
        problemes: [
          { gravite: "critique", constat: "Aucun numéro cliquable (href=\"tel:\"). Sur mobile, appeler suppose de recopier le numéro à la main.", signal: "telCliquable", correctif: "Rendre le numéro cliquable et le remonter dans l'en-tête." },
          { gravite: "critique", constat: "Ni formulaire, ni prise de rendez-vous en ligne. La seule voie de contact est un lien mailto.", signal: "formulaire, priseRdvEnLigne", correctif: "Un formulaire court — objet, délai souhaité, téléphone." },
          { gravite: "notable", constat: "381 mots visibles pour trois rubriques : la page décrit l'étude, elle ne propose jamais rien.", signal: "motsVisibles, h2", correctif: "Un appel à l'action dès le premier écran." },
          { gravite: "notable", constat: "Les trois titres de section sont institutionnels (« L'étude », « Nos actualités »), aucun ne nomme un besoin de client.", signal: "h2", correctif: "Nommer les rubriques par la situation du client : vendre, hériter, se marier." }
        ]
      },
      conformite: {
        score: 55,
        pensee: "Mentions légales détectées. Aucune trace de politique de confidentialité ni de gestionnaire de consentement, alors que la page charge des ressources tierces. Le ton reste sobre, ce qui est conforme à l'esprit de la charte du CSN.",
        synthese: "Le discours est sobre ; c'est l'appareil RGPD qui manque.",
        problemes: [
          { gravite: "notable", constat: "Aucune politique de confidentialité repérée dans le texte de la page.", signal: "rgpd", correctif: "Publier une page dédiée, liée depuis le pied de page." },
          { gravite: "notable", constat: "Aucun gestionnaire de consentement détecté (ni Axeptio, ni Tarteaucitron, ni Didomi).", signal: "cookiesBanniere", correctif: "Recueillir le consentement avant tout dépôt de traceur." },
          { gravite: "mineur", constat: "Mentions légales présentes : ce point est acquis.", signal: "mentionsLegales", correctif: "Vérifier qu'elles nomment la chambre de rattachement." }
        ],
        aVerifier: ["Nom de domaine et intitulé du site au regard de la charte de nommage du CSN — à faire valider par la chambre départementale."]
      }
    },
    superviseur: {
      scoreGlobal: 31,
      route: "Opportunité forte",
      verdict: "Le site existe, il ne travaille pas. Trois correctifs, dont deux tiennent en une matinée, changent la nature du problème.",
      pensee: "Visibilité et conversion pointent la même cause : la page a été écrite pour l'étude, pas pour le visiteur. Je fusionne. Puis je classe par impact divisé par effort — le téléphone cliquable passe devant la refonte sémantique, parce qu'il coûte trente minutes.",
      chantiers: [
        { titre: "Rendre le téléphone utilisable depuis un mobile", pourquoi: "Aujourd'hui, un visiteur qui veut appeler doit recopier le numéro. C'est la fuite la moins coûteuse à colmater de tout l'audit.", effort: "30 min", impact: "fort" },
        { titre: "Donner à la page d'accueil une adresse claire", pourquoi: "Title, description et H1 doivent nommer le métier et la ville. Sans cela, l'étude reste invisible sur la requête que tapent réellement ses futurs clients.", effort: "2 h", impact: "fort" },
        { titre: "Ouvrir une voie de contact écrite", pourquoi: "Un formulaire court capte les demandes qui n'appelleront jamais — successions, questions sensibles, horaires de bureau.", effort: "1 j", impact: "moyen" }
      ],
      aVerifierAvecLOrdre: ["Nom de domaine et intitulé du site au regard de la charte de nommage du CSN."]
    }
  },

  avocat: {
    label: "Cabinet d'avocats — Rennes (35)",
    entree: { url: "https://www.cabinet-xxxxx-avocats.fr", metier: "avocat", ville: "Rennes", email: "contact@cabinet-xxxxx-avocats.fr" },
    dossier: "avocat_20260118_4418",
    faits: {
      statut: 200,
      https: true,
      poidsKo: 168,
      title: "Cabinet XXXXX & Associés — Avocats en droit social à Rennes",
      metaDescription: "Cabinet d'avocats en droit social à Rennes. Accompagnement des employeurs et des salariés : ruptures, contentieux prud'homal, négociation.",
      viewport: true,
      h1: ["Avocats en droit social à Rennes"],
      h2: ["Employeurs", "Salariés", "Contentieux prud'homal", "Honoraires", "Le cabinet", "Contact"],
      nbImagesSansAlt: 2,
      formulaire: true,
      telCliquable: true,
      mailto: true,
      priseRdvEnLigne: false,
      mentionsLegales: true,
      rgpd: true,
      cookiesBanniere: false,
      motsVisibles: 1243
    },
    agents: {
      visibilite: {
        score: 78,
        pensee: "Title, description et H1 sont alignés sur la même requête : « avocat droit social Rennes ». Les six H2 couvrent les situations plutôt que l'organigramme. Il reste deux images sans alt et un poids honnête.",
        synthese: "Les fondations sont saines ; ce qui manque relève du détail.",
        problemes: [
          { gravite: "notable", constat: "Deux images sans texte alternatif, dont le bandeau d'accueil.", signal: "nbImagesSansAlt", correctif: "Décrire les deux visuels." },
          { gravite: "mineur", constat: "Les six H2 couvrent bien les situations, mais aucun ne nomme une ville voisine.", signal: "h2", correctif: "Une page par zone si le cabinet plaide au-delà de Rennes." }
        ]
      },
      conversion: {
        score: 64,
        pensee: "Le téléphone est cliquable, le formulaire existe : le chemin de contact est ouvert. Ce qui coince est ailleurs — 1 243 mots avant la prise de contact, et aucune manière de réserver un créneau sans attendre une réponse.",
        synthese: "On peut vous joindre ; on ne peut pas encore réserver.",
        problemes: [
          { gravite: "notable", constat: "Aucune prise de rendez-vous en ligne. Toute demande attend une réponse humaine, y compris le samedi.", signal: "priseRdvEnLigne", correctif: "Ouvrir quelques créneaux de premier entretien réservables." },
          { gravite: "notable", constat: "1 243 mots visibles : la lecture complète précède le contact.", signal: "motsVisibles", correctif: "Remonter le bloc de contact au-dessus du récit du cabinet." },
          { gravite: "mineur", constat: "La rubrique « Honoraires » existe, ce qui est rare et lève une objection majeure.", signal: "h2", correctif: "La rendre visible dès le premier écran." }
        ]
      },
      conformite: {
        score: 70,
        pensee: "Politique de confidentialité présente, mentions légales présentes, discours factuel sans mention comparative ni laudative — conforme à l'esprit de l'article 10 du RIN. Reste le consentement aux traceurs.",
        synthese: "Le discours tient ; le consentement aux cookies manque.",
        problemes: [
          { gravite: "notable", constat: "Aucun gestionnaire de consentement détecté alors que la page charge des ressources tierces.", signal: "cookiesBanniere", correctif: "Installer un bandeau de consentement avant dépôt." },
          { gravite: "mineur", constat: "Aucune formulation comparative ou laudative repérée dans le texte visible.", signal: "motsVisibles", correctif: "Point acquis, à préserver lors des prochaines publications." }
        ],
        aVerifier: ["Mention du barreau de rattachement dans les mentions légales — à confirmer hors page d'accueil."]
      }
    },
    superviseur: {
      scoreGlobal: 70,
      route: "Rapport standard",
      verdict: "Un site correct, qui perd des rendez-vous sur la dernière marche plutôt que sur les fondations.",
      pensee: "Aucun désaccord entre les trois agents : ils décrivent un site sain avec un point de fuite unique, la réservation. Je refuse de proposer une refonte — elle coûterait cher pour un gain marginal.",
      chantiers: [
        { titre: "Ouvrir la réservation en ligne du premier entretien", pourquoi: "C'est la seule marche qui reste entre un visiteur convaincu et un dossier ouvert. Tout le reste du parcours fonctionne déjà.", effort: "1 j", impact: "fort" },
        { titre: "Remonter contact et honoraires au premier écran", pourquoi: "La transparence sur les honoraires est l'argument le plus rare du secteur : elle est enterrée en cinquième position.", effort: "3 h", impact: "moyen" },
        { titre: "Poser le consentement aux traceurs", pourquoi: "Point réglementaire, sans effet commercial, mais c'est le seul manquement net du dossier.", effort: "2 h", impact: "faible" }
      ],
      aVerifierAvecLOrdre: ["Mention du barreau de rattachement dans les mentions légales."]
    }
  },

  kine: {
    label: "Cabinet de kinésithérapie — Nantes (44)",
    entree: { url: "https://www.cabinet-kine-xxxxx.fr", metier: "kinesitherapeute", ville: "Nantes", email: "cabinet@xxxxx.fr" },
    dossier: "kinesitherapeute_20260118_4419",
    faits: {
      statut: 200,
      https: true,
      poidsKo: 96,
      title: "Cabinet de kinésithérapie - Accueil",
      metaDescription: "Cabinet de kinésithérapie. Prenez rendez-vous.",
      viewport: true,
      h1: ["Cabinet de kinésithérapie", "Nos praticiens"],
      h2: ["Le cabinet", "Horaires", "Accès"],
      nbImagesSansAlt: 5,
      formulaire: false,
      telCliquable: true,
      mailto: false,
      priseRdvEnLigne: true,
      mentionsLegales: true,
      rgpd: true,
      cookiesBanniere: true,
      motsVisibles: 212
    },
    agents: {
      visibilite: {
        score: 52,
        pensee: "Deux H1 sur la même page : la hiérarchie est ambiguë. Le title s'arrête à « Accueil » et ne nomme pas la ville, alors que la requête locale est le seul canal d'acquisition d'un cabinet de quartier. Aucune spécialité n'apparaît nulle part.",
        synthese: "Le cabinet est référencé comme un cabinet de plus, jamais comme un spécialiste.",
        problemes: [
          { gravite: "critique", constat: "Le title « Cabinet de kinésithérapie - Accueil » ne contient ni la ville, ni une spécialité.", signal: "title", correctif: "Nommer la ville et la spécialité principale." },
          { gravite: "notable", constat: "Deux H1 concurrents sur la même page.", signal: "h1", correctif: "Un seul H1, les autres passent en H2." },
          { gravite: "notable", constat: "Les trois H2 décrivent le lieu (« Le cabinet », « Horaires », « Accès »), aucun ne nomme une pathologie.", signal: "h2", correctif: "Une section par motif de consultation : épaule, lombalgie, sciatique, sport." },
          { gravite: "mineur", constat: "Cinq images sans texte alternatif.", signal: "nbImagesSansAlt", correctif: "Décrire les visuels du cabinet." }
        ]
      },
      conversion: {
        score: 38,
        pensee: "La prise de rendez-vous en ligne existe et le téléphone est cliquable : les deux portes sont ouvertes. Mais avec 212 mots visibles, rien ne permet au patient de savoir si ce cabinet traite son problème. Il clique vers l'agenda… et repart.",
        synthese: "Le rendez-vous est accessible, la raison de le prendre ici n'est écrite nulle part.",
        problemes: [
          { gravite: "critique", constat: "212 mots visibles en tout : aucune pathologie, aucune méthode, aucun parcours de soin décrit.", signal: "motsVisibles", correctif: "Une page par spécialité, rédigée depuis le symptôme du patient." },
          { gravite: "notable", constat: "Aucun formulaire : un patient qui hésite entre deux cabinets n'a pas de moyen de poser une question.", signal: "formulaire", correctif: "Un formulaire court, en complément de l'agenda." },
          { gravite: "mineur", constat: "Prise de rendez-vous en ligne détectée et téléphone cliquable : les deux points décisifs sont acquis.", signal: "priseRdvEnLigne, telCliquable", correctif: "Remonter le bouton dans l'en-tête de toutes les pages." }
        ]
      },
      conformite: {
        score: 68,
        pensee: "Mentions légales, politique de confidentialité et gestionnaire de consentement présents : l'appareil réglementaire est en place. Le ton est sobre. Je note un point de vigilance sur l'affichage des tarifs, sans pouvoir le trancher depuis la page d'accueil.",
        synthese: "Appareil réglementaire complet ; deux vérifications restent à faire hors ligne.",
        problemes: [
          { gravite: "mineur", constat: "Mentions légales, RGPD et consentement aux traceurs sont tous les trois présents.", signal: "mentionsLegales, rgpd, cookiesBanniere", correctif: "Rien à corriger sur ce point." },
          { gravite: "notable", constat: "Aucun affichage tarifaire repéré sur la page d'accueil.", signal: "motsVisibles", correctif: "Vérifier la présence de l'affichage des honoraires exigé pour un professionnel de santé conventionné." }
        ],
        aVerifier: [
          "Affichage des honoraires et du secteur de conventionnement — non vérifiable depuis la page d'accueil.",
          "Mention du numéro RPPS et du diplôme, à confirmer sur la page « praticiens »."
        ]
      }
    },
    superviseur: {
      scoreGlobal: 49,
      route: "Opportunité forte",
      verdict: "Toute la mécanique de rendez-vous est déjà en place. Ce qui manque, c'est la raison de choisir ce cabinet-là.",
      pensee: "Les agents Visibilité et Conversion pointent la même cause avec deux vocabulaires : l'absence de contenu par pathologie. Je les fusionne en un seul chantier, et je le place en tête, parce qu'il résout simultanément le référencement local et l'hésitation du patient.",
      chantiers: [
        { titre: "Écrire une page par motif de consultation", pourquoi: "Épaule, lombalgie, sciatique, reprise du sport : c'est ce que tape le patient, et c'est ce qui le décide. Un seul chantier répare à la fois l'invisibilité et l'hésitation.", effort: "4 j", impact: "fort" },
        { titre: "Réécrire le title et n'y laisser qu'un H1", pourquoi: "Sans la ville dans le title, le cabinet dispute la requête locale avec un handicap gratuit.", effort: "1 h", impact: "fort" },
        { titre: "Ajouter un formulaire à côté de l'agenda", pourquoi: "Le patient qui hésite ne réserve pas : il veut d'abord savoir si son problème est pris en charge ici.", effort: "4 h", impact: "moyen" }
      ],
      aVerifierAvecLOrdre: [
        "Affichage des honoraires et du secteur de conventionnement.",
        "Mention du numéro RPPS sur la page des praticiens."
      ]
    }
  }
};

/* ---------- pilotage de l'exécution ---------- */

const $ = (sel, root = document) => root.querySelector(sel);
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let runToken = 0;
const sleep = (ms) => new Promise((r) => setTimeout(r, reduced ? Math.min(ms, 60) : ms));

function nodeEl(id) { return document.querySelector(`.node[data-node="${id}"]`); }

function setNode(id, state, status) {
  const el = nodeEl(id);
  if (!el) return;
  el.dataset.state = state;
  const st = $(".st", el);
  if (st && status !== undefined) st.textContent = status;
}

function resetCanvas() {
  document.querySelectorAll(".node").forEach((el) => {
    el.dataset.state = "idle";
    const st = $(".st", el);
    if (st) st.textContent = "en attente";
  });
}

function logEl() { return $("#agentLog"); }

function scrollLog() {
  const l = logEl();
  l.scrollTop = l.scrollHeight;
}

function entry(who, time) {
  const wrap = document.createElement("div");
  wrap.className = "entry";
  wrap.innerHTML = `<div class="entry-head"><span class="who"></span><span class="t"></span></div>`;
  $(".who", wrap).textContent = who;
  $(".t", wrap).textContent = time;
  logEl().appendChild(wrap);
  scrollLog();
  return wrap;
}

async function type(parent, text, token) {
  const p = document.createElement("p");
  p.className = "say";
  parent.appendChild(p);
  if (reduced) { p.textContent = text; scrollLog(); return; }
  const cur = document.createElement("span");
  cur.className = "cursor";
  p.appendChild(cur);
  const step = text.length > 220 ? 3 : 2;
  for (let i = 0; i < text.length; i += step) {
    if (token !== runToken) return;
    cur.insertAdjacentText("beforebegin", text.slice(i, i + step));
    if (i % 24 === 0) scrollLog();
    await sleep(11);
  }
  cur.remove();
  scrollLog();
}

function block(parent, content) {
  const pre = document.createElement("pre");
  pre.textContent = content;
  parent.appendChild(pre);
  scrollLog();
}

function findings(parent, list) {
  const box = document.createElement("div");
  box.className = "findings";
  list.forEach((f) => {
    const row = document.createElement("div");
    row.className = "finding";
    row.innerHTML = `<span class="sev"></span><span class="txt"></span>`;
    const sev = $(".sev", row);
    sev.dataset.lvl = f.gravite;
    sev.textContent = f.gravite;
    const txt = $(".txt", row);
    txt.append(f.constat + " ");
    const code = document.createElement("code");
    code.textContent = "→ " + f.correctif;
    txt.appendChild(code);
    box.appendChild(row);
  });
  parent.appendChild(box);
  scrollLog();
}

function scoreLine(parent, score, label) {
  const row = document.createElement("div");
  row.className = "score-line";
  row.innerHTML = `<span class="score-num"></span><span class="score-max"></span><span class="meter"><i></i></span>`;
  $(".score-num", row).textContent = score;
  $(".score-max", row).textContent = label;
  parent.appendChild(row);
  requestAnimationFrame(() => { $(".meter i", row).style.width = score + "%"; });
  scrollLog();
}

function clock(ms) {
  const s = (ms / 1000).toFixed(1);
  return `+${s}s`;
}

async function run(key) {
  const token = ++runToken;
  const d = DOSSIERS[key];
  const btn = $("#runBtn");
  const log = logEl();
  log.innerHTML = "";
  resetCanvas();
  btn.disabled = true;
  btn.textContent = "Exécution…";
  const t0 = Date.now();
  const at = () => clock(Date.now() - t0);
  const alive = () => token === runToken;

  /* 1 — webhook */
  setNode("webhook", "run", "reçoit");
  let e = entry("Webhook · POST /audit-cabinet", at());
  block(e, JSON.stringify(d.entree, null, 2));
  await sleep(520); if (!alive()) return;
  setNode("webhook", "done", "1 item");

  /* 2 — normalisation */
  setNode("code1", "run", "exécute");
  await sleep(430); if (!alive()) return;
  e = entry("Code · Normaliser la demande", at());
  block(e, `dossier : ${d.dossier}\ndomaine : ${d.entree.url.replace(/^https?:\/\//, "")}`);
  setNode("code1", "done", "1 item");

  /* 3 — requête HTTP */
  setNode("http", "run", "GET…");
  await sleep(900); if (!alive()) return;
  e = entry("HTTP Request · page d'accueil", at());
  block(e, `${d.faits.statut} OK · ${d.faits.poidsKo} Ko reçus`);
  setNode("http", "done", `${d.faits.statut}`);

  /* 4 — extraction des faits */
  setNode("code2", "run", "analyse");
  await sleep(620); if (!alive()) return;
  e = entry("Code · Extraire les faits mesurables", at());
  await type(e, "Aucun modèle n'intervient ici. On mesure d'abord, on fait raisonner ensuite : les trois agents ne verront que ces signaux, jamais le HTML brut.", token);
  if (!alive()) return;
  block(e, JSON.stringify(d.faits, null, 2));
  setNode("code2", "done", "18 signaux");

  /* 5-7 — trois agents en parallèle */
  const agents = [
    { id: "agent1", who: "Agent 1 · Visibilité locale", data: d.agents.visibilite, label: "/100 — visibilité" },
    { id: "agent2", who: "Agent 2 · Conversion", data: d.agents.conversion, label: "/100 — conversion" },
    { id: "agent3", who: "Agent 3 · Conformité ordinale", data: d.agents.conformite, label: "/100 — conformité" }
  ];
  agents.forEach((a) => setNode(a.id, "run", "raisonne"));
  for (const a of agents) {
    await sleep(340); if (!alive()) return;
    const box = entry(a.who, at());
    await type(box, a.data.pensee, token);
    if (!alive()) return;
    scoreLine(box, a.data.score, a.label);
    findings(box, a.data.problemes);
    if (a.data.aVerifier) {
      const p = document.createElement("p");
      p.className = "say";
      p.innerHTML = "<strong>À vérifier hors ligne :</strong> " + a.data.aVerifier.join(" ");
      box.appendChild(p);
    }
    setNode(a.id, "done", a.data.score + "/100");
  }

  /* 8 — fusion */
  setNode("merge", "run", "fusionne");
  await sleep(430); if (!alive()) return;
  setNode("merge", "done", "3 → 1");

  /* 9 — superviseur */
  setNode("agent4", "run", "arbitre");
  const sup = d.superviseur;
  e = entry("Agent 4 · Superviseur", at());
  await type(e, sup.pensee, token);
  if (!alive()) return;
  setNode("agent4", "done", sup.scoreGlobal + "/100");

  /* 10 — aiguillage */
  setNode("switch", "run", "évalue");
  await sleep(380); if (!alive()) return;
  setNode("switch", "done", sup.route);
  const alerte = sup.route === "Opportunité forte";
  setNode("mail", alerte ? "run" : "skip", alerte ? "envoie" : "non emprunté");
  await sleep(420); if (!alive()) return;
  setNode("mail", alerte ? "done" : "skip", alerte ? "1 envoyé" : "non emprunté");
  /* les deux branches se rejoignent ici : tout dossier est archivé */
  setNode("prep", "run", "exécute");
  await sleep(330); if (!alive()) return;
  setNode("prep", "done", "1 item");
  setNode("db", "run", "écrit");
  await sleep(430); if (!alive()) return;
  setNode("db", "done", "1 ligne");
  e = entry("Aiguillage · score " + sup.scoreGlobal + "/100", at());
  block(e, alerte
    ? `< 55 → branche « Opportunité forte »\nGmail         : alerte interne à arthur270.parois@gmail.com\nGoogle Sheets : 1 ligne ← ${d.dossier}`
    : `≥ 55 → branche « Rapport standard »\nGmail         : non emprunté\nGoogle Sheets : 1 ligne ← ${d.dossier}`);

  /* 11 — réponse */
  setNode("respond", "run", "répond");
  await sleep(330); if (!alive()) return;
  setNode("respond", "done", "200");

  /* rapport final */
  const rep = document.createElement("div");
  rep.className = "report";
  rep.innerHTML = `
    <div class="report-head">
      <div>
        <p class="eyebrow">Rapport remis au cabinet</p>
        <h3 style="margin-top:6px">${d.label}</h3>
      </div>
      <div style="text-align:right">
        <div class="score-num">${sup.scoreGlobal}</div>
        <p class="eyebrow" style="margin-top:2px">sur 100</p>
      </div>
    </div>
    <p class="lede">${sup.verdict}</p>
    <div class="chantiers"></div>
    <p class="disclaimer"><b>Points à faire valider par l'ordre compétent :</b> ${sup.aVerifierAvecLOrdre.join(" ")}</p>`;
  const ch = $(".chantiers", rep);
  sup.chantiers.forEach((c, i) => {
    const row = document.createElement("div");
    row.className = "chantier";
    row.innerHTML = `<span class="rank">0${i + 1}</span><div><h4></h4><p></p></div><span class="effort"></span>`;
    $("h4", row).textContent = c.titre;
    $("p", row).textContent = c.pourquoi;
    $(".effort", row).textContent = `${c.effort} · impact ${c.impact}`;
    ch.appendChild(row);
  });
  logEl().appendChild(rep);
  scrollLog();

  btn.disabled = false;
  btn.textContent = "Relancer l'exécution";
  $("#runMeta").textContent = `Dossier ${d.dossier} — exécution terminée en ${((Date.now() - t0) / 1000).toFixed(1)} s`;
}

/* ---------- branchement ---------- */

document.addEventListener("DOMContentLoaded", () => {
  const btn = $("#runBtn");
  const sel = $("#dossierSelect");
  if (!btn || !sel) return;

  btn.addEventListener("click", () => run(sel.value));
  sel.addEventListener("change", () => {
    runToken++;
    resetCanvas();
    logEl().innerHTML = `<p class="disclaimer">Dossier chargé : <b>${DOSSIERS[sel.value].label}</b>. Lancez l'exécution pour rejouer le workflow nœud par nœud.</p>`;
    $("#runMeta").textContent = "";
    btn.disabled = false;
    btn.textContent = "Lancer l'exécution";
  });

  /* ---- export du workflow ---- */

  const WORKFLOW = "assets/n8n/webreset-audit-agents.json";
  const NOM_FICHIER = "WebReset-audit-multi-agents.json";

  const copyBtn = $("#copyWorkflow");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        const txt = await (await fetch(WORKFLOW)).text();
        await navigator.clipboard.writeText(txt);
        toast("Workflow copié — collez-le dans un canevas n8n vide");
      } catch (err) {
        toast("Copie impossible ici : ouvrez le fichier et copiez-le à la main");
      }
    });
  }

  const dlBtn = $("#downloadWorkflow");
  if (dlBtn) {
    dlBtn.addEventListener("click", async () => {
      let txt;
      try {
        txt = await (await fetch(WORKFLOW)).text();
      } catch (err) {
        toast("Fichier introuvable — utilisez « Ouvrir le fichier »");
        return;
      }

      /* Sur claude.ai, seul l'hôte peut écrire un fichier : on passe par lui.
         Ailleurs (GitHub Pages, ouverture locale), le lien de téléchargement
         classique fonctionne. */
      const downloads = await window.claude?.use?.("downloads").catch(() => null);
      if (downloads) {
        try {
          await downloads.save({ filename: NOM_FICHIER, data: txt });
          toast("Workflow enregistré");
        } catch (err) {
          if (err?.code !== "declined") {
            toast("Enregistrement impossible — utilisez « Copier le workflow »");
          }
        }
        return;
      }

      const url = URL.createObjectURL(new Blob([txt], { type: "application/json" }));
      const a = document.createElement("a");
      a.href = url;
      a.download = NOM_FICHIER;
      a.click();
      URL.revokeObjectURL(url);
      toast("Workflow téléchargé");
    });
  }
});

function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 3200);
}
