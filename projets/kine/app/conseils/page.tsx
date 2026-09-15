import type { Metadata } from 'next'
import { blogPosts } from '@/lib/content'
import { PageHero } from '@/components/page-hero'
import { ConseilsList } from './conseils-list'

export const metadata: Metadata = {
  title: 'Conseils & articles — Kiné Nantes Chantenay',
  description: 'Articles et conseils sur la lombalgie, la sciatique, l’épaule, le canal carpien, la course à pied et la ré-athlétisation par votre kiné à Nantes Chantenay.',
  alternates: { canonical: '/conseils' },
}

export default function ConseilsPage() {
  const posts = blogPosts
    .filter((p) => p.published)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())

  const categories = Array.from(new Set((posts ?? []).map((p) => p.category))).sort()

  return (
    <>
      <PageHero
        eyebrow="Conseils"
        title={<>Conseils & <span className="text-primary">articles</span></>}
        description="Comprendre votre douleur, connaître les bons exercices, savoir quand consulter : des articles pédagogiques basés sur la littérature scientifique récente."
        breadcrumb={[{ label: 'Accueil', href: '/' }, { label: 'Conseils' }]}
        cta={false}
      />
      <ConseilsList posts={posts ?? []} categories={categories} />
    </>
  )
}
