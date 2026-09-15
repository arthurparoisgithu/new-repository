/**
 * Contenu éditorial du site — articles, avis et FAQ.
 *
 * Ces données vivaient en base (Prisma). Elles sont ici en dur pour que le site
 * se construise et se déploie sans serveur ni base de données : l'export
 * statique est la seule chose dont GitHub Pages a besoin.
 *
 * ⚠ Les avis sont de VRAIS avis Google publics du cabinet, prénoms abrégés.
 *   Ne jamais en inventer.
 */

const IMG = {
  lowerBack: 'https://cdn.abacus.ai/images/75f7e92e-2b16-4f46-b893-510213e9a6f4.png',
  nerve: 'https://cdn.abacus.ai/images/f471d165-0c33-4575-847a-3397ee34ae6f.png',
  shoulder: 'https://cdn.abacus.ai/images/c9b0a2ea-fb62-4f42-9561-41d94ad81332.png',
  mckenzie: 'https://cdn.abacus.ai/images/7edae8a1-13a8-4f37-b07f-292c3431d95b.png',
  sportsRehab: 'https://cdn.abacus.ai/images/81badc50-3ae6-406c-bee8-eec427cd58b6.png',
  spine: 'https://cdn.abacus.ai/images/6962a8cb-eb86-410b-9ef7-ef36ae0529f9.png',
  running: 'https://cdn.abacus.ai/images/cab69cbb-ddcc-4d3e-9d50-63e68a6b63dc.png',
  ergonomic: 'https://cdn.abacus.ai/images/15bc177c-1277-4d26-8de7-74637a446a6d.png',
  manual: 'https://cdn.abacus.ai/images/0d440128-e2bc-4a77-9d24-3f468fd732ce.png',
  patient: 'https://cdn.abacus.ai/images/d83cc617-73ac-4bba-8151-99c479b81329.png',
}

