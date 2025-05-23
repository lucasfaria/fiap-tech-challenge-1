import Cards from '@components/compCards'
import Hero from '@components/compHero'
import Seo from '@components/compSeo'
import SiteLayout from '@components/SiteLayout'

export default function Home() {
  return (
    <SiteLayout>
      <Seo title="BiteBank" description="BiteBank" />
      <Hero />
      <Cards />
    </SiteLayout>
  )
}
