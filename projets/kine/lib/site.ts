import { asset } from './site-url'
export const SITE = {
  name: 'Thibaud Chiffoleau',
  fullName: 'Thibaud Chiffoleau — Masseur-Kinésithérapeute D.E.',
  shortName: 'Cabinet KSNB',
  cabinet: 'KSNB — Kiné Sport Nantes Beaulieu',
  rpps: '10108836544',
  phone: '02 72 02 48 76',
  phoneRaw: '+33272024876',
  doctolib:
    'https://www.doctolib.fr/masseur-kinesitherapeute/nantes/thibaud-chiffoleau',
  address: {
    street: '5 Boulevard Georges Mandel',
    postalCode: '44200',
    city: 'Nantes',
    district: 'Chantenay',
    full: '5 Boulevard Georges Mandel, 44200 Nantes',
  },
  geo: { lat: 47.21148, lng: -1.59194 },
  hours: [
    { day: 'Lundi', value: '08:00 — 19:30' },
    { day: 'Mardi', value: '08:00 — 19:30' },
    { day: 'Mercredi', value: '08:00 — 19:30' },
    { day: 'Jeudi', value: '08:00 — 19:30' },
    { day: 'Vendredi', value: '08:00 — 19:00' },
    { day: 'Samedi', value: 'Sur rendez-vous' },
    { day: 'Dimanche', value: 'Fermé' },
  ],
  // Photos réelles du praticien et de son cabinet, servies depuis public/images.
  // Les planches anatomiques et visuels d'articles restent sur le CDN du projet :
  // les fichiers de banque d'images d'origine étaient filigranés et sous licence.
  images: {
    hero: asset('/images/portrait-thibaud.jpg'),
    portrait: asset('/images/portrait-thibaud.jpg'),
    cabinet1: asset('/images/cabinet-1.jpg'),
    cabinet2: asset('/images/cabinet-2.jpg'),
    shoulder: 'https://cdn.abacus.ai/images/c9b0a2ea-fb62-4f42-9561-41d94ad81332.png',
    spine: 'https://cdn.abacus.ai/images/6962a8cb-eb86-410b-9ef7-ef36ae0529f9.png',
    nerve: 'https://cdn.abacus.ai/images/f471d165-0c33-4575-847a-3397ee34ae6f.png',
    sportsRehab: 'https://cdn.abacus.ai/images/81badc50-3ae6-406c-bee8-eec427cd58b6.png',
    mckenzie: 'https://cdn.abacus.ai/images/7edae8a1-13a8-4f37-b07f-292c3431d95b.png',
    manualTherapy: 'https://cdn.abacus.ai/images/0d440128-e2bc-4a77-9d24-3f468fd732ce.png',
    runningInjury: 'https://cdn.abacus.ai/images/cab69cbb-ddcc-4d3e-9d50-63e68a6b63dc.png',
    lowerBackPain: 'https://cdn.abacus.ai/images/75f7e92e-2b16-4f46-b893-510213e9a6f4.png',
    patient: 'https://cdn.abacus.ai/images/d83cc617-73ac-4bba-8151-99c479b81329.png',
    ergonomic: 'https://cdn.abacus.ai/images/15bc177c-1277-4d26-8de7-74637a446a6d.png',
  },
  transports: {
    tram: 'Lignes 2 et 3 — arrêts Mangin et Wattignies',
    bus: 'Ligne 26 — arrêt Mandel',
    parking: '2 Rue Anatole de Monzie, Nantes',
  },
} as const
