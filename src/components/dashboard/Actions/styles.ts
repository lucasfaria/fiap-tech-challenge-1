import styled from 'styled-components'

export const ContainerActions = styled.div`
  background-color: #cbcbcb;
  background-image: url(/img/bg-top-right.png), url(/img/bg-bottom-left.png);
  background-repeat: no-repeat, no-repeat;
  background-position: top right, bottom left;
  border-radius: var(--radius);
  flex: 1;
  margin-top: 24px;
  padding: 32px;

  h3 {
    color: #fff;
    font-size: var(--h3);
  }
`
