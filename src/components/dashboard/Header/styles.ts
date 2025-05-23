import styled from 'styled-components'

type HeaderProps = {
  $background: string
}

export const Header = styled.header<HeaderProps>`
  background-color: ${({ $background }) => $background};
  height: 96px;
  margin-bottom: 24px;
`
