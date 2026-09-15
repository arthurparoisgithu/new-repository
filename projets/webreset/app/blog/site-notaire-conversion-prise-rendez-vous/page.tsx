import { SITE_URL } from '@/lib/site-url'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleShell } from '@/components/site/article-shell'
import { BlogCTA } from '@/components/site/blog-cta'
import { ArticleSources } from '@/components/site/article-sources'
import { getPostBySlug } from '@/lib/blog'

const SLUG = 'site-notaire-conversion-prise-rendez-vous'

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
    label: 'Étude Google Research / SOASTA : 53 % des visiteurs mobiles abandonnent au-delà de 3 s',
    href: 'https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/',
  },
  {
    ref: '2',
    label: 'Google Search Central : 46 % des recherches Google ont une intention locale',
    href: 'https://support.google.com/business/answer/3038177',
  },
  {
    ref: '3',
    label: 'Apple Human Interface Guidelines & Google Material Design : norme tactile 44 × 44 px',
    href: 'https://developer.apple.com/design/human-interface-guidelines/accessibility',
  },
  {
    ref: '4',
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
          Une recherche Google / SOASTA devenue référence l&apos;a mesuré précisément : <strong>53 % des
          visiteurs mobiles quittent un site qui met plus de 3 secondes à charger</strong> <sup>[1]</sup>. Sur les
          sites notariaux français, la moyenne observée est bien au-delà : entre 5 et 8 secondes. Voici les 7
          fuites silencieuses qui ruinent les conversions — et la méthode pour les corriger.
        </p>

        <h2>Fuite n°1 : le site charge en plus de 3 secondes sur mobile</h2>
        <p>
          PageSpeed Insights est sans pitié. Plus le chargement s&apos;allonge, plus la perte est exponentielle :
          au-delà de 3 secondes, <strong>53 % des visiteurs mobiles ont déjà quitté</strong> <sup>[1]</sup>.
          Causes principales :
        </p>
        <ul>
          <li>Images non optimisées (JPEG à 2 Mo chargées au même format sur tous les appareils).</li>
          <li>Templates lourds avec 30+ scripts JavaScript inutiles.</li>
          <li>Hébergement mutualisé partagé avec des centaines d&apos;autres sites.</li>
        </ul>
        <p>
          <strong>Correctif :</strong> images en WebP servies en lazy-loading, code minifié, hébergement dédié
          ou edge. Cible : 1,5 à 2,5 secondes.
        </p>

        <h2>Fuite n°2 : aucun bouton de prise de rendez-vous visible</h2>
        <p>
          On l&apos;oublie souvent : un visiteur ne <em>cherche</em> pas un notaire. Il cherche à résoudre un
          problème (succession, achat immobilier, divorce). S&apos;il doit fouiller votre menu pour trouver
          comment vous contacter, il abandonne. La règle d&apos;or : un <strong>CTA « Prendre rendez-vous »
          visible dès le premier écran</strong>, dupliqué dans le header et après chaque grande section.
        </p>

        <h2>Fuite n°3 : le copywriting parle du notaire, pas du client</h2>
        <p>
          Les sites notariaux commencent presque tous par : <em>« Notre étude, fondée en 1957… »</em>. Honnêtement,
          ça n&apos;intéresse personne. Le visiteur veut savoir : <strong>vais-je être compris ? mon dossier
          sera-t-il traité rapidement ? combien ça va coûter ?</strong>. Le copy gagnant inverse la perspective :
        </p>
        <ul>
          <li>À la place de « nos compétences » → <em>« Vous héritez d&apos;un bien immobilier ? Voici les 3
            décisions qui vous attendent. »</em></li>
          <li>À la place de « notre équipe » → <em>« Qui vous accompagnera personnellement, et pourquoi. »</em></li>
          <li>À la place de « nos services » → <em>« Voici les situations où vous avez besoin d&apos;un notaire. »</em></li>
        </ul>

        <BlogCTA />

        <h2>Fuite n°4 : aucun élément de réassurance</h2>
        <p>
          Les notaires ne peuvent pas afficher de témoignages identifiés (encadré par le décret 2023-1297
          <sup>[4]</sup>). Mais ils peuvent — et doivent — montrer :
        </p>
        <ul>
          <li>L&apos;expérience cumulée de l&apos;équipe (« 47 ans cumulés en droit immobilier »).</li>
          <li>Les domaines d&apos;intervention détaillés, illustrés par des cas types anonymisés.</li>
          <li>Les agréments officiels (chambre, label « Notaire conseil du monde rural » le cas échéant).</li>
          <li>Les photos professionnelles des notaires et des clercs principaux.</li>
        </ul>

        <h2>Fuite n°5 : le mobile rend mal (pour de vrai, pas « responsive »)</h2>
        <p>
          « Responsive » ne veut rien dire si les boutons sont trop petits pour le pouce, si la police passe en
          11 px ou si le menu hamburger cache l&apos;essentiel. Sur mobile, les bonnes pratiques sont codifiées :
        </p>
        <ul>
          <li>Tous les CTA doivent faire au moins 44 × 44 px (norme tactile Apple/Google <sup>[3]</sup>).</li>
          <li>Le numéro de téléphone doit être cliquable (<code>tel:</code>) pour appel direct.</li>
          <li>Le formulaire de prise de rendez-vous doit tenir en moins de 5 champs.</li>
        </ul>

        <h2>Fuite n°6 : pas de SEO local activé</h2>
        <p>
          <strong>46 % des recherches Google ont une intention locale</strong> <sup>[2]</sup> : <em>« notaire
          Périgueux »</em>, <em>« notaire succession Bordeaux »</em>. Si votre site n&apos;est pas optimisé pour
          ces requêtes, vous êtes invisible dans le Google Map Pack, là où se concentre la majorité du trafic
          local. À vérifier :
        </p>
        <ul>
          <li>Google Business Profile catégorie « Notaire », rempli à 100 %, avec photos récentes.</li>
          <li>Adresse, téléphone, horaires identiques sur le site et sur Google.</li>
          <li>Une page dédiée par grand domaine (« Notaire succession [Ville] »).</li>
          <li>Avis Google sollicités systématiquement à la fin de chaque dossier réglé (dans les limites
            déontologiques <sup>[4]</sup>).</li>
        </ul>

        <h2>Fuite n°7 : pas de blog, pas de contenu, pas d&apos;autorité</h2>
        <p>
          Google valorise les sites qui apportent une vraie valeur informative. Pour un notaire, un blog avec 6
          à 10 articles bien rédigés sur les questions récurrentes (« quel notaire choisir pour une donation ? »,
          « délai d&apos;une succession en 2026 ») renforce significativement l&apos;autorité du domaine sur les
          requêtes longue traîne. C&apos;est aussi une ressource que vos clients partagent et revisitent.
        </p>

        <h2>Le diagnostic en 60 secondes</h2>
        <p>
          Faites le test sur votre site actuel. Vous avez :
        </p>
        <ul>
          <li>✅ Bouton de prise de rendez-vous visible dès la home ?</li>
          <li>✅ Vitesse de chargement mobile sous 3 secondes ?</li>
          <li>✅ Au moins une page dédiée par expertise (succession, immobilier, famille) ?</li>
          <li>✅ Google Business Profile rempli et alimentation régulière ?</li>
          <li>✅ Au moins 5 articles informatifs sur le site ?</li>
        </ul>
        <p>
          Si vous cochez <strong>moins de 3 cases sur 5</strong>, votre site fuit ses visiteurs. Ce n&apos;est pas
          dramatique : c&apos;est même une excellente nouvelle, parce que ce sont les correctifs les plus rapides à
          implémenter et les plus rentables. Une refonte WebReset est calibrée exactement pour cela : aller
          chercher les rendez-vous que votre site laisse passer, sans toucher à ce qui fonctionne déjà.
        </p>

        <BlogCTA />

        <ArticleSources sources={SOURCES} />
      </ArticleShell>
    </>
  )
}
