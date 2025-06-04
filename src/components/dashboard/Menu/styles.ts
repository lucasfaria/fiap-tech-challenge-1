import styled from 'styled-components'

type MenuProps = {
  $color: string
}

export const Menu = styled.div<MenuProps>`
  border-radius: var(--radius);

  ul {
    display: flex;
    justify-content: space-between;

    li {
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

  @media (min-width: 992px) {
    background-color: var(--background);
    height: calc(100vh - 120px);

    ul {
      padding: 24px;
      flex-direction: column;

      li {
        border-bottom: solid 1px #000000;
      }
    }
  }
`
