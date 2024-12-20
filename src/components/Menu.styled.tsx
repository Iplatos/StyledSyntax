import styled from 'styled-components'

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: seagreen;
    }
    li + li {
      /// братский селектор. если ли1 идет перед ли2 то ко второму применятся стили
      margin-left: 20px;
    }
  }
`
