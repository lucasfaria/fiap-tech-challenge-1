import { useTransactionContext } from '@context/TransactionContext'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { Box, Modal, useTheme } from '@mui/material'
import moment from 'moment'
import { useState } from 'react'
import * as S from './styles'
import Update from '../Update'
import { TransactionProps } from '@services/Transaction'

export default function CashFlow() {
  const [open, setOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] =
    useState<TransactionProps | null>(null)

  const handleClose = () => setOpen(false)

  const handleOpenEditModal = (transaction: TransactionProps) => {
    setEditingTransaction(transaction)
    setOpen(true)
  }
  const theme = useTheme()

  const { transactions, deleteTransaction } = useTransactionContext()

  return (
    <S.CashFlowContainer>
      <h3>Extrato</h3>

      {transactions &&
        transactions
          .sort(
            (a, b) =>
              new Date(b.date ?? '').getTime() -
              new Date(a.date ?? '').getTime()
          )
          .slice(0, 6)
          .map((transaction) => (
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
                <div>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleOpenEditModal(transaction)
                    }}
                  >
                    <EditIcon color="info" />
                  </a>
                </div>
                <a
                  href="#"
                  onClick={() => {
                    if (
                      confirm('Tem certeza que deseja excluir essa transação?')
                    ) {
                      if (transaction.id !== undefined) {
                        deleteTransaction(transaction.id)
                      }
                    }
                  }}
                >
                  <DeleteIcon color="info" />
                </a>
              </S.Actions>
            </S.Item>
          ))}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={() => {
          handleClose()
          setEditingTransaction(null)
        }}
      >
        <Box sx={style}>
          {editingTransaction && (
            <Update
              id={editingTransaction.id}
              value={editingTransaction.value}
              type={editingTransaction.type}
              onClose={() => {
                handleClose()
                setEditingTransaction(null)
              }}
            />
          )}
        </Box>
      </Modal>
    </S.CashFlowContainer>
  )
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: 300,
  },
  bgcolor: 'transparent',
  border: 'none',
  boxShadow: 24,
  p: 0,
}
