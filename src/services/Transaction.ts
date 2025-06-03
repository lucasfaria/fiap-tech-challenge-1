export type TransactionProps = {
  id: number
  date: string
  type: string
  value: number
}

export class Transaction {
  private baseUrl = process.env.NEXT_PUBLIC_ENDPOINT

  async getTransactions(): Promise<TransactionProps[]> {
    const res = await fetch(`${this.baseUrl}/cashflow`)
    return res.json()
  }
}
