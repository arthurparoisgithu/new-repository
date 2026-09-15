import { SITE } from '@/lib/site'

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Physician', 'MedicalBusiness', 'LocalBusiness'],
        '@id': '#thibaud-chiffoleau',
        name: 'Thibaud Chiffoleau — Masseur-Kinésithérapeute D.E.',
        alternateName: 'Cabinet KSNB — Kiné Sport Nantes Beaulieu',
        description:
          "Masseur-kinésithérapeute du sport spécialisé épaule, lombalgie, sciatique et névralgies à Nantes Chantenay. Méthode McKenzie, thérapie active.",
        medicalSpecialty: [
          'PhysicalTherapy',
          'SportsMedicine',
          'Musculoskeletal',
        ],
        telephone: SITE.phoneRaw,
        url: '/',
        image: SITE.images.portrait,
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Carte Vitale, Carte bancaire, Chèque, Virement',
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          postalCode: SITE.address.postalCode,
          addressLocality: SITE.address.city,
          addressCountry: 'FR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '08:00',
            closes: '19:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '08:00',
            closes: '19:00',
          },
        ],
        sameAs: [SITE.doctolib],
        identifier: SITE.rpps,
        knowsLanguage: ['fr', 'en'],
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
