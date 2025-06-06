import Btn from '@components/compButton'
import { useTransactionContext } from '@context/TransactionContext'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { TransactionProps } from '@services/Transaction'
import { useState } from 'react'
import * as S from './styles'

export default function Actions() {
  const [transactionType, setTransactionType] = useState<string | undefined>('')
  const [value, setValue] = useState<number | undefined>(0)
  const { addTransaction } = useTransactionContext()

  const handleChange = (event: SelectChangeEvent) => {
    setTransactionType(event.target.value as string)
  }

  const saveTransaction = async () => {
    if (!transactionType || !value) return

    await addTransaction({
      id: Date.now().toString(),
      date: new Date().toISOString(),
      type: transactionType,
      value: value,
    } as TransactionProps)

    setValue(0)
    setTransactionType('')
  }

  return (
    <S.ContainerActions>
      <h3>Nova transação</h3>

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
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </FormControl>
      </Box>

      <Box component="div" sx={{ marginTop: 3 }}>
        <FormControl fullWidth>
          <Btn
            size="large"
            color="secondary"
            variant="contained"
            onClick={saveTransaction}
          >
            Concluir transação
          </Btn>
        </FormControl>
      </Box>
    </S.ContainerActions>
  )
}
