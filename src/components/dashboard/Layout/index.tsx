'use client'
import '@css/dash-globals.css'
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
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider theme={theme}>
          <Header />
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
