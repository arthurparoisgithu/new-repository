import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  Phone,
  Sparkles,
  Activity,
  Brain,
  Bone,
  HelpCircle,
  Stethoscope,
  Clock,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Star,
  MapPin,
  Bus,
  Train,
  ParkingCircle,
  Languages,
} from 'lucide-react'
import { blogPosts, testimonialRecords } from '@/lib/content'
import { SITE } from '@/lib/site'
import { SPECIALTIES } from '@/lib/specialties'
import { SpecialtyCard } from '@/components/specialty-card'
import { FadeIn, Stagger, StaggerItem, CountUp } from '@/components/animated'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function HomePage() {
  const testimonials = testimonialRecords
  const latestPosts = blogPosts
    .filter((p) => p.published)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative hero-soft overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" aria-hidden />
        {/* Signature curve — biomécanique / mouvement */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.18]"
          viewBox="0 0 1440 720"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="heroCurve" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="heroCurve2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M -100 480 C 240 320, 520 620, 820 380 S 1300 200, 1560 340"
            stroke="url(#heroCurve)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M -100 540 C 320 460, 600 700, 920 460 S 1380 280, 1560 420"
            stroke="url(#heroCurve2)"
            strokeWidth="1"
            strokeDasharray="2 6"
            fill="none"
          />
        </svg>
        <div className="container-page relative pt-12 pb-16 md:pt-20 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                Cabinet KSNB — Nantes Chantenay
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.02]">
                <span className="block font-display font-bold">
                  Kinésithérapeute du <span className="text-primary">sport</span>,
                </span>
                <span className="mt-2 block font-serif font-medium italic text-foreground/90 text-[0.85em] leading-[1.1]">
                  spécialisé épaule, lombalgie<br className="hidden md:block" /> &amp; névralgies.
                </span>
              </h1>
              <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Première consultation d’1 heure, plan de traitement personnalisé,
                thérapie active et méthode McKenzie. Je vous aide à soulager la douleur
                et à retrouver vos fonctions, durablement.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:bg-accent/90 transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  Prendre rendez-vous
                </Link>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  {SITE.phone}
                </a>
              </div>
              {/* Badges discrets — bas du hero */}
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground/90">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground/70" />
                  Conventionné secteur 1
                </span>
                <span className="text-muted-foreground/30" aria-hidden>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-muted-foreground/70" />
                  Carte Vitale &amp; tiers payant
                </span>
                <span className="text-muted-foreground/30" aria-hidden>•</span>
                <span className="inline-flex items-center gap-1.5">
                  <Languages className="h-3.5 w-3.5 text-muted-foreground/70" />
                  Français / English
                </span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
              <Image
                src={SITE.images.portrait}
                alt="Thibaud Chiffoleau, masseur-kinésithérapeute D.E. à Nantes"
                fill
                priority
                sizes="(max-width:1024px) 80vw, 480px"
                className="object-cover"
              />
            </div>
            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-lg)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <div className="font-semibold text-foreground">MKDE — IFM3R 2023</div>
                <div className="text-muted-foreground text-xs">RPPS {SITE.rpps}</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-[var(--shadow-lg)]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <div className="font-semibold text-foreground">1ère consultation</div>
                <div className="text-muted-foreground text-xs">1h — bilan complet</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats strip */}
        <div className="container-page relative pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-xl bg-card/80 backdrop-blur p-5 md:p-7 shadow-[var(--shadow-md)]">
            {/* 1ère consultation */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  <CountUp to={1} suffix="h" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Première consultation</div>
              </div>
            </div>
            {/* Formations continues */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  <CountUp to={7} suffix="+" />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Formations continues 24-25</div>
              </div>
            </div>
            {/* Spécialités */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                <Activity className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  <CountUp to={4} />
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Spécialités pointues</div>
              </div>
            </div>
            {/* Conventionné secteur 1 */}
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/15 text-secondary shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Secteur&nbsp;1
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">Conventionné, Carte Vitale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section id="specialites" className="py-20 bg-background">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              <Bone className="h-3.5 w-3.5" />
              Mes spécialités
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Une expertise pointue pour des résultats <span className="text-primary">durables</span>.
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Quatre domaines sur lesquels j’1ai approfondi ma pratique grâce à des
              formations continues récentes : épaule, rachis lombaire, névralgies, et
              accompagnement du sportif.
            </p>
          </FadeIn>

          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SPECIALTIES?.map?.((s) => (
              <StaggerItem key={s.slug}>
                <SpecialtyCard specialty={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 bg-muted/40">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[var(--shadow-lg)]">
              <Image
                src={SITE.images.manualTherapy}
                alt="Thérapie manuelle au cabinet à Nantes"
                fill
                sizes="(max-width:1024px) 100vw, 540px"
                className="object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-6 -right-6 max-w-xs rounded-xl bg-card p-5 shadow-[var(--shadow-lg)]">
              <p className="text-sm text-muted-foreground italic">
                « Mon objectif : vous rendre acteur de votre rééducation, pas
                dépendant de séances passives à répétition. »
              </p>
              <p className="mt-2 text-xs font-semibold text-foreground">
                Thibaud Chiffoleau
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <Stethoscope className="h-3.5 w-3.5" />
              Mon approche
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Une première consultation d’1 heure pour un diagnostic <span className="text-primary">précis</span>.
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              Je consacre du temps à chaque patient pour comprendre son histoire, examiner
              les structures impliquées, et construire un plan de traitement adapté à
              ses objectifs. Mon approche combine thérapie manuelle, exercices
              progressifs et éducation thérapeutique.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { t: 'Écoute & bilan', d: 'Comprendre vos symptômes et vos attentes' },
                { t: 'Examen clinique', d: 'Tests articulaires, neuro et fonctionnels' },
                { t: 'Diagnostic précis', d: 'Identification des structures en cause' },
                { t: 'Plan personnalisé', d: 'Thérapie active adaptée à vos objectifs' },
              ]?.map?.((b, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-[var(--shadow-sm)]">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <div>
                    <div className="font-semibold text-foreground text-sm">{b.t}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EXPERTISE / FORMATIONS */}
      <section className="py-20">
        <div className="container-page">
          <FadeIn className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-secondary mb-3">
              <GraduationCap className="h-3.5 w-3.5" />
              Formations & expertise
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Une pratique en formation <span className="text-primary">continue</span>, ancrée dans les preuves.
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Diplomé de l’1IFM3R des Pays-de-la-Loire en 2023, j’1ai suivi en 2024-2025
              plusieurs formations pointues pour vous offrir une prise en charge actuelle.
            </p>
          </FadeIn>

          <Stagger className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.06}>
            {[
              { t: 'Méthode McKenzie — Partie A', d: 'Diagnostic et thérapie mécanique du rachis lombaire (Institut McKenzie France).', icon: Bone },
              { t: 'Névralgies cervicobrachiales', d: 'Thérapie manuelle (Laurent Fabre / Guillaume Molinier).', icon: Brain },
              { t: 'Sciatiques & cruralgies', d: 'Prise en charge en thérapie manuelle (Fabre / Molinier).', icon: Brain },
              { t: 'Lombalgie chronique', d: 'Approche bio-psycho-sociale (Joshua Lavallée).', icon: Bone },
              { t: 'Épaule — Evidence-Based', d: 'Pratique basée sur les preuves (Youssef / Delos).', icon: Activity },
              { t: 'Mécaniques de la douleur', d: "Compréhension et gestion de la douleur (Chaumeil / Fabre / Wickham).", icon: Sparkles },
            ]?.map?.((f, i) => (
              <StaggerItem key={i}>
                <div className="h-full rounded-xl bg-card p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display font-semibold text-base text-foreground">{f.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ — Questions fréquentes */}
      <section className="py-20 bg-background">
        <div className="container-page grid lg:grid-cols-12 gap-10">
          <FadeIn className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              Questions fréquentes
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Vos questions, <span className="text-primary">les réponses</span>.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Tout ce qu&apos;il faut savoir avant la première consultation : ordonnance,
              tarifs, déroulement, profils accueillis. Pour aller plus loin, retrouvez
              la FAQ complète.
            </p>
            <Link
              href="/faq"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Voir la FAQ complète <span aria-hidden>→</span>
            </Link>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem
                value="q1"
                className="rounded-xl bg-card border-0 shadow-[var(--shadow-sm)] data-[state=open]:shadow-[var(--shadow-md)] px-5"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold py-5 hover:no-underline text-foreground">
                  Faut-il une ordonnance pour consulter ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                  En France, les séances de kinésithérapie sont prescrites par votre
                  médecin (généraliste ou spécialiste). Apportez l&apos;ordonnance lors de la
                  première consultation pour bénéficier du remboursement Sécurité
                  sociale. <strong className="text-foreground">L&apos;accès direct est possible</strong>{' '}
                  pour certaines pathologies, mais sans ordonnance, la prise en charge
                  ne sera pas remboursée.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="q2"
                className="rounded-xl bg-card border-0 shadow-[var(--shadow-sm)] data-[state=open]:shadow-[var(--shadow-md)] px-5"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold py-5 hover:no-underline text-foreground">
                  Combien de séances en moyenne ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                  Comptez en moyenne <strong className="text-foreground">6 à 12 séances</strong>{' '}
                  pour une lombalgie aiguë ou une tendinopathie, et{' '}
                  <strong className="text-foreground">10 à 20 séances</strong> pour
                  une pathologie chronique ou une rééducation post-opératoire. Lors du
                  bilan initial, je vous donne une estimation réaliste adaptée à votre
                  situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="q3"
                className="rounded-xl bg-card border-0 shadow-[var(--shadow-sm)] data-[state=open]:shadow-[var(--shadow-md)] px-5"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold py-5 hover:no-underline text-foreground">
                  Le tiers payant est-il pratiqué ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                  Oui. Je suis <strong className="text-foreground">conventionné secteur 1</strong>{' '}
                  et j&apos;applique le <strong className="text-foreground">tiers payant Sécurité sociale</strong>{' '}
                  : vous n&apos;avancez que la part complémentaire (selon votre mutuelle).
                  Carte Vitale acceptée. Paiement par chèque, carte bancaire ou
                  virement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="q4"
                className="rounded-xl bg-card border-0 shadow-[var(--shadow-sm)] data-[state=open]:shadow-[var(--shadow-md)] px-5"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold py-5 hover:no-underline text-foreground">
                  Première séance, que dois-je apporter ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                  Apportez : votre <strong className="text-foreground">ordonnance</strong>,
                  votre <strong className="text-foreground">Carte Vitale</strong>, votre{' '}
                  <strong className="text-foreground">carte de mutuelle</strong>, et tout{' '}
                  <strong className="text-foreground">examen complémentaire pertinent</strong>{' '}
                  (radio, IRM, scanner, comptes-rendus opératoires). Prévoyez une tenue
                  confortable permettant un examen clinique (short ou legging selon la
                  zone concernée).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="q5"
                className="rounded-xl bg-card border-0 shadow-[var(--shadow-sm)] data-[state=open]:shadow-[var(--shadow-md)] px-5"
              >
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold py-5 hover:no-underline text-foreground">
                  Acceptez-vous les sportifs, les enfants, les personnes âgées ?
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground pb-5 leading-relaxed">
                  J&apos;accueille les <strong className="text-foreground">adultes et adolescents</strong>{' '}
                  (sportifs amateurs, sportifs de haut niveau, actifs, seniors). Je suis
                  particulièrement formé à la prise en charge du{' '}
                  <strong className="text-foreground">sportif</strong> (ré-athlétisation,
                  retour au sport post-blessure). En revanche, je{' '}
                  <strong className="text-foreground">ne prends pas en charge</strong>{' '}
                  les pathologies pédiatriques, vestibulaires ni respiratoires —
                  je vous orienterai vers un confrère spécialisé si besoin.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS — Vrais avis Google */}
      <section className="py-20 bg-primary/5">
        <div className="container-page">
          <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground mb-3">
                <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                Avis Google vérifiés
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Ils ont retrouvé <span className="text-primary">le mouvement</span>.
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent" />
                  ))}
                </div>
                <span className="text-base font-semibold text-foreground">5,0/5</span>
                <span className="text-sm text-muted-foreground">— 7 avis Google</span>
              </div>
            </div>
            <a
              href="https://www.google.com/search?q=Cabinet+de+kin%C3%A9sith%C3%A9rapie+Thibaud+Chiffoleau"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 self-start md:self-end text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Voir tous les avis sur Google <span aria-hidden>→</span>
            </a>
          </FadeIn>
          <Stagger className="mt-10 grid md:grid-cols-2 gap-5" staggerDelay={0.08}>
            {testimonials?.map?.((t) => (
              <StaggerItem key={t.id}>
                <article className="h-full rounded-xl bg-card p-6 md:p-7 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: t?.rating ?? 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent" />
                      ))}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-semibold text-secondary">
                      {t?.treatment}
                    </span>
                  </div>
                  <Quote className="h-7 w-7 text-primary/30 mt-4" />
                  <p className="mt-2 text-base leading-relaxed text-foreground/90 italic">
                    « {t?.content} »
                  </p>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                      {t?.name?.split?.(' ')?.[0]?.[0] ?? '?'}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">{t?.name}</div>
                      <div className="text-xs text-muted-foreground">{t?.role}</div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* LATEST POSTS */}
      {latestPosts && latestPosts?.length > 0 && (
        <section className="py-20">
          <div className="container-page">
            <FadeIn className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                  Conseils
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                  Derniers conseils & articles.
                </h2>
              </div>
              <Link
                href="/conseils"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Tous les articles <span aria-hidden>→</span>
              </Link>
            </FadeIn>
            <Stagger className="mt-10 grid md:grid-cols-3 gap-5">
              {latestPosts?.map?.((p) => (
                <StaggerItem key={p.id}>
                  <Link
                    href={`/conseils/${p.slug}`}
                    className="group flex flex-col h-full rounded-xl bg-card overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all hover:-translate-y-0.5"
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
                    <div className="p-5">
                      <span className="inline-flex items-center rounded-full bg-secondary/10 px-2.5 py-0.5 text-[11px] font-semibold text-secondary">
                        {p.category}
                      </span>
                      <h3 className="mt-3 font-display text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                      <span className="mt-3 inline-block text-xs text-muted-foreground">
                        {p.readTime} min de lecture
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* ACCESS / CONTACT */}
      <section id="acces" className="py-20 bg-muted/40">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-start">
          <FadeIn className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <MapPin className="h-3.5 w-3.5" />
              Accès & contact
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Cabinet KSNB — Nantes <span className="text-primary">Chantenay</span>.
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Au cœur du quartier Chantenay, le cabinet est facilement accessible en
              tramway, bus ou voiture, en rez-de-chaussée.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>
                  <strong className="text-foreground">{SITE.address.street}</strong>
                  <br />{SITE.address.postalCode} {SITE.address.city}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Train className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Tramway :</strong> {SITE.transports.tram}</span>
              </li>
              <li className="flex items-start gap-3">
                <Bus className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Bus :</strong> {SITE.transports.bus}</span>
              </li>
              <li className="flex items-start gap-3">
                <ParkingCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Parking :</strong> {SITE.transports.parking}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <a href={`tel:${SITE.phoneRaw}`} className="text-foreground hover:text-primary"><strong>{SITE.phone}</strong></a>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/rendez-vous"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:bg-accent/90 transition-all"
              >
                <Calendar className="h-4 w-4" />
                Prendre rendez-vous
              </Link>
              <Link
                href="/cabinet"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Détails du cabinet
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[var(--shadow-lg)]">
              <Image
                src={SITE.images.cabinet1}
                alt="Salle de traitement du cabinet KSNB à Nantes Chantenay"
                fill
                sizes="(max-width:1024px) 100vw, 720px"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary p-10 md:p-16 text-primary-foreground shadow-[var(--shadow-lg)]">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
              aria-hidden
            />
            <div className="relative max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                Prêt à retrouver votre mobilité ?
              </h2>
              <p className="mt-4 text-base md:text-lg text-primary-foreground/85">
                Réservez votre première consultation d’1 heure en ligne, 24/7. Je vous
                propose un créneau dans les meilleurs délais.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/rendez-vous"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:bg-accent/90 transition-all"
                >
                  <Calendar className="h-5 w-5" />
                  Réserver sur Doctolib
                </Link>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-md bg-card/15 backdrop-blur px-6 py-3.5 text-base font-semibold text-primary-foreground hover:bg-card/25 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}