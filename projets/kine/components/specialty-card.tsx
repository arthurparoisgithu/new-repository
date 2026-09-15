import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Specialty } from '@/lib/specialties'

export function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  return (
    <Link
      href={specialty.href}
      className="group flex flex-col rounded-xl bg-card overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-normal hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        <Image
          src={specialty.image}
          alt={specialty.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, 320px"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/0 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center rounded-full bg-card/95 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            {specialty.short}
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground">
          {specialty.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
          {specialty.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
          En savoir plus
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}
