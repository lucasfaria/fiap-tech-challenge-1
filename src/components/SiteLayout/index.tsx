'use client'

import Header from '@components/Header'
import Footer from '@components/Footer'
import { Container, createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#47A138',
    },
    warning: {
      main: '#FF5031',
    },
  },
})

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  )
}
