'use client'

import { Container, useTheme } from '@mui/material'
import Btn from '../compButton'
import * as S from './styles'
import Link from 'next/link'

export default function Header() {
  const theme = useTheme()

  return (
    <S.Header>
      <Container>
        <Link href="/">
          <img
            src="/img/logo.png"
            alt="logo bytebank"
            className="logo"
            width="146"
          />
        </Link>

        <S.Menu $color={theme.palette.primary.main}>
          <li>
            <Link href="/sobre">Sobre</Link>
          </li>
          <li>
            <Link href="/servicos">Serviços</Link>
          </li>
        </S.Menu>

        <S.Buttons>
          <Btn variant="contained" color="primary">
            Abrir conta
          </Btn>
          <Btn href="/dashboard/" variant="outlined" color="primary">
            Já tenho conta
          </Btn>
        </S.Buttons>
      </Container>
    </S.Header>
  )
}
