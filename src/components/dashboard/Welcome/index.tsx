'use client'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useTheme } from '@mui/material'
import { User, UserProps } from '@services/User'
import moment from 'moment'
import 'moment/locale/pt-br'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { useTransactionContext } from '@context/TransactionContext'

const userService = new User()
moment.locale('pt-br')

export default function Welcome() {
  const { total } = useTransactionContext()

  const theme = useTheme()
  const [user, setUser] = useState<UserProps>()
  const [date, setDate] = useState<string | undefined>()

  const fetchUser = async () => {
    const data = await userService.getUser(1)
    setUser(data)
  }

  const today = new Date()

  useEffect(() => {
    fetchUser()

    setDate(moment(today).format('dddd, DD/MM/YYYY'))
  }, [])

  return (
    <S.WelcomeContainer $background={theme.palette.secondary.main}>
      <div>
        <S.Name>{`Olá, ${user?.name}! :)`}</S.Name>

        <S.Date>{date}</S.Date>
      </div>
      <div>
        <RemoveRedEyeIcon color="warning" />
        <S.Account>Conta Corrente</S.Account>
        <S.Assets>R$ {total.toFixed(2)}</S.Assets>
      </div>
    </S.WelcomeContainer>
  )
}
