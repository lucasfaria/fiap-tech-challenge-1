'use client'

import SiteLayout from '@components/SiteLayout'
import NotFound from '@components/compNotFound'
import Seo from '@components/compSeo'

export default function PageNotFound() {
  return (
    <SiteLayout>
      <Seo
        title="404 - Página não encontrada"
        description="404 - Página não encontrada"
      />
      <NotFound />
    </SiteLayout>
  )
}
