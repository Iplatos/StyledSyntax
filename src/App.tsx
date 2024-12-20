import styled from 'styled-components'

function App() {
  return (
    <div>
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
        <StyledBtn as={'a'} href={'#'}>
          Link
        </StyledBtn>
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

const StyledBtn = styled.button`
  border: 0;
  background-color: red;
  padding: 18px 20px;
  color: black;
  &:hover {
    background-color: green;
  }
  &:last-child {
    background-color: purple;
  }
`
const Link = styled.a`
  border: 0;
  background-color: transparent;
  padding: 18px 20px;
  color: black;
  font-weight: bold;
`
const SuperButton = styled(StyledBtn)`
  border-radius: 20px;
  background-color: yellow;
  color: black;
`

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
`

const Menu = styled.nav`
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
