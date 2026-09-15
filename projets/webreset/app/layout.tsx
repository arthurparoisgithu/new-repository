import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono, Cormorant_Garamond } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { CONTACT } from '@/lib/images'
import { SITE_URL, asset } from '@/lib/site-url'
import { DemoBanner } from '@/components/site/demo-banner'

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-serif' })

const SITE_NAME = 'WebReset'
const TITLE = 'WebReset — Refonte de site web pour notaires, avocats & professions libérales'
const DESCRIPTION =
  "Refonte de site web premium pour professions libérales. Arthur Parois transforme les sites de notaires, avocats, CGP, experts-comptables et architectes en véritables machines à prise de rendez-vous. Livraison en 7 à 10 jours, satisfait ou remboursé."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | WebReset',
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Arthur Parois' }],
  creator: 'Arthur Parois',
  publisher: 'WebReset',
  keywords: [
    'refonte site web notaire',
    'création site internet notaire',
    'site web pour avocat',
    'refonte site cabinet avocat',
    'site internet conseiller en gestion de patrimoine',
    'CGP site web',
    'refonte site expert-comptable',
    'site internet profession libérale',
    'agence web professions réglementées',
    'site premium notaire avocat',
    'agence digitale professions libérales',
    'prise de rendez-vous en ligne notaire',
    'conversion site web cabinet',
    'Arthur Parois WebReset',
  ],
  icons: {
    icon: asset('/favicon.svg'),
    shortcut: asset('/favicon.svg'),
    apple: asset('/favicon.svg'),
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description:
      "Des sites premium pensés pour convertir vos visiteurs en rendez-vous qualifiés. Notaires, avocats, CGP, experts-comptables, architectes.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WebReset — Refonte de site web pour professions libérales',
      },
    ],
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description:
      "Refonte de site web premium pour notaires, avocats, CGP & experts-comptables. Livraison en 7-10 jours. Satisfait ou remboursé.",
    images: ['/og-image.png'],
    creator: '@arthurparois',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Business',
}

// Structured data — JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: 'WebReset',
      alternateName: 'WebReset by Arthur Parois',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/og-image.png`,
      description: DESCRIPTION,
      email: CONTACT.email,
      priceRange: '€€€',
      areaServed: {
        '@type': 'Country',
        name: 'France',
      },
      founder: {
        '@type': 'Person',
        name: 'Arthur Parois',
        jobTitle: 'Fondateur & designer web',
        email: CONTACT.email,
      },
      serviceType: [
        'Refonte de site web',
        'Création de site internet',
        'Design UX/UI',
        'Copywriting professionnel',
        "Stratégie d'acquisition digitale",
      ],
      knowsAbout: [
        'Refonte site notaire',
        'Site web avocat',
        'Site internet CGP',
        'Site expert-comptable',
        'Site architecte',
        'Conversion web professions libérales',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'Offer',
      '@id': `${SITE_URL}/#offre`,
      name: 'Refonte complète de site web pour profession libérale',
      description:
        "Refonte complète de votre site : audit, design, copywriting, développement et mise en ligne. Satisfait ou remboursé. Paiement en 2 fois. Livraison en 7 à 10 jours.",
      price: '2800',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: "Combien de temps faut-il pour refaire mon site ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "La livraison se fait en 7 à 10 jours ouvrés à partir de la validation du brief, audit et copywriting inclus.",
          },
        },
        {
          '@type': 'Question',
          name: "Que couvre la garantie « satisfait ou remboursé » ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Si le site livré ne correspond pas au cahier des charges validé, vous êtes intégralement remboursé. Aucun risque pour vous.",
          },
        },
        {
          '@type': 'Question',
          name: "Travaillez-vous uniquement avec les notaires ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "WebReset accompagne toutes les professions libérales réglementées : notaires, avocats, CGP, experts-comptables, architectes et autres professions de confiance.",
          },
        },
        {
          '@type': 'Question',
          name: "Le paiement en 2 fois est-il avec ou sans frais ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Le paiement s'effectue en 2 fois sans frais : 50 % au lancement du projet, 50 % à la livraison.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} ${cormorant.variable} font-sans`}>
        <DemoBanner />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-right" />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
