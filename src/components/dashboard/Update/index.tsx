import Btn from '@components/compButton'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { TransactionProps } from '@services/Transaction'
import { useState } from 'react'
import * as S from './styles'
import { useTransactionContext } from '@context/TransactionContext'

export default function Update({ id, value, type, onClose }: TransactionProps) {
  const [transactionType, setTransactionType] = useState<string | undefined>(
    type
  )

  const [amount, setAmount] = useState<number | undefined>(value)

  const { updateTransaction } = useTransactionContext()

  const update = async () => {
    if (id !== undefined && amount !== undefined) {
      await updateTransaction(id, {
        date: new Date().toISOString(),
        type: transactionType || '',
        value: amount,
      })
      if (onClose) onClose()
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value as string)
  }

  return (
    <S.ContainerActions>
      <h3>Editar transação</h3>

      <Box sx={{ marginTop: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="select-transaction-type-label" color="secondary">
            Tipo de transação
          </InputLabel>
          <Select
            labelId="select-transaction-type-label"
            id="select-transaction-type"
            value={transactionType}
            label="Tipo de transação"
            onChange={handleChange}
            color="secondary"
          >
            <MenuItem>Selecione o tipo de transação</MenuItem>
            <MenuItem value="Depósito">Depósito</MenuItem>
            <MenuItem value="Transferência">Transferência</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box component="div" sx={{ marginTop: 3 }}>
        <FormControl fullWidth>
          <TextField
            id="value"
            label="Valor"
            color="secondary"
            variant="outlined"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </FormControl>
      </Box>

      <Box component="div" sx={{ marginTop: 3 }}>
        <FormControl fullWidth>
          <Btn
            size="large"
            color="secondary"
            variant="contained"
            onClick={update}
          >
            Atualizar transação
          </Btn>
        </FormControl>
      </Box>
    </S.ContainerActions>
  )
}
