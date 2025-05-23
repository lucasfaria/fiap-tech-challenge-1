import Head from 'next/head'

type SeoProps = {
  title: string
  description?: string
}

export default function Seo({ title, description }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  )
}
