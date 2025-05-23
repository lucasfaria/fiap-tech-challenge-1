import { useTheme } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import * as S from './styles'

export default function Welcome() {
  const theme = useTheme()

  return (
    <S.WelcomeContainer $background={theme.palette.secondary.main}>
      <div>
        <S.Name>{`Olá, Joana! :)`}</S.Name>
        <S.Date>Quinta-feira, 08/09/2024</S.Date>
      </div>
      <div>
        <RemoveRedEyeIcon color="warning" />
        <S.Account>Conta Corrente</S.Account>
        <S.Assets>R$ 2.500,00</S.Assets>
      </div>
    </S.WelcomeContainer>
  )
}
