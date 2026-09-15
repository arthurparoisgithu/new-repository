import { Hero } from '@/components/site/hero'
import { PourQui } from '@/components/site/pour-qui'
import { Manifeste } from '@/components/site/manifeste'
import { Pilote } from '@/components/site/pilote'
import { Projets } from '@/components/site/projets'
import { Process } from '@/components/site/process'
import { Conformite } from '@/components/site/conformite'
import { Offre } from '@/components/site/offre'
import { APropos } from '@/components/site/a-propos'
import { Contact } from '@/components/site/contact'

export default function Page() {
  return (
    <>
      <Hero />
      <PourQui />
      <Manifeste />
      <Pilote />
      <Projets />
      <Process />
      <Conformite />
      <Offre />
      <APropos />
      <Contact />
    </>
  )
}
