import { Link } from 'gatsby'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  color: ${props => props.color || 'hsla(0,0%,0%,0.8)'};
  font-family: 'Baloo Paaji';
  font-size: 2em;
  text-decoration: none;

  &:hover {
    border-radius: 5px;
    color: white;
    background: ${props => props.color || 'hsla(0,0%,0%,0.8)'};
    padding: 2px;
  }
`

export const NavContainer = styled.div`
  padding: 2em;
  display: flex;
  justify-content: space-around;
`
