'use client'

import { Grid } from '@mui/material'
import * as S from './styles'
import Image from 'next/image'

export default function Cards() {
  return (
    <S.CardsContainer>
      <Grid container spacing={2}>
        <Grid size={12}>
          <h2>Vantagens do nosso banco:</h2>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} className="card">
          <Image
            src="/img/ico-conta.svg"
            width={73}
            height={56}
            alt="Conta e cartão gratuitos"
          />
          <h3>Conta e cartão gratuitos</h3>
          <p>
            Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso:
            sem tarifa de manutenção.
          </p>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} className="card">
          <img
            src="/img/ico-saque.svg"
            width={73}
            height={56}
            alt="Saques sem custo"
          />
          <h3>Saques sem custo</h3>
          <p>Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.</p>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} className="card">
          <img
            src="/img/ico-pontos.svg"
            width={73}
            height={56}
            alt="Programa de pontos"
          />
          <h3>Programa de pontos</h3>
          <p>
            Você pode acumular pontos com suas compras no crédito sem pagar
            mensalidade!
          </p>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} className="card">
          <img
            src="/img/ico-seguro.svg"
            width={73}
            height={56}
            alt="Seguro Dispositivos"
          />
          <h3>Seguro Dispositivos</h3>
          <p>
            Seus dispositivos móveis (computador e laptop) protegidos por uma
            mensalidade simbólica.
          </p>
        </Grid>
      </Grid>
    </S.CardsContainer>
  )
}
