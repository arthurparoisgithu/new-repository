import { SITE_URL } from '@/lib/site-url'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleShell } from '@/components/site/article-shell'
import { BlogCTA } from '@/components/site/blog-cta'
import { ArticleSources } from '@/components/site/article-sources'
import { getPostBySlug } from '@/lib/blog'

const SLUG = 'charte-csn-2024-obligations-site-notaire'

export function generateMetadata(): Metadata {
  const post = getPostBySlug(SLUG)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['Arthur Parois'],
    },
  }
}

const SOURCES = [
  {
    ref: '1',
    label: 'Décret n° 2023-1297 du 28 décembre 2023 relatif au code de déontologie des notaires, JORF n° 0301 du 29 décembre 2023, texte n° 46 (Légifrance, JORFTEXT000048706693)',
  },
  {
    ref: '2',
    label: 'Ordonnance n° 45-2590 du 2 novembre 1945 relative au statut du notariat, modifiée par l\'ordonnance n° 2022-544 du 13 avril 2022 relative à la déontologie et à la discipline des officiers ministériels',
  },
  {
    ref: '3',
    label: 'Cour nationale de discipline & sanctions disciplinaires — Conseil supérieur du notariat',
    href: 'https://www.notaires.fr/fr',
  },
  {
    ref: '4',
    label: 'Règlement National / Règlement Inter-Cours du notariat (RIN) — Conseil supérieur du notariat',
    href: 'https://www.notaires.fr/fr',
  },
]

