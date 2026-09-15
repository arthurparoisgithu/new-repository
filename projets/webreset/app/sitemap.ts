import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  const now = new Date()

  const homepageAnchors = [
    '',
    '#pour-qui',
    '#pilote',
    '#projets',
    '#methode',
    '#conformite',
    '#offre',
    '#a-propos',
    '#contact',
  ]

  const homepage = homepageAnchors.map((section) => ({
    url: `${baseUrl}/${section}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: section === '' ? 1.0 : 0.7,
  }))

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/audit`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/avis`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]

  const blogSlugs = [
    'charte-csn-2024-obligations-site-notaire',
    'prix-refonte-site-notaire-2026',
    'site-notaire-conversion-prise-rendez-vous',
  ]

  const blogPosts: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...homepage, ...staticPages, ...blogPosts]
}
