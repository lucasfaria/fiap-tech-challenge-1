import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: #000000;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  li {
    list-style: none;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  a {
    font-size: 16px;
    padding: 5px 0;
  }

  .social {
    text-align: center;

    h3 {
      margin-bottom: 24px;
    }

    ul {
      align-items: center;
      display: flex;
      gap: 24px;
      justify-content: center;
      padding-top: 20px;
    }
  }
`
