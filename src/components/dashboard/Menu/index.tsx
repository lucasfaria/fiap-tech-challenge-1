import Link from 'next/link'
import * as S from './styles'
import { useTheme } from '@mui/material'

export default function Menu() {
  const theme = useTheme()

  return (
    <S.Menu $color={theme.palette.primary.main}>
      <ul>
        <li className="active">
          <Link href="inicio">Início</Link>
        </li>
        <li>
          <Link href="transferencias">Transferências</Link>
        </li>
        <li>
          <Link href="investimentos">Investimentos</Link>
        </li>
        <li>
          <Link href="outros-servicos">Outros serviços</Link>
        </li>
      </ul>
    </S.Menu>
  )
}
