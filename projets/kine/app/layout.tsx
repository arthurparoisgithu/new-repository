import type { Metadata } from 'next'
import { SITE_URL, asset } from '@/lib/site-url'
import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { StructuredData } from '@/components/structured-data'


const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['italic', 'normal'],
  weight: ['500', '600', '700'],
})

const siteUrl = SITE_URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      'Thibaud Chiffoleau — Kinésithérapeute du sport à Nantes Chantenay',
    template: '%s — Thibaud Chiffoleau, Kiné Nantes Chantenay',
  },
  description:
    "Cabinet de kinésithérapie KSNB à Nantes Chantenay. Spécialiste épaule, lombalgie, sciatique et névralgies. Méthode McKenzie, ré-athlétisation. Première consultation 1h, prise de rendez-vous en ligne.",
  keywords: [
    'kinésithérapeute Nantes',
    'kiné Nantes Chantenay',
    'kiné du sport Nantes',
    'kiné épaule Nantes',
    'kiné sciatique Nantes',
    'kiné lombalgie Nantes',
    'méthode McKenzie Nantes',
    'kiné névralgie cervicobrachiale Nantes',
    'kiné canal carpien Nantes',
    'ré-athlétisation Nantes',
  ],
  authors: [{ name: 'Thibaud Chiffoleau' }],
  icons: {
    icon: asset('/favicon.svg'),
    shortcut: asset('/favicon.svg'),
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title:
      'Thibaud Chiffoleau — Kinésithérapeute du sport à Nantes Chantenay',
    description:
      "Spécialiste épaule, lombalgie et névralgies. Approche basée sur les preuves, méthode McKenzie, ré-athlétisation.",
    siteName: 'Cabinet KSNB — Thibaud Chiffoleau',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Thibaud Chiffoleau — Kinésithérapeute du sport à Nantes Chantenay',
    description:
      "Spécialiste épaule, lombalgie et névralgies à Nantes. Première consultation 1h.",
    images: ['/og-image.png'],
  },
  alternates: { canonical: '/' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css"
        />
      </head>
      <body
        className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} ${playfair.variable} font-sans bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StructuredData />
          <SiteHeader />
          <main id="contenu" className="min-h-[60vh]">
            {children}
          </main>
          <SiteFooter />
          <Toaster />
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
