import styled from 'styled-components'

type WelcomeProps = {
  $background: string
}

export const WelcomeContainer = styled.div<WelcomeProps>`
  background-color: ${(props) => props.$background};
  background-image: url(/img/bg-welcome-top-right.png),
    url(/img/bg-welcome-bottom-left.png);
  background-repeat: no-repeat, no-repeat;
  background-position: top right, bottom left;
  border-radius: var(--radius);
  color: #fff;
  display: flex;
  flex: unset;
  flex-direction: column;
  height: 530px;
  padding: 32px;

  & > div {
    width: 100%;
    margin-bottom: 60px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 370px;

    & > div {
      width: 50%;
      margin-bottom: 0;
    }
  }

  @media (min-width: 992px) {
    flex: 1;
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
