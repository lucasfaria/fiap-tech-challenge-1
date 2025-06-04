export type TransactionProps = {
  id?: string | number
  date?: string
  type: string
  value: number
  onClose?: () => void
}

export class Transaction {
  private baseUrl = process.env.NEXT_PUBLIC_ENDPOINT

  // lista todas as transações para listar no Cashflow e também para gerar o saldo no Welcome
  async getTransactions(): Promise<TransactionProps[]> {
    const res = await fetch(`${this.baseUrl}/cashflow`)
    const data = await res.json()
    return Array.isArray(data) ? data : data.transactions || []
  }

  // salva uma nova transação
  async saveTransaction(data: TransactionProps): Promise<TransactionProps[]> {
    const res = await fetch(`${this.baseUrl}/cashflow`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Erro ao criar transação')
    return res.json()
  }

  // apaga uma transação
  async deleteTransaction(id: number | string): Promise<void> {
    await fetch(`${this.baseUrl}/cashflow/${id}`, {
      method: 'DELETE',
    })
  }

  // atualiza a transação
  async updateTransaction(
    id: number | string,
    data: TransactionProps
  ): Promise<TransactionProps> {
    const res = await fetch(`${this.baseUrl}/cashflow/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Erro ao atualizar transação')
    return res.json()
  }
}
