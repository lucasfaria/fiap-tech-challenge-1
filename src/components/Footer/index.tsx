'use client'

import { Container, Grid } from '@mui/material'
import * as S from './styles'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <S.Footer>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <h3>Serviços</h3>
            <ul>
              <li>
                <Link href="conta-corrente">Conta corrente</Link>
              </li>
              <li>
                <Link href="conta-pj">Conta PJ</Link>
              </li>
              <li>
                <Link href="cartao-de-credito">Cartão de crédito</Link>
              </li>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <h3>Contato</h3>
            <ul>
              <li>0800 004 0000</li>
              <li>
                <a href="mailto:meajuda@bytebank.com.br">
                  meajuda@bytebank.com.br
                </a>
              </li>
              <li>
                <a href="mailto:ouvidoria@bytebank.com.br">
                  ouvidoria@bytebank.com.br
                </a>
              </li>
            </ul>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }} className="social">
            <h3>Desenvolvido por Alura</h3>
            <img src="/img/logo-footer.svg" alt="" />
            <ul>
              <li>
                <a href="#">
                  <Image
                    width={30}
                    height={30}
                    src="/img/ico-insta.svg"
                    alt="ícone instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={30}
                    height={30}
                    src="/img/ico-whats.svg"
                    alt="ícone whatsapp"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Image
                    width={30}
                    height={30}
                    src="/img/ico-youtube.svg"
                    alt="ícone youtube"
                  />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </S.Footer>
  )
}
