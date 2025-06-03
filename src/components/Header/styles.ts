import styled from 'styled-components'

export const Header = styled.header`
  background-color: #000000;
  padding: 20px 0;

  img {
    object-fit: contain;
  }

  & > div {
    display: flex;
  }

  .logo {
    margin-right: 50px;
  }

  .logo-mobile {
    display: none;
  }

  @media (min-width: 768px) {
    .logo {
      display: block;
    }
    .logo-mobile {
      display: none;
    }
  }
`

type MenuProps = {
  $color: string
}

export const Menu = styled.ul<MenuProps>`
  display: none;

  li {
    list-style: none;

    a {
      color: ${(props) => props.$color};
      display: inline-block;
      padding: 10px 20px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

export const Buttons = styled.div`
  margin-left: auto;

  button,
  a {
    margin-left: 20px;
  }
`
