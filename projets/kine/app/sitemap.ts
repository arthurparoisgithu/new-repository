import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/content'
import { SITE_URL } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = [
    '', '/specialites', '/specialites/epaule', '/specialites/lombalgie',
    '/specialites/nevralgies', '/specialites/kine-sport',
    '/a-propos', '/cabinet', '/rendez-vous', '/conseils', '/faq', '/tarifs',
  ].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: p === '' ? 1 : 0.8,
  }))

  const postUrls = blogPosts
    .filter((p) => p.published)
    .map((p) => ({
      url: `${SITE_URL}/conseils/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  return [...staticUrls, ...postUrls]
}
