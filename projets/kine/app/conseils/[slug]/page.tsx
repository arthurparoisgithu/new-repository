import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, ArrowLeft, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/content'
import { FadeIn } from '@/components/animated'
import { SITE } from '@/lib/site'

type Props = { params: { slug: string } }

/** L'export statique a besoin de connaître les articles à pré-rendre. */
export function generateStaticParams() {
  return blogPosts.filter((p) => p.published).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === (params?.slug ?? '')) ?? null
  if (!post) return { title: 'Article introuvable' }
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/conseils/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.imageUrl }],
      type: 'article',
    },
  }
}

function renderMarkdown(md: string): string {
  const lines = (md ?? '').split('\n')
  let html = ''
  let inList = false
  let inOl = false
  for (let raw of lines) {
    let line = raw.trim()
    if (!line) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOl) { html += '</ol>'; inOl = false }
      continue
    }
    // Inline transforms
    line = line
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    if (line.startsWith('### ')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOl) { html += '</ol>'; inOl = false }
      html += `<h3>${line.slice(4)}</h3>`
    } else if (line.startsWith('## ')) {
      if (inList) { html += '</ul>'; inList = false }
      if (inOl) { html += '</ol>'; inOl = false }
      html += `<h2>${line.slice(3)}</h2>`
    } else if (/^[-*] /.test(line)) {
      if (!inList) { html += '<ul>'; inList = true }
      html += `<li>${line.slice(2)}</li>`
    } else if (/^\d+\. /.test(line)) {
      if (!inOl) { html += '<ol>'; inOl = true }
      html += `<li>${line.replace(/^\d+\. /, '')}</li>`
    } else {
      if (inList) { html += '</ul>'; inList = false }
      if (inOl) { html += '</ol>'; inOl = false }
      html += `<p>${line}</p>`
    }
  }
  if (inList) html += '</ul>'
  if (inOl) html += '</ol>'
  return html
}

export default function PostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === (params?.slug ?? '')) ?? null
  if (!post) notFound()

  const related = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id && p.published)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post?.title,
    description: post?.excerpt,
    image: post?.imageUrl,
    datePublished: post?.publishedAt?.toISOString?.(),
    dateModified: post?.updatedAt?.toISOString?.(),
    author: { '@type': 'Person', name: 'Thibaud Chiffoleau' },
    publisher: { '@type': 'Organization', name: 'Cabinet KSNB — Thibaud Chiffoleau' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <article>
        <section className="hero-soft border-b border-border">
          <div className="container-page py-10 md:py-14">
            <Link href="/conseils" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
              <ArrowLeft className="h-4 w-4" /> Retour aux conseils
            </Link>
            <div className="mt-5 grid lg:grid-cols-12 gap-10 items-center">
              <FadeIn className="lg:col-span-7">
                <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary uppercase tracking-wider">{post.category}</span>
                <h1 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">{post.title}</h1>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime} min de lecture</span>
                  <span className="inline-flex items-center gap-1.5">Par Thibaud Chiffoleau</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.1} className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[var(--shadow-lg)] bg-muted">
                  <Image src={post.imageUrl} alt={post.imageAlt} fill priority sizes="(max-width:1024px) 100vw, 480px" className="object-cover" />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-page grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div
                className="prose-medical max-w-none"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(post?.content ?? '') }}
              />
              <div className="mt-10 rounded-xl bg-primary/5 p-6 md:p-8">
                <h3 className="font-display text-xl font-bold text-foreground">Besoin d’un avis professionnel ?</h3>
                <p className="mt-2 text-muted-foreground">Réservez une première consultation d’1 heure au cabinet à Nantes Chantenay pour un bilan personnalisé.</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/rendez-vous" className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-sm)] hover:bg-accent/90"><Calendar className="h-4 w-4" /> Prendre rendez-vous</Link>
                  <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted">{SITE.phone}</a>
                </div>
              </div>
            </div>

            {related && related?.length > 0 && (
              <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24 self-start">
                <h3 className="font-display text-base font-bold text-foreground uppercase tracking-wider">Articles liés</h3>
                {related?.map?.((r) => (
                  <Link key={r.id} href={`/conseils/${r.slug}`} className="group flex gap-3 rounded-xl bg-card p-3 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow">
                    <div className="relative h-20 w-28 shrink-0 rounded-md overflow-hidden bg-muted">
                      <Image src={r.imageUrl} alt={r.imageAlt} fill sizes="112px" className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary">{r.category}</span>
                      <p className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">{r.title}</p>
                    </div>
                  </Link>
                ))}
              </aside>
            )}
          </div>
        </section>
      </article>
    </>
  )
}
