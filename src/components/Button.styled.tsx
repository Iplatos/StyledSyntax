import styled, { css } from 'styled-components'
import { MyAnimation } from '../styles/animations/Animations'

type PropsStyledBTN = {
  color?: string
  fontSize?: string
  primary?: boolean
  outlined?: boolean
}

export const StyledBtn = styled.button<PropsStyledBTN>`
  border: 0;
  background-color: ${(props) => (props.color ? props.color : 'blue')};
  padding: 18px 20px;
  color: black;
  font-size: ${(props) => props.fontSize};
  &:hover {
    background-color: green;
  }
  &:last-child {
    background-color: purple;
  }
  ${(props) =>
    props.primary &&
    css<PropsStyledBTN>`
      background-color: background-color: ${(props) => (props.color ? props.color : 'blue')};;
      border: 2px solid red;
    `}
  ${(props) =>
    props.outlined &&
    css<PropsStyledBTN>`
      background-color: ${(props) => (props.color ? props.color : 'blue')};
      border: 2px solid black;
    `}
`

export const SuperButton = styled(StyledBtn)`
  border-radius: 20px;
  background-color: yellow;
  color: red;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out;
  }
`