import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Hex from './Hex'

const Container = styled.div`
  width: 200px;
  min-height: 246px;
  display: flex;
  flex-direction: column;
  background: ${props => props.color || 'palevioletred'};
  border: black solid 1px;

  ${media.greaterThan('medium')`
    width: 400px;
    min-height: 492px;
  `}
`

const Spacer = styled.div`
  flex-grow: 1;
`

const Footer = styled.footer`
  flex-shrink: 0;
  height: 26%;
  background: #fff;
  padding: 5%;
`

const Title = styled.span`
  align-items: start;
  color: #222;
  display: flex;
  flex-direction: column;
  font-family: 'Chivo';
  font-size: 1em;
  font-weight: 800;
  text-transform: uppercase;

  ${media.greaterThan('medium')`
    font-size: 2em;
  `}
`

const Swatch = props => (
  <Container color={props.hex}>
    <Spacer />
    <Footer>
      <Title>
        {props.title}
        <Hex value={props.hex} />
      </Title>
    </Footer>
  </Container>
)

export default Swatch
