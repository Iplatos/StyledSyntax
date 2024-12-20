import styled from 'styled-components'
import { StyledBtn, SuperButton } from './components/Button.styled'
import { Link } from './components/Link.styled'
import { Menu } from './components/Menu.styled'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    <div>
      <GlobalStyles />

      <Menu>
        <ul>
          <li>
            <a href=""> link1 </a>
          </li>
          <li>
            <a href=""> link2 </a>
          </li>
          <li>
            <a href=""> link3 </a>
          </li>
        </ul>
      </Menu>
      <Box>
        <StyledBtn>Link</StyledBtn>
        <StyledBtn primary as={'a'} href={'#'}>
          Link primary
        </StyledBtn>
        <StyledBtn outlined>Link outlined</StyledBtn>
        <StyledBtn color="purple">Button</StyledBtn>
        <SuperButton as={Link} href="#">
          superButtonAsLink
        </SuperButton>
        <StyledBtn>button</StyledBtn>
        <SuperButton>SuperButton</SuperButton>
      </Box>
    </div>
  )
}

export default App

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    cursor: pointer;
  }
  ${Link} {
    cursor: zoom-in;
  }
  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
  ///МАКС-больше 860 значит. если меньше 860 применяются стили. Обратная зависимость макс=>при меньше значения в скобках
`
