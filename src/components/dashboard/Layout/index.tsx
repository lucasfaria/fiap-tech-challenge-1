'use client'
import Header from '@dashboard/Header'
import { Container, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { Inter } from 'next/font/google'

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#47A138',
    },
    secondary: {
      main: '#004D61',
    },
    warning: {
      main: '#FF5031',
    },
    info: {
      main: '#fff',
    },
  },
})

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className={inter.className}>{children}</Container>
    </ThemeProvider>
  )
}
