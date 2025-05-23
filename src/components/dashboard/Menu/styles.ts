import styled from 'styled-components'

type MenuProps = {
  $color: string
}

export const Menu = styled.div<MenuProps>`
  background-color: var(--background);
  border-radius: var(--radius);
  height: calc(100vh - 120px);

  ul {
    padding: 24px;

    li {
      border-bottom: solid 1px #000000;
      list-style: none;
      text-align: center;

      a {
        color: #000;
        display: inline-block;
        padding: 16px 0;
      }

      &:last-child {
        border-bottom: none;
      }

      &.active {
        a {
          color: ${(props) => props.$color};
          font-weight: bold;
        }
      }
      &:hover {
        a {
          color: ${(props) => props.$color};
        }
      }
    }
  }
`
