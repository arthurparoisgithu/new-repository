'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Stagger, StaggerItem } from '@/components/animated'
import { Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  imageUrl: string
  imageAlt: string
  readTime: number
}

export function ConseilsList({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [active, setActive] = useState<string>('Tous')

  const filtered = useMemo(() => {
    if (active === 'Tous') return posts ?? []
    return (posts ?? []).filter((p) => p?.category === active)
  }, [posts, active])

  const tabs = ['Tous', ...(categories ?? [])]

  return (
    <section className="py-12">
      <div className="container-page">
        <div className="flex items-center gap-2 flex-wrap mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-2">
            <Filter className="h-3.5 w-3.5" /> Filtrer
          </span>
          {tabs?.map?.((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                'px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors',
                active === c
                  ? 'bg-primary text-primary-foreground shadow-[var(--shadow-sm)]'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.05}>
          {filtered?.map?.((p) => (
            <StaggerItem key={p.id}>
              <Link
                href={`/conseils/${p.slug}`}
                className="group flex h-full flex-col rounded-xl bg-card overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all hover:-translate-y-0.5"
              >
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={p.imageUrl}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width:768px) 100vw, 360px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="inline-flex items-center self-start rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-semibold text-secondary">
                    {p?.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                    {p?.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{p?.excerpt}</p>
                  <span className="mt-3 inline-block text-xs text-muted-foreground">{p?.readTime} min de lecture</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {filtered?.length === 0 && (
          <p className="text-center text-muted-foreground py-10">Aucun article dans cette catégorie.</p>
        )}
      </div>
    </section>
  )
}
