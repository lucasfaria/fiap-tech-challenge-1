'use client'

import { Container, useTheme } from '@mui/material'
import Btn from '../compButton'
import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const theme = useTheme()

  return (
    <S.Header>
      <Container>
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="logo bytebank"
            className="logo"
            width={146}
            height={32}
          />
          <Image
            src="/img/logo-mobile.png"
            alt="logo bytebank"
            className="logo-mobile"
            width={26}
            height={26}
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
