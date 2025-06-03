import type { AppProps } from 'next/app'
import '@css/dash-globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
