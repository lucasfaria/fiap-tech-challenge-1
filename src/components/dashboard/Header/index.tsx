import { Container, useTheme } from '@mui/material'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import * as S from './styles'
import { User, UserProps } from '@services/User'
import { useEffect, useState } from 'react'

const userService = new User()

export default function Header() {
  const theme = useTheme()
  const [user, setUser] = useState<UserProps>()

  const fetchUser = async () => {
    const data = await userService.getUser(1)
    setUser(data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <S.Header $background={theme.palette.secondary.main}>
      <Container>
        <S.Name>{user?.name}</S.Name>
        <S.Icon $color={theme.palette.warning.main}>
          <PermIdentityIcon color="warning" />
        </S.Icon>
      </Container>
    </S.Header>
  )
}