export const posts = [
  {
    slug: '5-exercices-soulager-lombalgie-quotidien',
    title: '5 exercices pour soulager la lombalgie au quotidien',
    excerpt:
      "Des exercices simples et progressifs, validés cliniquement, pour calmer la douleur lombaire et reprendre une vie active sans peur du mouvement.",
    category: 'Dos',
    imageUrl: IMG.lowerBack,
    imageAlt: 'Personne tenant son bas du dos pour illustrer la lombalgie',
    readTime: 6,
    content: `
## Pourquoi bouger quand on a mal au dos ?

La lombalgie commune (sans cause grave sous-jacente) **ne s'aggrave pas** parce qu'on bouge. Au contraire, l'immobilité prolongée entretient la douleur, raidit les muscles et entretient la peur du mouvement (la fameuse *kinésiophobie*). Les recommandations françaises (HAS, Assurance Maladie) sont claires depuis plusieurs années : **rester actif est le premier traitement**.

Les 5 exercices ci-dessous sont issus de ma pratique quotidienne au cabinet à Nantes Chantenay. Ils sont sûrs pour la grande majorité des lombalgies non spécifiques. Si la douleur descend dans la jambe au-delà du genou, si elle est associée à de la fièvre, à une perte de force ou à des troubles urinaires, **consultez rapidement un professionnel de santé**.

## 1. La bascule du bassin (rétroversion)

- **Position** : allongé sur le dos, genoux pliés, pieds à plat.
- **Mouvement** : aplatissez doucement le bas du dos contre le sol en contractant les abdominaux, puis relâchez.
- **Dosage** : 2 séries de 12 répétitions, 1 à 2 fois par jour.

C'est l'exercice de référence pour réveiller le contrôle profond de la région lombo-pelvienne.

## 2. Le "chat-vache" (cat-cow)

À quatre pattes, alternez le dos rond et le dos creux en suivant votre respiration. **L'objectif n'est pas l'amplitude maximale**, mais la fluidité. 10 mouvements lents, 2 fois par jour.

## 3. Le pont fessier (glute bridge)

Allongé sur le dos, montez le bassin sans cambrer, en serrant les fessiers. Tenez 3 secondes en haut. **2 séries de 10 répétitions**. Cet exercice renforce la chaîne postérieure, qui décharge la colonne lombaire.

## 4. L'extension McKenzie (sphinx ou cobra)

Sur le ventre, prenez appui sur les avant-bras (sphinx) ou les mains (cobra), bassin et bas du corps relâchés. **Maintenez 5 secondes**, redescendez doucement, 10 répétitions. Cet exercice issu de la méthode McKenzie est souvent décisif chez les patients avec douleur centralisée.

## 5. La marche

Oui, la marche est un exercice de rééducation à part entière. **20 à 30 minutes par jour**, à un rythme soutenu mais soutenable, suffisent à diminuer significativement les douleurs lombaires chroniques.

## Quand consulter un kinésithérapeute ?

Si la douleur dure plus de 6 semaines, si elle revient régulièrement, ou si elle vous limite dans vos activités sportives ou professionnelles, une **prise en charge personnalisée** permet d'identifier la cause précise et de construire un programme adapté. La méthode McKenzie, que je pratique au cabinet à Nantes, donne d'excellents résultats sur la lombalgie chronique.
`,
  },
  {
    slug: 'sciatique-comment-la-reconnaitre-que-faire',
    title: 'Sciatique : comment la reconnaître et que faire ?',
    excerpt:
      "Tout savoir sur la sciatique : symptômes, causes, examens, et la place décisive de la kinésithérapie pour soulager la douleur durablement.",
    category: 'Névralgies',
    imageUrl: IMG.nerve,
    imageAlt: 'Illustration anatomique du nerf sciatique',
    readTime: 7,
    content: `
## Qu'est-ce qu'une sciatique exactement ?

La **sciatique** désigne une douleur qui suit le trajet du nerf sciatique : elle part du bas du dos ou de la fesse, descend dans la cuisse, le mollet, et parfois jusqu'au pied. Elle est **toujours unilatérale** (un seul côté). Quand le trajet remonte plutôt à l'avant de la cuisse, on parle plutôt de **cruralgie**.

## Comment la reconnaître ?

Les signes classiques :

- douleur en "trait de feu" partant de la fesse,
- aggravée par la position assise prolongée, la toux, l'éternuement,
- parfois accompagnée de fourmillements (paresthésies) ou d'une sensation d'engourdissement,
- la flexion vers l'avant peut être limitée et douloureuse.

## Causes les plus fréquentes

Dans 80 % des cas, la sciatique est liée à une **hernie discale** ou à une **discopathie** qui irrite la racine nerveuse au niveau lombaire (L4-L5 ou L5-S1). Plus rarement, elle peut être due à un **canal lombaire étroit** ou à un **syndrome du piriforme** (compression dans la fesse).

## Faut-il faire une IRM ?

Dans la grande majorité des cas, **non, pas en première intention**. Les recommandations actuelles préconisent une prise en charge active pendant 4 à 6 semaines avant d'envisager l'imagerie, sauf signes d'alerte (déficit moteur, syndrome de la queue de cheval, contexte particulier).

## Le rôle de la kinésithérapie

La kinésithérapie est aujourd'hui **le traitement de référence** de la sciatique non compliquée. Mon approche au cabinet :

1. **Bilan complet** : tests neurologiques, neurodynamiques, évaluation posturale et fonctionnelle.
2. **Thérapie manuelle ciblée** : techniques de mobilisation neurale, de relâchement myofascial, de mobilisation lombo-pelvienne.
3. **Exercices actifs progressifs** : centralisation de la douleur (méthode McKenzie), renforcement, gainage profond.
4. **Éducation thérapeutique** : comprendre la douleur, lever la peur du mouvement, ergonomie au travail.

## Combien de temps pour aller mieux ?

La sciatique aiguë évolue favorablement chez 70 % des personnes en **6 à 8 semaines**. Une prise en charge active précoce raccourcit ce délai et **réduit fortement le risque de chronicité**.

## Quand consulter d'urgence ?

Si vous avez une perte de force dans la jambe, des troubles urinaires ou une perte de sensibilité dans la zone génitale (syndrome de la queue de cheval), c'est une urgence chirurgicale. Rendez-vous immédiatement aux urgences.

Dans tous les autres cas, une consultation chez votre kinésithérapeute (sans ordonnance, en accès direct) ou votre médecin permet de poser un diagnostic et de démarrer un traitement adapté.
`,
  },
  {
    slug: 'douleur-epaule-quand-consulter-kinesitherapeute',
    title: "Douleur d'épaule : quand consulter un kinésithérapeute ?",
    excerpt:
      "Tendinopathie, capsulite, conflit sous-acromial : repérer les signes qui doivent vous amener à consulter un kiné spécialisé de l'épaule à Nantes.",
    category: 'Épaule',
    imageUrl: IMG.shoulder,
    imageAlt: "Illustration anatomique de l'épaule et de la coiffe des rotateurs",
    readTime: 6,
    content: `
## L'épaule, l'articulation la plus mobile du corps

L'épaule est aussi celle qui paie le plus cher cette mobilité : elle est **très souvent douloureuse** chez l'adulte actif et chez le sportif. Près de 30 % des adultes connaîtront un épisode de douleur d'épaule significatif au cours de leur vie.

## Les pathologies les plus fréquentes

- **Tendinopathie de la coiffe des rotateurs** : douleur antéro-latérale, gênante la nuit, pénible lors des élévations.
- **Conflit sous-acromial** : douleur en arc lors de l'élévation entre 60° et 120°.
- **Capsulite rétractile (épaule gelée)** : raideur progressive, perte d'amplitude active **et passive**.
- **Instabilité gléno-humérale** : sensation de luxation, appréhension dans certains mouvements.
- **Tendinopathie calcifiante** : douleur très aiguë, parfois nocturne, avec calcification visible à l'imagerie.

## Quand consulter ?

Consultez un kinésithérapeute :

- si la douleur dure **plus de 7 à 10 jours** sans amélioration,
- si elle vous **réveille la nuit**,
- si elle limite vos activités sportives ou professionnelles,
- si vous avez **perdu de l'amplitude** de mouvement.

## La prise en charge au cabinet

Mon protocole, basé sur les recommandations internationales (notamment le travail de Jeremy Lewis et Stephen May, et les formations "Épaule, pratique basée sur les preuves" que j'ai suivies) :

1. **Bilan exhaustif** : tests de la coiffe, tests d'instabilité, tests fonctionnels spécifiques à votre activité.
2. **Thérapie manuelle** sur la gléno-humérale, la scapulo-thoracique et le rachis cervical haut, qui influence directement l'épaule.
3. **Exercices progressifs** avec charges adaptées : la recherche montre que **les exercices à charge progressive** sont aujourd'hui le traitement le plus efficace des tendinopathies.
4. **Programme à domicile** simple et reproductible.

## Faut-il une infiltration ou de la chirurgie ?

Dans la grande majorité des cas non. La **rééducation bien conduite donne de meilleurs résultats que la chirurgie** sur les tendinopathies de la coiffe non transfixiantes (étude FINSE, étude de Karjalainen). L'infiltration peut soulager une crise hyperalgique mais n'est jamais une solution de fond.

## En pratique à Nantes

Au cabinet KSNB à Nantes Chantenay, je consacre **1 heure** à votre première consultation pour évaluer précisément l'origine de votre douleur d'épaule et construire un plan de traitement individualisé. Prenez rendez-vous en ligne sur Doctolib pour démarrer la rééducation rapidement.
`,
  },
  {
    slug: 'methode-mckenzie-mal-de-dos',
    title: "La méthode McKenzie pour le mal de dos : qu'est-ce que c'est ?",
    excerpt:
      "Diagnostic et thérapie mécanique : comprendre la méthode McKenzie, ses principes, ses bénéfices, et pourquoi elle est efficace sur la lombalgie.",
    category: 'Dos',
    imageUrl: IMG.mckenzie,
    imageAlt: "Patient effectuant un exercice d'extension McKenzie",
    readTime: 6,
    content: `
## Une méthode reconnue mondialement

Développée par Robin McKenzie, kinésithérapeute néo-zélandais dans les années 1950, la **méthode McKenzie** (ou *Mechanical Diagnosis and Therapy*) est aujourd'hui l'une des méthodes les plus étudiées et les plus efficaces pour traiter les douleurs du rachis. Je l'ai approfondie en 2024 lors de la formation officielle Partie A de l'Institut McKenzie France.

## Le principe : un patient acteur de sa rééducation

La méthode McKenzie repose sur trois piliers :

1. **L'auto-diagnostic mécanique** : on observe comment certains mouvements répétés modifient la douleur (centralisation vs périphéralisation).
2. **L'auto-traitement** : le patient apprend à réaliser **par lui-même** les exercices qui soulagent.
3. **La prévention** : une fois la crise passée, le patient sait quoi faire si la douleur revient.

## La centralisation, un signe clé

Le phénomène le plus important : la **centralisation**. Quand un mouvement réduit la douleur dans la jambe (et que celle-ci remonte vers le bas du dos), c'est un excellent signe pronostique. Cela signifie qu'un exercice mécanique précis va pouvoir résoudre durablement la douleur.

## Les exercices typiques

- **Extensions en procubitus** (cobra/sphinx) pour la lombalgie
- **Rétractions cervicales** (chin tuck) pour les cervicalgies
- **Mouvements de glissement latéral** pour les sciatiques avec attitude antalgique

Mais attention : **chaque patient a son exercice spécifique**. Ce n'est pas une recette unique. Le rôle du thérapeute formé est de trouver, lors du bilan, le mouvement directionnel qui centralise la douleur.

## Pour quelles pathologies ?

La méthode McKenzie a fait ses preuves sur :

- la lombalgie aiguë et chronique,
- la sciatique discale,
- la cervicalgie commune,
- la névralgie cervicobrachiale d'origine discale.

Elle est **moins indiquée** sur les pathologies inflammatoires, les fractures ou les pathologies non mécaniques.

## Pourquoi je la pratique au cabinet

La méthode McKenzie correspond à ma philosophie : **rendre le patient autonome**. Au lieu de devenir dépendant de séances passives, vous apprenez les outils pour gérer votre dos vous-même. Combinée à de la thérapie manuelle et à un renforcement progressif, elle offre des résultats durables.

**Si vous souffrez de lombalgie ou de sciatique à Nantes, je vous propose un bilan McKenzie complet lors de la première consultation.**
`,
  },
  {
    slug: 'canal-carpien-symptomes-causes-traitement',
    title: 'Canal carpien : symptômes, causes et traitement en kinésithérapie',
    excerpt:
      "Picotements la nuit, faiblesse de la main : reconnaître le syndrome du canal carpien et comprendre comment la kiné peut éviter la chirurgie.",
    category: 'Névralgies',
    imageUrl: IMG.manual,
    imageAlt: 'Thérapie manuelle de la main et du poignet',
    readTime: 6,
    content: `
## Le canal carpien : qu'est-ce que c'est ?

Le **canal carpien** est un tunnel anatomique situé à la face palmaire du poignet. Il est traversé par les tendons fléchisseurs des doigts et par le **nerf médian**. Le syndrome du canal carpien (SCC) correspond à la compression de ce nerf dans son tunnel.

C'est la **neuropathie d'enclavement la plus fréquente** : elle touche jusqu'à 5 % de la population, plus souvent les femmes après 40 ans, ou les personnes exerçant une activité manuelle répétitive.

## Les symptômes typiques

- **Fourmillements** des trois premiers doigts (pouce, index, majeur) et de la moitié de l'annulaire,
- aggravés la nuit, parfois réveillent le patient,
- soulagés en secouant la main,
- progressivement, **perte de force** de la pince pouce-index,
- dans les formes avancées, **fonte** du muscle thénar (à la base du pouce).

## Les causes

- **Activité manuelle répétitive** (clavier, instruments de musique, métiers manuels)
- **Grossesse** (rétention d'eau)
- **Hypothyroïdie**, **diabète**, **polyarthrite rhumatoïde**
- **Fracture du poignet** mal consolidée
- Souvent **idiopathique** (sans cause identifiée)

## Le diagnostic

Il repose principalement sur l'**examen clinique** (signes de Tinel et de Phalen, tests neurodynamiques). En cas de doute ou de forme sévère, un **électromyogramme (EMG)** confirme et quantifie l'atteinte du nerf médian.

## La prise en charge en kinésithérapie

Les formes légères à modérées **répondent très bien à la kinésithérapie** sans recourir à la chirurgie. Mon protocole :

1. **Mobilisations neurodynamiques** du nerf médian sur l'ensemble de son trajet (cou, plexus brachial, coude, poignet).
2. **Thérapie manuelle** des os du carpe et de la cinétique du poignet.
3. **Étirements** des fléchisseurs et des structures rétinaculaires.
4. **Renforcement progressif** des muscles de la main et de l'avant-bras.
5. **Conseils ergonomiques** : adapter le poste de travail, l'orientation du clavier, l'utilisation de la souris.
6. Selon les cas, **port d'une attelle de repos nocturne**.

## Quand opérer ?

La chirurgie (libération du ligament annulaire) est indiquée :

- en cas d'**échec d'un traitement conservateur bien conduit** pendant 3 à 6 mois,
- d'emblée en présence de **déficit moteur** ou d'**amyotrophie thénarienne**,
- en présence d'**EMG fortement perturbé**.

## Conclusion

Devant des picotements nocturnes des doigts, **n'attendez pas** que la force de la main diminue : une prise en charge précoce en kinésithérapie évite très souvent la chirurgie. Au cabinet à Nantes, je propose une évaluation complète et un programme spécifique au canal carpien.
`,
  },
  {
    slug: 'reathletisation-apres-blessure-sportive',
    title: 'Ré-athlétisation après blessure sportive : les étapes clés',
    excerpt:
      "De la kinésithérapie classique au retour sur le terrain : comprendre la ré-athlétisation et ses étapes pour ne pas rechuter.",
    category: 'Sport',
    imageUrl: IMG.ergonomic,
    imageAlt: 'Sportif en programme de retour au sport et préparation physique',
    readTime: 7,
    content: `
## Pourquoi la rééducation classique ne suffit pas toujours

Après une entorse de cheville, une rupture du ligament croisé antérieur ou une lésion musculaire, la kinésithérapie classique permet de **récupérer la marche, l'amplitude et la force de base**. Mais entre cette phase et le retour à votre sport, il existe un fossé que beaucoup d'athlètes traversent trop vite — d'où **un taux de récidive très élevé** (30 % de re-rupture après LCA, par exemple).

La **ré-athlétisation** est l'étape qui comble ce fossé.

## Les 4 phases de la ré-athlétisation

### Phase 1 — Reconstruction des qualités physiques de base

Force maximale, contrôle moteur, stabilité articulaire dans les amplitudes utiles. **Tests** : isocinétisme, single leg squat, Y-balance test. Critères chiffrés à atteindre avant de passer à la phase suivante.

### Phase 2 — Travail de puissance et de pliométrie

Sauts, rebonds, accélérations courtes en ligne droite. On réintroduit les **forces explosives** dans des conditions contrôlées. Cette phase est cruciale après LCA, tendinopathie achilléenne ou patellaire.

### Phase 3 — Spécificité du sport

Reproduction des gestes du sport pratiqué : changements de direction, sauts pliométriques avec rotation, tests sport-spécifiques (T-test, 505 test, test de Beighton). On intègre la **fatigue** et la **prise de décision** (cône, duel, ballon).

### Phase 4 — Reprise progressive sur le terrain

Reprise contrôlée des entraînements (premiers ¼ d'entraînement, puis ½, etc.), puis matchs amicaux, avant le retour en compétition. **Aucun retour au sport sans avoir validé des critères objectifs.**

## Les critères pour valider le retour au sport

- Force du membre lésé > 90 % du membre sain,
- absence de douleur en charge,
- contrôle dynamique correct (vidéo des sauts, des landings),
- absence d'appréhension psychologique (échelle TSK ou ACL-RSI),
- validation par tests fonctionnels chiffrés.

## Pourquoi un kiné du sport ?

La ré-athlétisation demande à la fois des **compétences cliniques** (comprendre la cicatrisation, la douleur, le mouvement) et des **compétences en préparation physique** (planification de l'entraînement, charges, périodisation). Un kinésithérapeute du sport formé est le professionnel idéal pour vous accompagner sur cette phase.

Au cabinet à Nantes Chantenay, je propose un **suivi de ré-athlétisation complet** pour les sportifs après opération ou blessure : évaluation initiale, programme structuré, tests de retour au sport, et travail collaboratif avec votre médecin du sport et votre coach.
`,
  },
  {
    slug: 'nevralgie-cervicobrachiale-comprendre-traiter',
    title: 'Névralgie cervicobrachiale : comprendre et traiter',
    excerpt:
      "Douleur du cou irradiant dans le bras : tout sur la NCB, ses causes et son traitement par la kinésithérapie spécialisée à Nantes.",
    category: 'Névralgies',
    imageUrl: IMG.patient,
    imageAlt: 'Consultation médicale avec un kinésithérapeute',
    readTime: 6,
    content: `
## Définition

La **névralgie cervicobrachiale** (NCB) est une douleur qui part du cou et descend dans le bras (en suivant le trajet d'une racine nerveuse). C'est la **"sciatique du bras"** : un mécanisme similaire, une racine nerveuse comprimée ou irritée dans la colonne cervicale, le plus souvent au niveau C6 ou C7.

## Les symptômes

- douleur profonde dans le cou et l'**épaule postérieure**,
- irradiation dans le bras, l'avant-bras, parfois jusque dans les doigts (selon la racine atteinte : C6 → pouce/index ; C7 → majeur ; C8 → annulaire/auriculaire),
- fourmillements, **engourdissements**, ou décharges électriques,
- aggravée par certaines positions du cou (extension, rotation),
- parfois faiblesse musculaire dans le bras.

## Les causes

- **Hernie discale cervicale** (cause la plus fréquente chez le 30-50 ans),
- **arthrose cervicale** (uncodiscarthrose, cause la plus fréquente après 50 ans),
- plus rarement : tumeur, kyste, maladie inflammatoire.

## Le diagnostic

En première intention, **l'examen clinique suffit** : tests neurologiques (réflexes, force, sensibilité), test de Spurling, test de distraction, tests neurodynamiques (ULNT pour le médian, le radial, l'ulnaire). L'imagerie (IRM) n'est utile qu'en cas de signes de gravité ou d'échec du traitement à 6 semaines.

## La prise en charge

Grâce à la formation "Gestion des névralgies cervicobrachiales en thérapie manuelle" (Laurent Fabre, Guillaume Molinier) que j'ai suivie en 2024, je propose au cabinet une **prise en charge structurée** :

1. **Bilan complet** : identification précise de la racine atteinte, recherche de drapeaux rouges, évaluation neurodynamique.
2. **Thérapie manuelle ciblée** : mobilisations cervicales spécifiques, mobilisations neurales (sliders et tensioners) pour relâcher la mise en tension du nerf.
3. **Exercices actifs** : décompression cervicale, exercices de centralisation type McKenzie cervical, renforcement progressif des fléchisseurs profonds du cou et du complexe scapulaire.
4. **Éducation thérapeutique** : ergonomie au travail, gestion du sommeil, travail sur la peur du mouvement.

## Pronostic

La NCB d'origine mécanique évolue **favorablement dans 70 à 80 % des cas** en 6 à 12 semaines. La rééducation accélère la guérison et **réduit le risque de chronicisation**.

## En pratique

Si vous souffrez d'une névralgie cervicobrachiale à Nantes, ne restez pas seul avec cette douleur. **Une prise en charge précoce et spécialisée fait toute la différence.** Prenez rendez-vous en ligne sur Doctolib pour un premier bilan d'1 heure au cabinet KSNB à Chantenay.
`,
  },
  {
    slug: 'prevenir-blessures-course-a-pied',
    title: 'Prévenir les blessures en course à pied : conseils de kiné',
    excerpt:
      "Tendinopathie, périostite, syndrome de l'essuie-glace : comment éviter les blessures du runner grâce à la prévention et à la planification.",
    category: 'Sport',
    imageUrl: IMG.running,
    imageAlt: "Coureur s'étirant après un effort",
    readTime: 6,
    content: `
## Pourquoi se blesse-t-on en course à pied ?

Entre **30 et 80 % des coureurs réguliers** se blessent chaque année. La grande majorité de ces blessures sont des **lésions de surcharge** : tendinopathie d'Achille, syndrome de l'essuie-glace (TFL), périostite tibiale, fasciite plantaire, syndrome rotulien.

Leur point commun : **une charge d'entraînement supérieure à la capacité d'adaptation des tissus**.

## Les 5 règles d'or pour éviter les blessures

### 1. Augmenter le volume progressivement (règle des 10 %)

N'augmentez **pas votre kilométrage hebdomadaire de plus de 10 %** d'une semaine à l'autre. Et prévoyez tous les 3 à 4 semaines une **semaine de décharge** à -30 % de volume.

### 2. Renforcer la chaîne postérieure et les fessiers

Un **moyen fessier faible** est l'un des principaux facteurs de risque mécanique de blessure du runner. Faites 2 séances de renforcement par semaine, courtes (20 minutes), centrées sur :

- pont fessier monopodal,
- squat bulgare,
- étape latérale (side step),
- mollets debout (3x15 répétitions).

### 3. Travailler la cadence

Une cadence trop basse (< 160 pas/min) augmente l'impact à chaque pas. Visez **170-180 pas par minute** pour des allures de course faciles. Cela diminue les contraintes sur le genou et la hanche.

### 4. Varier les terrains et les chaussures

Alterner asphalte, sentier, chemin, et **alterner deux paires de chaussures** différentes diminue la répétition exacte des contraintes mécaniques.

### 5. Écouter les signaux d'alerte

Une **douleur qui persiste après l'échauffement** ou qui s'aggrave en cours de séance doit vous faire arrêter. Une douleur qui dépasse 3/10 sur une échelle de 0 à 10, ou qui modifie votre foulée, est un signal qu'il faut consulter.

## La consultation "check-up runner"

Au cabinet à Nantes Chantenay, je propose aux coureurs un **bilan préventif** :

- analyse de la course (tapis ou vidéo extérieure),
- tests fonctionnels (force, mobilité, contrôle moteur),
- détection des points faibles avant qu'ils ne deviennent une blessure,
- programme personnalisé de prévention.

C'est particulièrement recommandé si vous préparez un objectif (10 km, semi, marathon, trail) ou si vous reprenez la course après une longue pause.

**Mieux vaut prévenir que rééduquer !** Prenez rendez-vous en ligne sur Doctolib pour votre bilan.
`,
  },
]

