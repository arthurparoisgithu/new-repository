import { SITE_URL } from '@/lib/site-url'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleShell } from '@/components/site/article-shell'
import { BlogCTA } from '@/components/site/blog-cta'
import { ArticleSources } from '@/components/site/article-sources'
import { getPostBySlug } from '@/lib/blog'

const SLUG = 'prix-refonte-site-notaire-2026'

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
    label: 'Observation du marché français 2024-2026 — devis publics et grilles tarifaires comparées des prestataires techniques spécialisés notariat (Septeo Notaires, Fiducial Notariat, Notariat Services)',
  },
  {
    ref: '2',
    label: 'Étude Google Research / SOASTA : 53 % des visiteurs mobiles abandonnent au-delà de 3 s de chargement',
    href: 'https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/',
  },
  {
    ref: '3',
    label: 'Décret n° 2023-1297 du 28 décembre 2023 relatif au code de déontologie des notaires (JO n° 0301 du 29 décembre 2023)',
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
          La question revient à chaque premier rendez-vous : <em>« Combien coûte vraiment un site internet de
          notaire en 2026 ? »</em>. La réponse honnête tient en une phrase : entre <strong>700 € et 8 000 €</strong>,
          mais le tarif affiché ne dit jamais ce que vous payez vraiment. Les fourchettes ci-dessous sont issues
          d&apos;une observation directe du marché français (devis comparés, grilles publiques des prestataires
          spécialisés <sup>[1]</sup>).
        </p>

        <h2>Les 4 fourchettes du marché français</h2>

        <h3>1. Les solutions « pack » spécialisées : 30 à 100 €/mois</h3>
        <p>
          Proposées par des prestataires techniques spécialisés notariat (Septeo Notaires, Fiducial Notariat,
          Notariat Services) <sup>[1]</sup>. Le principe : un template imposé, peu de personnalisation, hébergement
          et maintenance inclus. Le coût total sur 5 ans oscille entre 1 800 € et 6 000 €.
        </p>
        <ul>
          <li><strong>Avantages :</strong> conformité CSN gérée, mise en ligne rapide, peu d&apos;arbitrages.</li>
          <li><strong>Inconvénient :</strong> votre site ressemble à des centaines d&apos;autres études. Zéro
            différenciation, taux de conversion structurellement faible.</li>
        </ul>

        <h3>2. Le freelance généraliste : 700 à 2 500 €</h3>
        <p>
          Souvent un développeur WordPress qui propose un site multipage avec un thème modifié. Le tarif
          d&apos;appel est attractif — mais attention aux coûts cachés observés en moyenne sur les devis :
        </p>
        <ul>
          <li>SEO non inclus : 500 à 1 200 € supplémentaires.</li>
          <li>Prise de rendez-vous en ligne : module additionnel entre 300 et 500 €.</li>
          <li>Refus possible de la chambre départementale en cas de non-respect du décret 2023-1297 <sup>[3]</sup> →
            reprise facturée.</li>
          <li>Maintenance à la tâche (autour de 60 €/h) : ajouter 150 à 250 €/an.</li>
        </ul>
        <p>
          Le <strong>vrai coût</strong> d&apos;un projet « 1 200 € » finit généralement autour de 2 500 à
          3 500 € — et l&apos;étude perd 6 à 12 semaines en allers-retours.
        </p>

        <BlogCTA />

        <h3>3. L&apos;agence spécialisée notariat : 3 500 à 8 000 €</h3>
        <p>
          Quelques agences françaises ont fait du notariat leur ADN. Elles maîtrisent la charte CSN et livrent
          des sites de qualité. C&apos;est sérieux, mais :
        </p>
        <ul>
          <li>Les délais s&apos;étirent : 8 à 14 semaines en moyenne.</li>
          <li>Le copywriting reste souvent générique, recyclant les mêmes blocs entre deux clients.</li>
          <li>Les options s&apos;ajoutent : module immobilier (+800 €), espace client (+1 200 €), refonte
            graphique sur-mesure (+1 500 €).</li>
        </ul>

        <h3>4. Le sur-mesure premium : 6 000 à 15 000 €</h3>
        <p>
          Réservé aux études parisiennes ou aux gros offices associés. Charte graphique créée ex nihilo,
          fonctionnalités avancées (accès clients chiffré, tableau de bord, multilingue). Le prix est justifié
          par le niveau de personnalisation, mais la majorité des études n&apos;ont pas besoin de cette
          artillerie pour convertir.
        </p>

        <h2>Les 4 coûts cachés que personne ne mentionne</h2>
        <ul>
          <li>
            <strong>Le coût du refus de chambre.</strong> Un site non conforme au décret 2023-1297 <sup>[3]</sup>
            peut se voir retoqué : reprise du design, du copy, parfois de l&apos;architecture — 1 200 à 3 000 €.
          </li>
          <li>
            <strong>Le coût d&apos;opportunité.</strong> Un site qui convertit à 1 % au lieu de 3 % vous fait
            perdre mécaniquement les deux tiers des prospects qui visitent votre site.
          </li>
          <li>
            <strong>Le coût de la dépendance technique.</strong> Beaucoup de templates fermés vous empêchent de
            partir : votre contenu, vos URLs, votre SEO durement gagné — tout reste prisonnier.
          </li>
          <li>
            <strong>Le coût en temps interne.</strong> Un projet mal cadré mobilise votre clerc principal sur 30
            à 60 heures de relectures et de relances. Calculez l&apos;heure-coût chargée.
          </li>
        </ul>

        <h2>Le vrai indicateur : le coût par prise de rendez-vous</h2>
        <p>
          Personne ne devrait payer un site à l&apos;unité. Le bon calcul, c&apos;est le ROI mensuel. Un site qui
          génère quatre prises de rendez-vous supplémentaires par mois, dont une se transforme en dossier client
          à marge élevée, paie son investissement en 2 à 4 mois. À l&apos;inverse, <strong>53 % des visiteurs
          mobiles quittent un site qui met plus de 3 secondes à charger</strong> <sup>[2]</sup> : chaque seconde
          perdue est du chiffre d&apos;affaires évaporé.
        </p>
        <blockquote>
          « Un site à 800 € qui ne convertit pas est infiniment plus cher qu&apos;un site à 3 000 € qui
          transforme. Le tarif n&apos;est pas un coût, c&apos;est un investissement à amortir. »
        </blockquote>

        <h2>La grille de décision à utiliser avant tout devis</h2>
        <ol>
          <li>Le prestataire connaît-il le Décret 2023-1297 <sup>[3]</sup> et le règlement national du CSN ?</li>
          <li>Le copywriting est-il écrit pour <em>votre</em> client idéal, ou recyclé d&apos;une autre étude ?</li>
          <li>Le site est-il livré clé en main avec prise de rendez-vous, ou en options ?</li>
          <li>Y a-t-il une garantie satisfait ou remboursé ? Un délai engageant ?</li>
          <li>Vous appartiendra-t-il vraiment après livraison (code, contenus, hosting) ?</li>
        </ol>
        <p>
          Si la réponse à trois de ces questions est floue, le « petit prix » va vous coûter cher.
        </p>

        <BlogCTA />

        <ArticleSources sources={SOURCES} />
      </ArticleShell>
    </>
  )
}
