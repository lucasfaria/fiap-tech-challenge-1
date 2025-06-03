'use client'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useTheme } from '@mui/material'
import { Transaction, TransactionProps } from '@services/Transaction'
import moment from 'moment'
import 'moment/locale/pt-br'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { User, UserProps } from '@services/User'

const transactionService = new Transaction()
const userService = new User()
moment.locale('pt-br')

export default function Welcome() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])
  const theme = useTheme()
  const [user, setUser] = useState<UserProps>()
  const [date, setDate] = useState<string | undefined>()

  const fetchUser = async () => {
    const data = await userService.getUser(1)
    setUser(data)
  }

  const fetchTransactions = async () => {
    const data = await transactionService.getTransactions()
    setTransactions(data)
  }

  const today = new Date()

  useEffect(() => {
    fetchUser()
    fetchTransactions()
    setDate(moment(today).format('dddd, DD/MM/YYYY'))
  }, [])

  const getTotal = () => {
    const total = transactions.reduce((total, transaction) => {
      if (transaction.type === 'Transferência') {
        return total - transaction.value
      }
      return total + transaction.value
    }, 0)

    return new Intl.NumberFormat('pt-BR').format(total)
  }

  return (
    <S.WelcomeContainer $background={theme.palette.secondary.main}>
      <div>
        <S.Name>{`Olá, ${user?.name}! :)`}</S.Name>

        <S.Date>{date}</S.Date>
      </div>
      <div>
        <RemoveRedEyeIcon color="warning" />
        <S.Account>Conta Corrente</S.Account>
        <S.Assets>{`R$ ${getTotal()}`}</S.Assets>
      </div>
    </S.WelcomeContainer>
  )
}
