import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

export function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-md border border-border bg-background p-7 hover:border-accent/40 transition-colors"
    >
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-accent">
        <span>{post.category}</span>
        <span className="text-foreground/30">•</span>
        <span className="flex items-center gap-1 text-foreground/60 normal-case tracking-normal">
          <Clock className="h-3 w-3" />
          {post.readingTime}
        </span>
      </div>
      <h3 className="mt-4 font-serif text-2xl md:text-[1.65rem] leading-[1.15] tracking-tight text-foreground group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="mt-3 text-sm text-foreground/70 leading-relaxed line-clamp-3">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between">
        <time dateTime={post.publishedAt} className="text-xs text-foreground/50">
          {date}
        </time>
        <span className="inline-flex items-center gap-1 text-sm text-foreground group-hover:text-accent transition-colors">
          Lire l&apos;article
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
