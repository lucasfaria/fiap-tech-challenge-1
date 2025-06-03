import styled from 'styled-components'

type WelcomeProps = {
  $background: string
}

export const WelcomeContainer = styled.div<WelcomeProps>`
  background-color: ${(props) => props.$background};
  border-radius: var(--radius);
  color: #fff;
  display: flex;
  padding: 32px;

  & > div {
    width: 50%;
  }
`

export const Name = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 24px;
`

export const Date = styled.div`
  font-size: 13px;
`

export const Account = styled.p`
  font-size: 16px;
`

export const Assets = styled.p`
  font-size: 32px;
`
