'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import { Transaction, TransactionProps } from '@services/Transaction'

const transactionService = new Transaction()

interface TransactionContextData {
  transactions: TransactionProps[]
  total: number
  fetchTransactions: () => Promise<void>
  addTransaction: (data: TransactionProps) => Promise<void>
  deleteTransaction: (id: number | string) => Promise<void>
  updateTransaction: (
    id: number | string,
    data: TransactionProps
  ) => Promise<void>
}

const TransactionContext = createContext<TransactionContextData | undefined>(
  undefined
)

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  const fetchTransactions = async () => {
    try {
      const data = await transactionService.getTransactions()
      if (Array.isArray(data)) {
        setTransactions(data)
      } else {
        console.error('Resposta inesperada de getTransactions:', data)
      }
    } catch (err) {
      console.error('Erro ao buscar transações:', err)
    }
  }

  const addTransaction = async (data: TransactionProps) => {
    try {
      const updated = await transactionService.saveTransaction(data)
      if (Array.isArray(updated)) {
        setTransactions(updated)
      } else {
        fetchTransactions()
      }
    } catch (err) {
      console.error('Erro ao salvar transação:', err)
    }
  }

  const deleteTransaction = async (id: number | string) => {
    try {
      await transactionService.deleteTransaction(id)
      setTransactions((prev) => prev.filter((t) => t.id !== id))
    } catch (error) {
      console.error('Erro ao apagar transação', error)
    }
  }

  const updateTransaction = async (
    id: number | string,
    data: TransactionProps
  ) => {
    try {
      const updated = await transactionService.updateTransaction(id, data)
      setTransactions((prev) => prev.map((t) => (t.id === id ? updated : t)))
    } catch (err) {
      console.error('Erro ao atualizar transação', err)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  const total = transactions.reduce((total, transaction) => {
    const value = typeof transaction.value === 'number' ? transaction.value : 0
    return transaction.type === 'Transferência' ? total - value : total + value
  }, 0)

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        total,
        fetchTransactions,
        addTransaction,
        deleteTransaction,
        updateTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactionContext = () => {
  const context = useContext(TransactionContext)
  if (!context) throw new Error('Provider não encontrado.')
  return context
}
