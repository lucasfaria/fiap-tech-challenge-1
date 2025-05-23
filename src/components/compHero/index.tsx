'use client'
import { Grid } from '@mui/material'
import * as S from './styles'

export default function Hero() {
  return (
    <S.HeroContainer>
      <Grid container spacing={2}>
        <Grid size={5} className="content">
          <S.Title>
            Experimente mais liberdade no controle da sua vida financeira.
            <br />
            Crie sua conta com a gente!
          </S.Title>
        </Grid>
        <Grid size={1}></Grid>
        <Grid size={6}>
          <img src="/img/ilustra-hero.svg" alt="" />
        </Grid>
      </Grid>
    </S.HeroContainer>
  )
}
