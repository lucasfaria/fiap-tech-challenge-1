import styled from 'styled-components'

type HeaderProps = {
  $background: string
}

type IconProps = {
  $color: string
}

export const Header = styled.header<HeaderProps>`
  background-color: ${({ $background }) => $background};
  margin-bottom: 24px;
  padding: 28px 0;

  .MuiContainer-root {
    align-items: center;
    display: flex;
    justify-content: flex-end;
  }
`

export const Icon = styled.div<IconProps>`
  align-items: center;
  border: solid 2px ${({ $color }) => $color};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 40px;
  width: 40px;
`

export const Name = styled.p`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding-right: 40px;
`
