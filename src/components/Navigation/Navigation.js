import React from 'react'
import { NavContainer, StyledLink } from './styles';

const Navigation = props => (
  <NavContainer>
    <StyledLink to="/" color={props.hex}>{'about'}</StyledLink>
    <StyledLink to="/music" color={props.hex}>{'music'}</StyledLink>
  </NavContainer>
)

export default Navigation
