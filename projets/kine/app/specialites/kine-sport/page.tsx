import type { Metadata } from 'next'
import { SpecialtyPageLayout } from '@/components/specialty-layout'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kiné du sport à Nantes — ré-athlétisation, retour au sport',
  description:
    "Kiné du sport à Nantes Chantenay : prise en charge des sportifs, prévention des blessures, ré-athlétisation post-LCA, retour au sport en confiance avec tests fonctionnels chiffrés.",
  alternates: { canonical: '/specialites/kine-sport' },
}

export default function KineSportPage() {
  return (
    <SpecialtyPageLayout
      eyebrow="Kiné du sport"
      title={<>Kiné du sport & <span className="text-primary">ré-athlétisation</span></>}
      description="De la lésion à la performance retrouvée : un accompagnement structuré du sportif amateur ou compétiteur, avec tests fonctionnels chiffrés avant le retour sur le terrain."
      image={SITE.images.sportsRehab}
      imageAlt="Sportif en séance de ré-athlétisation"
      conditions={[
        'Entorse de cheville',
        'Entorse du genou (LCA, LCP, MCL)',
        'Suite de ligamentoplastie',
        'Lésions musculaires (ischio, quadriceps, mollet)',
        'Tendinopathies (Achille, patellaire, fessier)',
        'Périostite tibiale',
        'Syndrome de l’essuie-glace',
        'Bilan préventif runner / footballeur',
      ]}
      whenToConsult={[
        "Après une lésion sportive récente",
        "En sortie d’opération (LCA, méniscectomie, coiffe…)",
        "Après la phase de kiné « classique » pour préparer le retour",
        "Avant un objectif sportif (marathon, raid, compétition)",
        "En cas de blessures à répétition",
        "Pour optimiser la performance et prévenir",
      ]}
      approach={[
        'Bilan complet : force, mobilité, contrôle moteur',
        'Programmation par phases (force → puissance → sport)',
        'Tests chiffrés pour objectiver la progression',
        'Travail collaboratif avec médecin / coach',
        'Validation des critères de retour au sport',
      ]}
      intro={
        <>
          <p>
            La kinésithérapie classique récupère la marche, l’amplitude et la force de base. Mais entre
            cette phase et le retour à votre sport, il y a un <strong>fossé méconnu</strong> que
            beaucoup d’athlètes traversent trop vite. Résultat : un taux de récidive très élevé
            (jusqu’à 30 % de re-rupture du LCA, par exemple).
          </p>
          <p>
            La <strong>ré-athlétisation</strong> est l’étape qui comble ce fossé. Elle reconstruit les
            qualités physiques spécifiques au sport pratiqué, puis les valide par des tests fonctionnels
            chiffrés avant tout retour sur le terrain.
          </p>
        </>
      }
      sections={[
        {
          heading: 'Les 4 phases de la ré-athlétisation',
          content: (
            <>
              <h3>Phase 1 — Reconstruction des qualités de base</h3>
              <p>Force maximale, contrôle moteur, stabilité articulaire dans les amplitudes utiles.</p>
              <h3>Phase 2 — Puissance et pliométrie</h3>
              <p>Réintroduction des forces explosives en conditions contrôlées : sauts, rebonds,
                accélérations courtes.</p>
              <h3>Phase 3 — Spécificité du sport</h3>
              <p>Reproduction des gestes du sport pratiqué, avec changements de direction, fatigue,
                prise de décision (cônes, ballon, duels).</p>
              <h3>Phase 4 — Reprise progressive sur le terrain</h3>
              <p>Reprise contrôlée des entraînements, puis matchs amicaux, avant le retour en
                compétition.</p>
            </>
          ),
        },
        {
          heading: 'Tests pour valider le retour au sport',
          content: (
            <>
              <p>
                Pas de retour au sport sans <strong>critères objectifs validés</strong> :
              </p>
              <ul>
                <li>force du membre lésé ≥ 90 % du membre sain (évaluée en isométrie ou isocinétisme),</li>
                <li>tests fonctionnels (single hop, triple hop, side hop, Y-balance test),</li>
                <li>contrôle dynamique correct (analyse vidéo des sauts et atterrissages),</li>
                <li>absence de douleur en charge,</li>
                <li>absence d’appréhension psychologique (échelle TSK ou ACL-RSI).</li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Prévention des blessures',
          content: (
            <>
              <p>
                Mieux vaut prévenir que rééduquer. Au cabinet, je propose des <strong>bilans préventifs</strong>
                pour les sportifs réguliers, particulièrement avant un objectif (marathon, semi, trail,
                compétition).
              </p>
              <p>
                Ce bilan inclut : analyse de la course, tests fonctionnels chiffrés, détection des
                points faibles, programme personnalisé de prévention. Les bénéfices : moins de
                blessures, meilleure performance, longevité sportive.
              </p>
            </>
          ),
        },
        {
          heading: 'Une expertise terrain',
          content: (
            <>
              <p>
                J’ai à cœur d’accompagner les sportifs amateurs comme les compétiteurs avec une approche
                exigeante mais pragmatique. Travail collaboratif avec votre médecin du sport, votre
                coach et votre staff. Objectif : <strong>vous remettre sur le terrain, en confiance, et
                durablement</strong>.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
