import Link from 'next/link'
import { Clock, ChevronLeft } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'
import { POSTS } from '@/lib/blog'
import { BlogCard } from './blog-card'

export function ArticleShell({
  post,
  children,
}: {
  post: BlogPost
  children: React.ReactNode
}) {
  const date = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article className="relative">
      {/* Article header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-5 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Tous les articles
          </Link>
          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-accent">
            <span>{post.category}</span>
            <span className="text-foreground/30">•</span>
            <span className="flex items-center gap-1 text-foreground/60 normal-case tracking-normal">
              <Clock className="h-3 w-3" />
              {post.readingTime} de lecture
            </span>
          </div>
          <h1 className="mt-5 font-serif text-4xl md:text-5xl leading-[1.08] tracking-tight text-foreground">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 flex items-center gap-3 pt-6 border-t border-border">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-sm">
              AP
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Arthur Parois</p>
              <p className="text-xs text-foreground/60">
                <time dateTime={post.publishedAt}>{date}</time>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Article body */}
      <div className="mx-auto max-w-3xl px-5 md:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-blockquote:border-accent prose-blockquote:text-foreground/80 prose-blockquote:not-italic">
          {children}
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-8">
            <p className="text-xs uppercase tracking-[0.22em] text-accent font-medium">À lire ensuite</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground tracking-tight">
              Continuer la lecture
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
