'use client'
import { Grid } from '@mui/material'
import * as S from './styles'
import Image from 'next/image'

export default function Hero() {
  return (
    <S.HeroContainer>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 5 }} className="content">
          <S.Title>
            Experimente mais liberdade no controle da sua vida financeira.
            <br />
            Crie sua conta com a gente!
          </S.Title>
        </Grid>
        <Grid size={{ xs: 12, lg: 1 }}></Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Image width={661} height={412} src="/img/ilustra-hero.svg" alt="" />
        </Grid>
      </Grid>
    </S.HeroContainer>
  )
}
