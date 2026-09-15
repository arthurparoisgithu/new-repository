import type { Metadata } from 'next'
import { SpecialtyPageLayout } from '@/components/specialty-layout'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Névralgies & neuropathies à Nantes — sciatique, NCB, canal carpien',
  description:
    "Spécialiste des névralgies à Nantes : sciatique, névralgie cervicobrachiale, canal carpien, syndrome du défilé thoraco-brachial. Thérapie manuelle neurodynamique au cabinet KSNB.",
  alternates: { canonical: '/specialites/nevralgies' },
}

export default function NevralgiesPage() {
  return (
    <SpecialtyPageLayout
      eyebrow="Névralgies & neuropathies"
      title={<>Douleurs <span className="text-primary">nerveuses</span> et fourmillements</>}
      description="Sciatique, névralgie cervicobrachiale, canal carpien, syndrome du défilé thoraco-brachial : une expertise pointue en thérapie manuelle et mobilisations neurodynamiques pour calmer les douleurs nerveuses."
      image={SITE.images.nerve}
      imageAlt="Trajet du nerf sciatique — illustration anatomique"
      conditions={[
        'Sciatique (radiculopathie L5/S1)',
        'Cruralgie (radiculopathie L3/L4)',
        'Névralgie cervicobrachiale',
        'Syndrome du canal carpien',
        'Syndrome du défilé thoraco-brachial',
        'Syndrome du piriforme',
        'Névralgie d’Arnold',
        'Névralgies post-traumatiques',
      ]}
      whenToConsult={[
        'Douleur en « trait de feu » dans le bras ou la jambe',
        'Fourmillements ou engourdissements',
        'Symptômes nocturnes (canal carpien typique)',
        'Faiblesse musculaire associée',
        'Position assise prolongée qui aggrave',
        'Douleur cervicale qui irradie dans le bras',
      ]}
      approach={[
        'Tests neurologiques et neurodynamiques ciblés',
        'Diagnostic différentiel précis (racine, plexus, périphérique)',
        'Mobilisations neurales (sliders / tensioners)',
        'Thérapie manuelle vertébrale et périphérique',
        "Éducation à la douleur et à la réactivation",
      ]}
      intro={
        <>
          <p>
            Les <strong>névralgies</strong> sont des douleurs liées à l’irritation ou à la compression
            d’une structure nerveuse — racine, plexus ou nerf périphérique. Elles se traduisent par des
            douleurs irradiantes (« électriques »), des fourmillements, et parfois une faiblesse
            musculaire. Mal comprises, elles entraînent souvent un cercle vicieux : peur du mouvement,
            déconditionnement, chronicisation.
          </p>
          <p>
            J’ai fait des névralgies un <strong>axe central de ma pratique</strong>. En 2024, j’ai suivi deux
            formations spécifiques avec Laurent Fabre et Guillaume Molinier : « Gestion des sciatiques
            et cruralgies en thérapie manuelle » et « Gestion des névralgies cervicobrachiales en
            thérapie manuelle ».
          </p>
        </>
      }
      sections={[
        {
          heading: 'Sciatique et cruralgie',
          content: (
            <>
              <p>
                Douleurs unilatérales irradiant dans la jambe, suivant le trajet d’une racine lombaire.
                Dans la grande majorité des cas, l’origine est une <strong>hernie discale</strong> ou une
                discopathie. La kiné vise à calmer l’irritation nerveuse et à redonner confiance dans le
                mouvement.
              </p>
              <p>
                Mes outils : tests neurodynamiques (Slump, SLR, prone knee bend), mobilisations
                neurales spécifiques, exercices de centralisation McKenzie, renforcement progressif du
                tronc.
              </p>
            </>
          ),
        },
        {
          heading: 'Névralgie cervicobrachiale (NCB)',
          content: (
            <>
              <p>
                C’est la « sciatique du bras » : douleur cervicale irradiant dans l’épaule, le bras, voire
                les doigts. Le diagnostic clinique repose sur les tests de Spurling, de distraction
                cervicale, et les tests neurodynamiques spécifiques (ULNT médian, radial, ulnaire).
              </p>
              <p>
                <strong>70 à 80 % des NCB</strong> évoluent favorablement en 6 à 12 semaines avec une
                kinésithérapie spécialisée. L’IRM n’est pas nécessaire systématiquement en première
                intention.
              </p>
            </>
          ),
        },
        {
          heading: 'Syndrome du canal carpien',
          content: (
            <>
              <p>
                Compression du nerf médian au poignet : fourmillements nocturnes des trois premiers
                doigts, parfois faiblesse de la pince. C’est la neuropathie d’enclavement la plus
                fréquente.
              </p>
              <p>
                Les formes légères à modérées <strong>répondent excellemment à la kiné</strong> (jusqu’à
                75 % de bons résultats sans chirurgie) avec : mobilisations neurodynamiques du nerf
                médian, thérapie manuelle des os du carpe, conseils ergonomiques, attelle de repos
                nocturne dans certains cas.
              </p>
            </>
          ),
        },
        {
          heading: 'Syndrome du défilé thoraco-brachial',
          content: (
            <>
              <p>
                Compression du paquet vasculo-nerveux entre le cou et l’aisselle. Symptômes :
                fourmillements du bras, fatigabilité et lourdeur, parfois sensation de gonflement.
                Les sportifs (overhead athletes : volley, natation, tennis) sont particulièrement
                concernés.
              </p>
              <p>
                Prise en charge : <strong>posture, ouverture thoracique, mobilisations de la 1re côte,
                renforcement scapulaire</strong>, et techniques spécifiques de mobilisation neurale.
              </p>
            </>
          ),
        },
        {
          heading: 'Pourquoi un kiné spécialisé ?',
          content: (
            <>
              <p>
                Les névralgies sont parfois mal traitées par défaut de diagnostic différentiel précis,
                ou par utilisation d’outils non adaptés à la composante neurale.
                Mon approche — <strong>tests spécifiques + mobilisations neurodynamiques + thérapie
                manuelle vertébrale + réactivation progressive</strong> — donne d’excellents résultats.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
