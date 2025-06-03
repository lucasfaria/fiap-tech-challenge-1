import { useEffect, useState } from 'react'
import * as S from './styles'
import { Box, Modal, useTheme } from '@mui/material'
import moment from 'moment'
import { Transaction, TransactionProps } from '@services/Transaction'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const service = new Transaction()

export default function CashFlow() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const theme = useTheme()
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const fetchTransactions = async () => {
    const data = await service.getTransactions()
    setTransactions(data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <S.CashFlowContainer>
      <h3>Extrato</h3>

      {transactions &&
        transactions.map((transaction) => (
          <S.Item
            key={transaction.id}
            className="transaction"
            $color={theme.palette.primary.main}
          >
            <div>
              <S.Month $color={theme.palette.primary.main}>
                {moment(transaction.date).locale('pt-br').format('MMMM')}
              </S.Month>
              <S.Type>{transaction.type}</S.Type>
              <S.Amount>
                {transaction.type === 'Transferência' ? '- R$ ' : 'R$ '}
                {transaction.value}
              </S.Amount>
            </div>
            <S.Date>
              {moment(transaction.date).locale('pt-br').format('L')}
            </S.Date>
            <S.Actions
              className="actions"
              $color={theme.palette.secondary.main}
            >
              <a href="" onClick={handleOpen}>
                <EditIcon color="info" />
              </a>
              <a href="">
                <DeleteIcon color="info" />
              </a>
            </S.Actions>
          </S.Item>
        ))}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}></Box>
      </Modal>
    </S.CashFlowContainer>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