export default function Page() {
  const post = getPostBySlug(SLUG)
  if (!post) return notFound()

  // SITE_URL vient de lib/site-url
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Person', name: 'Arthur Parois', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'WebReset',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    keywords: post.keywords.join(', '),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <ArticleShell post={post}>
        <p>
          Depuis le <strong>Décret n° 2023-1297 du 28 décembre 2023</strong> <sup>[1]</sup> pris en application
          de l&apos;<strong>ordonnance du 2 novembre 1945</strong> <sup>[2]</sup> et de l&apos;ordonnance n° 2022-544
          du 13 avril 2022, la communication digitale des notaires français est encadrée par un nouveau code de
          déontologie. Ce texte clarifie les règles applicables à tous les notaires et renforce les obligations
          qui pèsent sur chaque site web d&apos;étude notariale. Voici les 5 règles que tout notaire doit
          maîtriser avant de mettre en ligne, ou refondre, son site.
        </p>

        <h2>1. Le nom de domaine en .notaires.fr</h2>
        <p>
          Le Conseil supérieur du notariat (CSN) a mis en place un <strong>plan de nommage national</strong> qui
          permet à chaque office de disposer d&apos;un sous-domaine en <code>.notaires.fr</code>. Il est fortement
          recommandé par le CSN car il garantit l&apos;authenticité de chaque office et évite toute confusion
          avec un acteur non assermenteur. Concrètement :
        </p>
        <ul>
          <li>Le nom retenu doit refléter celui du notaire, des notaires associés ou de la commune.</li>
          <li>Aucune mention trompeuse sur la compétence territoriale ou une spécialisation non reconnue.</li>
          <li>L&apos;adresse e-mail professionnelle suit le même plan : <code>contact@etude.notaires.fr</code>.</li>
        </ul>
        <p>
          Bonne nouvelle : ce sous-domaine ne fragilise <em>pas</em> votre référencement naturel. Google traite
          chaque office comme un site à part entière dès lors que la structure technique est propre.
        </p>

        <h2>2. Le logo Notaires de France et la Marianne</h2>
        <p>
          La charte graphique du CSN <sup>[4]</sup> est stricte. Tous les supports digitaux d&apos;une étude
          doivent afficher :
        </p>
        <ul>
          <li>Le logo officiel <strong>Notaires de France</strong>, en respectant ses couleurs et sa zone de protection.</li>
          <li>La <strong>Marianne</strong>, symbole républicain qui rappelle la mission de service public délégué.</li>
          <li>Une hiérarchie visuelle sobre, sans concurrencer ces marqueurs institutionnels.</li>
        </ul>
        <p>
          Le piège classique : placer le logo de l&apos;étude au-dessus du logo CSN peut motiver un refus de la
          chambre. Le bon réflexe : intégrer ces éléments comme des balises de confiance, dans le footer et
          l&apos;en-tête, sans qu&apos;ils étouffent le design.
        </p>

        <h2>3. La déclaration auprès de la chambre départementale</h2>
        <p>
          Avant la mise en ligne, et après chaque refonte majeure, votre site doit être <strong>déclaré</strong>
          à la chambre départementale compétente, qui exerce un contrôle déontologique. À retenir :
        </p>
        <ul>
          <li>La mention de cette déclaration figure dans les mentions légales du site.</li>
          <li>Une refonte majeure (nouveau design, nouvelle rubrique, blog, vidéo) déclenche un nouveau contrôle.</li>
          <li>Les délais varient selon les chambres : prévoir <strong>2 à 4 semaines</strong> en moyenne.</li>
        </ul>
        <p>
          Conseil pratique : un site WebReset livré en 7 à 10 jours est mis en ligne dès le feu vert de la
          chambre — l&apos;envoi du dossier se fait en parallèle du développement.
        </p>

        <BlogCTA />

        <h2>4. Aucune publicité payante, mais le SEO naturel est autorisé</h2>
        <p>
          Le nouveau code de déontologie <sup>[1]</sup> interdit explicitement la sollicitation commerciale
          agressive et la publicité comparative. Sont notamment prohibés :
        </p>
        <ul>
          <li>L&apos;achat de mots-clés payants (Google Ads, Bing Ads).</li>
          <li>Les slogans commerciaux (« le meilleur notaire de Lyon »).</li>
          <li>Les témoignages clients identifiés nominativement.</li>
          <li>La participation à des plateformes comparatives payantes.</li>
          <li>Les mentions de chiffre d&apos;affaires ou de volumes d&apos;actes traités.</li>
        </ul>
        <p>
          <strong>Mais le SEO naturel reste autorisé</strong> : il est considéré comme informatif et non
          publicitaire. Optimisation technique (vitesse, mobile, structure), contenu géolocalisé (« notaire +
          ville »), Google Business Profile, articles éducatifs sur le droit de la famille ou l&apos;immobilier :
          tout cela est encouragé. C&apos;est là que se gagne la visibilité d&apos;un cabinet aujourd&apos;hui.
        </p>

        <h2>5. Les mentions obligatoires et la conformité RGPD</h2>
        <p>
          Tout site notarial doit afficher de manière claire et accessible :
        </p>
        <ul>
          <li>La dénomination complète de l&apos;étude, son adresse, son SIRET, sa juridiction territoriale.</li>
          <li>Les noms et qualités des notaires associés, leurs horaires d&apos;ouverture.</li>
          <li>Les <strong>émoluments réglementés</strong> ou le renvoi vers le tarif officiel.</li>
          <li>Les coordonnées du <strong>médiateur de la consommation</strong> et de l&apos;assurance RC professionnelle.</li>
          <li>Une politique de confidentialité conforme au RGPD, mise à jour annuellement.</li>
          <li>Un hébergement situé en France ou dans l&apos;Union européenne (recommandé par la CNIL).</li>
        </ul>

        <h2>Les sanctions : pourquoi la conformité n&apos;est pas optionnelle</h2>
        <p>
          L&apos;échelle des sanctions disciplinaires <sup>[3]</sup> comprend l&apos;avertissement, le blâme,
          l&apos;interdiction temporaire d&apos;exercer (jusqu&apos;à 10 ans) et la destitution. Elle peut être
          complétée par une <strong>amende à titre principal ou accessoire plafonnée à 10 000 € ou à 5 % du
          chiffre d&apos;affaires hors taxes annuel</strong> de l&apos;office. Ces sanctions sont prononcées par
          les chambres de discipline puis la Cour nationale de discipline installée auprès du CSN depuis la
          réforme de 2022. C&apos;est aussi pourquoi 9 agences web sur 10 — qui n&apos;ont jamais lu un texte
          déontologique — ne devraient pas approcher un site notarial.
        </p>

        <h2>Comment WebReset s&apos;y prend</h2>
        <p>
          Chaque projet WebReset pour un notaire commence par une checklist conformité CSN. Le brief design
          intègre les contraintes graphiques dès les premières maquettes, le copywriting est calibré pour informer
          sans jamais glisser dans le commercial, et le dossier destiné à la chambre est préparé en parallèle
          du développement. Le résultat : un site qui inspire confiance, qui convertit, et qui franchit la
          validation de la chambre sans allers-retours.
        </p>

        <BlogCTA />

        <ArticleSources sources={SOURCES} />
      </ArticleShell>
    </>
  )
}