// Vrais avis Google publics — Cabinet de kinésithérapie Thibaud Chiffoleau
// Source : profil Google Business officiel (5,0/5 — 7 avis Google)
// Noms abrégés (initiale) par respect de la vie privée patient.
export const testimonials = [
  {
    name: 'Christophe B.',
    role: 'Avis Google — novembre 2025',
    rating: 5,
    treatment: 'Avis Google ★ vérifié',
    content:
      "Thibaud est professionnel, il m'accompagne avec un programme personnalisé en fonction de mes problématiques avec points d'étapes sur les progressions, en plus il est super sympa et à l'écoute. Allez-y les yeux fermés 😊",
  },
  {
    name: 'Theo R.',
    role: 'Avis Google — juin 2025',
    rating: 5,
    treatment: 'Avis Google ★ vérifié',
    content:
      "Très bon conseils et adaptation du suivi durant ces deux mois de rééducation. Thibaud est très à l'écoute et professionnel !",
  },
  {
    name: 'Louise C.',
    role: 'Avis Google — novembre 2024',
    rating: 5,
    treatment: 'Avis Google ★ vérifié',
    content:
      "Rééducation super efficace, Thibaud est très à l'écoute, je recommande !",
  },
  {
    name: 'Antoine P.',
    role: 'Avis Google — novembre 2024',
    rating: 5,
    treatment: 'Avis Google ★ vérifié',
    content: 'Sympa, pro et explique bien. 2 mois de suivi au top !',
  },
  {
    name: 'Cécile G.',
    role: 'Avis Google — décembre 2024',
    rating: 5,
    treatment: 'Avis Google ★ vérifié',
    content: 'Très pro, efficace et très sympa. Je recommande.',
  },
  {
    name: 'Amélie M.',
    role: 'Avis Google — décembre 2024',
    rating: 5,
    treatment: 'Avis Google ★ vérifié',
    content: "Thibaud a été très à l'écoute et compétent.",
  },
]

