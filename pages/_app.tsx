import type { AppProps } from 'next/app'
import { TransactionProvider } from '@context/TransactionContext'
import '@css/dash-globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}
