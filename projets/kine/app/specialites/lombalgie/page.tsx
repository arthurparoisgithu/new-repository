import type { Metadata } from 'next'
import { SpecialtyPageLayout } from '@/components/specialty-layout'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Kiné lombalgie à Nantes — méthode McKenzie, sciatique, hernie discale',
  description:
    "Mal de dos chronique ou aigu à Nantes ? Kinésithérapie spécialisée en lombalgie : méthode McKenzie, sciatique, cruralgie, hernie discale. Thérapie active basée sur les preuves au cabinet KSNB Chantenay.",
  alternates: { canonical: '/specialites/lombalgie' },
}

export default function LombalgiePage() {
  return (
    <SpecialtyPageLayout
      eyebrow="Rachis lombaire"
      title={<>Lombalgie & <span className="text-primary">méthode McKenzie</span> à Nantes</>}
      description="Lombalgie aiguë ou chronique, sciatique, cruralgie, hernie discale : une prise en charge structurée par la méthode McKenzie (MDT), thérapie manuelle et exercices personnalisés pour retrouver un dos qui fonctionne."
      image={SITE.images.spine}
      imageAlt="Anatomie de la colonne lombaire"
      conditions={[
        'Lombalgie aiguë (lumbago)',
        'Lombalgie chronique (> 3 mois)',
        'Hernie discale lombaire',
        'Sciatique et cruralgie',
        'Discopathie dégénérative',
        'Spondylolisthésis',
        'Stenose lombaire / canal lombaire étroit',
        'Suite de chirurgie du rachis',
      ]}
      whenToConsult={[
        'Mal de dos qui dure plus de 7 jours',
        'Sciatique ou cruralgie associée',
        'Récidives régulières de lombalgie',
        'Limitation pour les activités quotidiennes',
        'Après une opération du dos',
        'Avant un objectif sportif (course, marathon, ski)',
      ]}
      approach={[
        'Bilan McKenzie initial (centralisation directionnelle)',
        'Thérapie manuelle lombo-pelvienne',
        'Programme d’exercices auto-administrés',
        'Renforcement progressif du tronc',
        'Éducation thrapeutique : comprendre la douleur',
      ]}
      intro={
        <>
          <p>
            La lombalgie est la pathologie musculo-squelettique <strong>la plus fréquente</strong> :
            8 français sur 10 en souffrent au moins une fois dans leur vie. La grande majorité des
            lombalgies sont dites « non spécifiques » : pas de cause grave sous-jacente, mais une douleur
            qui peut devenir très invalidante.
          </p>
          <p>
            Au cabinet à Nantes Chantenay, je propose une prise en charge structurée basée sur la
            <strong> méthode McKenzie</strong> (formation officielle Partie A de l’Institut McKenzie France,
            2024) et sur les recommandations internationales en matière de lombalgie.
          </p>
        </>
      }
      sections={[
        {
          heading: "Lombalgie aiguë vs chronique : deux prises en charge différentes",
          content: (
            <>
              <p>
                <strong>La lombalgie aiguë</strong> (moins de 6 semaines) évolue spontanément
                favorablement dans 80 % des cas. La kiné vise à accélérer la récupération et à éviter la
                chronicisation : maintien de l’activité, levée de la peur du mouvement, exercices
                directionnels (McKenzie).
              </p>
              <p>
                <strong>La lombalgie chronique</strong> (plus de 3 mois) demande une approche plus
                globale : gestion de la douleur, restauration des capacités physiques, ergonomie,
                accompagnement bio-psycho-social. La formation « Lombalgie chronique » avec Joshua
                Lavallée que j’ai suivie en 2024 m’a apporté des outils spécifiques pour ces patients.
              </p>
            </>
          ),
        },
        {
          heading: "La méthode McKenzie (Mechanical Diagnosis & Therapy)",
          content: (
            <>
              <p>
                La méthode McKenzie est une approche mécanique du rachis fondée sur l’observation des
                <strong> réponses symptômes à des mouvements répétés</strong>. Le concept central : la
                <em> centralisation</em>, ou comment un mouvement directionnel spécifique va
                progressivement remonter la douleur de la jambe vers le bas du dos.
              </p>
              <p>
                Le bénéfice est double : on identifie le mouvement qui soulage <strong>et</strong> le patient
                apprend à le faire lui-même. Résultat : autonomie, moins de récidives, et un outil concret
                pour gérer les crises futures.
              </p>
            </>
          ),
        },
        {
          heading: 'Sciatique, cruralgie et hernie discale',
          content: (
            <>
              <p>
                La <strong>sciatique</strong> et la <strong>cruralgie</strong> sont des douleurs irradiant
                respectivement à l’arrière et à l’avant de la cuisse, dues à l’irritation d’une racine
                nerveuse lombaire. Dans 80 % des cas, elles sont liées à une hernie discale.
              </p>
              <p>
                La kinésithérapie est aujourd’hui le <strong>traitement de première intention</strong> : la
                grande majorité des hernies discales s’assouplissent et redeviennent indolores en 6 à 12
                semaines de prise en charge active. La chirurgie ne concerne qu’une minorité des cas
                (échec du traitement conservateur ou drapeaux rouges).
              </p>
            </>
          ),
        },
        {
          heading: 'Pas de bilan, pas de traitement personnalisé',
          content: (
            <>
              <p>
                Lors de la première consultation d'1 heure, j’identifie précisément :
              </p>
              <ul>
                <li>la présence ou non de drapeaux rouges (signaux de gravité à ne pas manquer),</li>
                <li>la classification McKenzie (syndrome de dérangement, dysfonction, postural),</li>
                <li>le mouvement directionnel qui améliore vos symptômes,</li>
                <li>les facteurs de risque de chronicisation (kinésiophobie, ergonomie…).</li>
              </ul>
              <p>
                À partir de là, nous construisons un programme de rééducation <strong>actif et concret</strong>
                qui vous rend autonome.
              </p>
            </>
          ),
        },
      ]}
    />
  )
}