export const faqs = [
  {
    question: "Combien de séances sont nécessaires pour me soulager ?",
    answer:
      "Le nombre de séances dépend de votre pathologie, de son ancienneté et de votre réponse au traitement. En moyenne, comptez **6 à 12 séances** pour une lombalgie aiguë ou une tendinopathie, **10 à 20 séances** pour une pathologie chronique ou une rééducation post-opératoire. Lors du premier rendez-vous, je vous donne une estimation réaliste après le bilan initial.",
    category: 'Soins',
    ordering: 1,
  },
  {
    question: "Quelle est la durée d'une séance ?",
    answer:
      "La **première consultation dure 1 heure** : c'est un temps long mais indispensable pour réaliser un bilan complet et construire un plan de traitement personnalisé. Les **séances de suivi durent 30 à 45 minutes**, en fonction des soins nécessaires.",
    category: 'Soins',
    ordering: 2,
  },
  {
    question: "Faut-il une ordonnance pour consulter ?",
    answer:
      "**Non, pas obligatoirement.** Depuis 2023, l'accès direct au kinésithérapeute est possible (dans la limite de 5 à 8 séances selon les structures). Cependant, **avoir une ordonnance permet une prise en charge optimale par la Sécurité sociale**. En l'absence d'ordonnance, je vous orienterai si besoin vers votre médecin traitant.",
    category: 'Pratique',
    ordering: 3,
  },
  {
    question: "Quels sont les tarifs et la prise en charge ?",
    answer:
      "Je suis **conventionné secteur 1**. Le bilan kinésithérapique initial est de **23€** (tarif Sécurité sociale), avec un dépassement d'honoraires unique de **25€** sur la première consultation (justifiée par sa durée d'1h). Les séances de suivi vont de 16€ à 22€ selon les actes. La Sécurité sociale rembourse 60% sur la base du tarif conventionné, le reste est pris en charge par votre mutuelle.",
    category: 'Tarifs',
    ordering: 4,
  },
  {
    question: "Acceptez-vous la carte vitale et le tiers payant ?",
    answer:
      "Oui, j'accepte la **carte vitale** et je pratique le **tiers payant Sécurité sociale**. Vous n'avancez donc que la part complémentaire (sauf si votre mutuelle est connectée à mon logiciel). Paiement possible par carte bancaire, chèque ou virement.",
    category: 'Tarifs',
    ordering: 5,
  },
  {
    question: "Que faut-il apporter à la première consultation ?",
    answer:
      "Pour le premier rendez-vous, merci d'apporter : **votre carte vitale**, **votre carte de mutuelle**, **votre ordonnance** (si vous en avez une), et **les examens complémentaires** (radio, IRM, EMG, comptes-rendus opératoires) si vous en avez. Une **tenue confortable** vous permettra de bouger librement durant le bilan.",
    category: 'Pratique',
    ordering: 6,
  },
  {
    question: "Traitez-vous les enfants ?",
    answer:
      "**Non.** Mon cabinet ne propose pas de prise en charge **pédiatrique**, **vestibulaire** ni **respiratoire**. Pour les enfants, je vous oriente avec plaisir vers des collègues spécialisés sur Nantes.",
    category: 'Soins',
    ordering: 7,
  },
  {
    question: "Proposez-vous des consultations en anglais ?",
    answer:
      "**Yes, I do!** Je consulte en français et en anglais. N'hésitez pas à mentionner votre préférence lors de la prise de rendez-vous. *Consultations available in English — feel free to book directly on Doctolib.*",
    category: 'Pratique',
    ordering: 8,
  },
  {
    question: "Comment se déroule la première consultation ?",
    answer:
      "Elle dure **1 heure** et comprend : (1) un temps d'**écoute** de votre histoire et de vos attentes, (2) un **examen clinique complet** (tests articulaires, musculaires, neurologiques selon le cas), (3) la **pose d'un diagnostic kinésithérapique précis**, (4) un **plan de traitement personnalisé** avec une estimation du nombre de séances, (5) le démarrage immédiat des premiers soins si pertinent.",
    category: 'Soins',
    ordering: 9,
  },
  {
    question: "Quelle est votre approche thérapeutique ?",
    answer:
      "Mon approche est **basée sur les preuves scientifiques** (Evidence-Based Practice) et centrée sur la **thérapie active**. Concrètement : je combine **thérapie manuelle ciblée** (mobilisations articulaires, techniques de tissus mous, mobilisations neurales), **exercices thérapeutiques progressifs** adaptés à votre pathologie et à vos objectifs, et **éducation thérapeutique** pour vous rendre autonome dans la gestion de votre santé.",
    category: 'Soins',
    ordering: 10,
  },
]

export type Post = (typeof posts)[number]
export type Testimonial = (typeof testimonials)[number]
export type FaqItem = (typeof faqs)[number]

const PUBLISHED_AT = '2026-01-15T09:00:00.000Z'

/** Même forme que ce que renvoyait `prisma.blogPost.findMany()`. */
export const blogPosts = posts.map((p, i) => ({
  ...p,
  id: p.slug,
  published: true,
  publishedAt: new Date(Date.parse(PUBLISHED_AT) - i * 7 * 864e5),
  createdAt: new Date(PUBLISHED_AT),
  updatedAt: new Date(PUBLISHED_AT),
}))

export const testimonialRecords = testimonials.map((t, i) => ({
  ...t,
  id: `avis-${i + 1}`,
  createdAt: new Date(PUBLISHED_AT),
}))

export const faqRecords = faqs.map((f, i) => ({
  ...f,
  id: `faq-${i + 1}`,
  createdAt: new Date(PUBLISHED_AT),
}))
