import styled, { createGlobalStyle } from 'styled-components'

export const Body = createGlobalStyle`
  body {
    background-color: ${props => (props.useDarkTheme ? '#2f2f2f' : '#FFF')};
    transition: background-color 500ms linear;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
