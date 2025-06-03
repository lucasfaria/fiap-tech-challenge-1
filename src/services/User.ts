export type UserProps = {
  id: number
  name: string
}

export class User {
  private baseUrl = process.env.NEXT_PUBLIC_ENDPOINT

  async getUser(id: number): Promise<UserProps> {
    const res = await fetch(`${this.baseUrl}/user/${id}`)
    return res.json()
  }
}
