'use client'

import { Grid } from '@mui/material'
import * as S from './styles'
import Btn from '@components/compButton'

export default function NotFound() {
  return (
    <S.ContainerNotFound>
      <Grid container spacing={2}>
        <Grid size={12} className="content">
          <h1>Ops! Não encontramos a página...</h1>
          <p>
            E olha que exploramos o universo procurando por ela!
            <br />
            Que tal voltar e tentar novamente?
          </p>

          <p>
            <Btn href="./" size="large" color="warning" variant="contained">
              Voltar ao início
            </Btn>
          </p>

          <img src="/img/404.svg" />
        </Grid>
      </Grid>
    </S.ContainerNotFound>
  )
}
