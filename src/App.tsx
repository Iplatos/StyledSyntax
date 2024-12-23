import styled from 'styled-components'
import { StyledBtn, SuperButton } from './components/Button.styled'
import { Link } from './components/Link.styled'
import { Menu } from './components/Menu.styled'
import { GlobalStyles } from './styles/GlobalStyles'
import { myTheme } from './styles/Theme.styled'
import someSVG from './assets/some.svg'
import './App.css'
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
      <Box></Box>

      <Box>
        <StyledBtn>Link</StyledBtn>
        <StyledBtn primary as={'a'} href={'#'}>
          Link primary
        </StyledBtn>
        <StyledBtn color={myTheme.colors.secondary}>Link outlined</StyledBtn>
        <StyledBtn color={myTheme.colors.primary}>Button</StyledBtn>
        <SuperButton as={Link} href="#">
          superButtonAsLink
        </SuperButton>
        <StyledBtn>button</StyledBtn>
        <SuperButton>SuperButton</SuperButton>
      </Box>
      <div className="buttonDiv">
        {' '}
        <button className="button">
          {' '}
          <svg
            width="25"
            height="25"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use xlinkHref={`${someSVG}+'#1'`}></use>
          </svg>
        </button>
      </div>
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
  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`
///МАКС-больше 860 значит. если меньше 860 применяются стили. Обратная зависимость макс=>при меньше значения в скобках
///tinyPNG

///виды растровых: jpg, png, gif, webp
///векторных svg
///для фавикона можно несколько штук для поддержки браузеров
