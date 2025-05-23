'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#47A138',
    },
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider theme={theme}>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
