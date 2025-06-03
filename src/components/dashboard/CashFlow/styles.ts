import styled from 'styled-components'

export const CashFlowContainer = styled.div`
  background-color: var(--background);
  border-radius: var(--radius);
  padding: 32px 24px;

  h3 {
    color: #000;
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 24px;
  }
`

type ItemProps = {
  $color: string
}

export const Item = styled.div<ItemProps>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  position: relative;

  &:hover {
    .actions {
      display: block;
    }
  }

  & > div:first-child {
    border-bottom: solid 1px ${(props) => props.$color};
    width: 100%;
  }
`

export const Date = styled.div`
  align-items: center;
  color: var(--text-sec);
  display: flex;
  font-size: var(--body-font-size);
`

type MonthProps = {
  $color: string
}

export const Month = styled.p<MonthProps>`
  color: ${(props) => props.$color};
  font-size: var(--body-font-size);
  font-weight: 600;
  margin-bottom: 8px;
`

export const Type = styled.p``

export const Amount = styled.p`
  font-weight: 600;
  margin: 8px 0;
`

type ActionsProps = {
  $color: string
}

export const Actions = styled.div<ActionsProps>`
  background-color: #fff;
  box-sizing: border-box;
  align-items: center;
  bottom: 0;
  display: none;
  height: auto;
  justify-content: center;
  padding: 10px 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 96px;

  a {
    align-items: center;
    justify-content: center;
    background: ${(props) => props.$color};
    border-radius: 100%;
    display: flex;
    float: left;
    height: 40px;
    margin: 0 4px;
    width: 40px;
  }
`
