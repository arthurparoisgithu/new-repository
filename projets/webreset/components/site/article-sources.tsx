import { BookOpen } from 'lucide-react'

export type Source = {
  label: string
  href?: string
  ref: string
}

export function ArticleSources({ sources }: { sources: Source[] }) {
  if (!sources?.length) return null
  return (
    <aside className="not-prose mt-12 border-t border-border pt-8">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent font-medium">
        <BookOpen className="h-3.5 w-3.5" />
        Sources & références
      </div>
      <ol className="mt-4 space-y-2 text-sm text-foreground/70">
        {sources.map((s) => (
          <li key={s.ref} className="flex gap-3">
            <span className="flex-shrink-0 text-foreground/50 font-medium">[{s.ref}]</span>
            <div>
              {s.href ? (
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline break-words"
                >
                  {s.label}
                </a>
              ) : (
                <span className="text-foreground/80">{s.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-foreground/50">
        Article rédigé à partir de sources officielles (Conseil supérieur du notariat, Google Research) et d&apos;une
        observation directe du marché français. Les estimations tarifaires reflètent les fourchettes publiques des
        prestataires spécialisés notariat.
      </p>
    </aside>
  )
}
