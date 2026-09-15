import type { Metadata } from 'next'
import { SpecialtyPageLayout } from '@/components/specialty-layout'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: "Kiné épaule à Nantes — tendinopathie, capsulite, conflit sous-acromial",
  description:
    "Spécialiste de l'épaule à Nantes Chantenay : prise en charge des tendinopathies de la coiffe, capsulite rétractile, conflit sous-acromial, instabilité. Approche basée sur les preuves.",
  alternates: { canonical: '/specialites/epaule' },
}

export default function EpaulePage() {
  return (
    <SpecialtyPageLayout
      eyebrow="Pathologies de l'épaule"
      title={<><span className="text-primary">Épaule</span> douloureuse, raide ou instable</>}
      description="Tendinopathie de la coiffe, capsulite, conflit, instabilité, calcifications : un bilan clinique précis et une rééducation active fondée sur les preuves scientifiques pour retrouver une épaule fonctionnelle."
      image={SITE.images.shoulder}
      imageAlt="Anatomie de la coiffe des rotateurs et de l'épaule"
      conditions={[
        'Tendinopathies de la coiffe des rotateurs',
        'Conflit sous-acromial',
        'Capsulite rétractile (épaule gelée)',
        'Instabilité gléno-humérale',
        'Tendinopathie calcifiante',
        'Suite de chirurgie de l’épaule',
        'Disjonction acromio-claviculaire',
        'Bursites et péri-arthrites',
      ]}
      whenToConsult={[
        'Douleur d’épaule depuis plus de 7 à 10 jours',
        'Douleurs nocturnes qui vous réveillent',
        'Perte d’amplitude (peigne, dos, ceinéture…)',
        'Crac, accrochage, blocage en élévation',
        'Faiblesse persistante après un effort',
        'Suite immédiate d’une opération de l’épaule',
      ]}
      approach={[
        'Bilan clinique exhaustif (tests spécifiques de la coiffe)',
        'Thérapie manuelle gléno-humérale et scapulaire',
        'Exercices progressifs charge / contrôle moteur',
        'Programme à domicile court et reproductible',
        'Suivi par tests fonctionnels objectifs',
      ]}
      intro={
        <>
          <p>
            L’épaule est l’articulation la plus mobile du corps humain, et c’est aussi celle qui consulte
            le plus en cabinet de kinésithérapie. <strong>30 % des adultes</strong> connaîtront un épisode
            de douleur significative au cours de leur vie. La bonne nouvelle : la grande majorité des
            pathologies de l’épaule répondent <strong>excellemment à la rééducation</strong>, même quand l’IRM
            montre des lésions.
          </p>
          <p>
            J’ai approfondi cette spécialité lors de la formation « Épaule, pratique basée sur les preuves »
            (Azizz Youssef, Germain Delos, 2024-2025), qui synthétise les données scientifiques les plus
            récentes pour proposer une rééducation efficace et structurée.
          </p>
        </>
      }
      sections={[
        {
          heading: 'Les pathologies les plus fréquentes',
          content: (
            <>
              <h3>Tendinopathie de la coiffe des rotateurs</h3>
              <p>
                Représente <strong>70 % des consultations</strong> pour douleur d’épaule. Douleur antéro-latérale,
                aggravée par les élévations et la nuit. La rééducation par exercices progressifs chargés donne
                d’excellents résultats, comparables à la chirurgie sur les ruptures partielles.
              </p>
              <h3>Capsulite rétractile (« épaule gelée »)</h3>
              <p>
                Raideur progressive et globale en actif <em>et</em> passif. Évolue en 3 phases :
                douloureuse, raide, puis résolutive. Une <strong>kinésithérapie adaptée</strong> raccourcit
                significativement l’évolution naturelle (qui peut atteindre 18-24 mois sans traitement).
              </p>
              <h3>Conflit sous-acromial</h3>
              <p>
                Douleur en arc lors de l’élévation latérale entre 60° et 120°. Le travail spécifique sur le
                rythme scapulo-huméral et le centrage de la tête humérale est central dans la prise en charge.
              </p>
              <h3>Instabilité gléno-humérale</h3>
              <p>
                Après luxation ou en cas d’hyperlaxité. La rééducation vise à restaurer la <strong>stabilité
                dynamique active</strong> par renforcement de la coiffe et des stabilisateurs scapulaires.
              </p>
            </>
          ),
        },
        {
          heading: 'Le bilan : un temps essentiel',
          content: (
            <>
              <p>
                La première consultation d'1 heure permet un examen clinique complet :
              </p>
              <ul>
                <li>tests de la coiffe (Jobe, Patte, Belly press, Lift-off),</li>
                <li>tests de conflit (Neer, Hawkins),</li>
                <li>tests d’instabilité (appréhension, relocation),</li>
                <li>évaluation du rythme scapulo-thoracique,</li>
                <li>tests fonctionnels spécifiques à votre activité.</li>
              </ul>
              <p>
                À partir de ce bilan, je pose un <strong>diagnostic kinésithérapique précis</strong> et nous
                définissons ensemble les objectifs de la rééducation.
              </p>
            </>
          ),
        },
        {
          heading: 'La rééducation : exercices et thérapie manuelle',
          content: (
            <>
              <p>
                Mon protocole combine plusieurs outils :
              </p>
              <ul>
                <li><strong>Thérapie manuelle</strong> : mobilisations articulaires gléno-humérale et scapulo-thoracique, techniques de tissus mous, mobilisations cervicales (qui influencent l’épaule).</li>
                <li><strong>Exercices charge progressive</strong> : aujourd’hui considérés comme le traitement le plus efficace des tendinopathies (concept de « tendon loading »).</li>
                <li><strong>Travail neuromusculaire</strong> : restauration du rythme scapulo-huméral, contrôle moteur.</li>
                <li><strong>Programme à domicile</strong> : 5 à 10 minutes par jour, simple, reproductible.</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Faut-il opérer ou infiltrer ?',
          content: (
            <>
              <p>
                <strong>La rééducation bien conduite donne généralement d’aussi bons résultats que la chirurgie</strong>
                sur les tendinopathies non transfixiantes (étude FINSE 2018, méta-analyses Cochrane).
                L’infiltration peut soulager une crise hyperalgique, mais ne résout pas le problème
                mécanique sous-jacent.
              </p>
              <p>
                Au cabinet à Nantes, je travaille en collaboration avec votre médecin généraliste, votre
                rhumatologue ou votre chirurgien orthopédique pour vous orienter vers la solution la plus
                adaptée.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
