import styled from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.div`
  color: ${props => props.useDarkTheme ? '#FFF' : '#222'};
  width: 400px;
  padding: 1em;
  margin-top: 30px;

  ${media.greaterThan('medium')`
    margin-top: 0px;
  `}
`

export const Header1 = styled.h1`
  color: ${props => props.color || 'black'};
`

export const Header2 = styled.h2`
  color: ${props => props.color || 'black'};
`
export const Link = styled.a`
  color: ${props => props.color || 'black'};

  &:hover {
    text-decoration: none;
    border-radius: 5px;
    color: white;
    background: ${props => props.color || 'black'};
    padding: 2px;
  }
`

export const Strong = styled.strong`
  color: ${props => props.color || 'black'};
`


