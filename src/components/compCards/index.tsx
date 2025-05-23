'use client'

import { Grid } from '@mui/material'
import * as S from './styles'

export default function Cards() {
  return (
    <S.CardsContainer>
      <Grid container spacing={2}>
        <Grid size={12}>
          <h2>Vantagens do nosso banco:</h2>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={12}>
          <ul>
            <li>
              <img src="/img/ico-conta.svg" alt="" />
              <h3>Conta e cartão gratuitos</h3>
              <p>
                Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                isso: sem tarifa de manutenção.
              </p>
            </li>
            <li>
              <img src="/img/ico-saque.svg" alt="" />
              <h3>Saques sem custo</h3>
              <p>
                Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
              </p>
            </li>
            <li>
              <img src="/img/ico-pontos.svg" alt="" />
              <h3>Programa de pontos</h3>
              <p>
                Você pode acumular pontos com suas compras no crédito sem pagar
                mensalidade!
              </p>
            </li>
            <li>
              <img src="/img/ico-seguro.svg" alt="" />
              <h3>Seguro Dispositivos</h3>
              <p>
                Seus dispositivos móveis (computador e laptop) protegidos por
                uma mensalidade simbólica.
              </p>
            </li>
          </ul>
        </Grid>
      </Grid>
    </S.CardsContainer>
  )
}
