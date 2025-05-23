import { Container, useTheme } from '@mui/material'
import * as S from './styles'

export default function Header() {
  const theme = useTheme()

  return (
    <S.Header $background={theme.palette.secondary.main}>
      <Container>
        <p>Joana da Silva Oliveira</p>
        [icone]
      </Container>
    </S.Header>
  )
}
