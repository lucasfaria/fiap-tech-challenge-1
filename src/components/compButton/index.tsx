import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'

interface BtnProps extends ButtonProps {
  children: React.ReactNode
}

const ByteButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  lineHeight: 1.5,
})

export default function Btn({
  href,
  variant,
  color,
  children,
  ...props
}: BtnProps) {
  return (
    <ByteButton href={href} variant={variant} color={color} {...props}>
      {children}
    </ByteButton>
  )
}
