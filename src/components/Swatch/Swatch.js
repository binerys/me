import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  width: 400px;
  height: 492px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: ${props => props.color || 'palevioletred'};
  border: black solid 1px;
`

const Spacer = styled.div`
  flex-grow: 1;
`

const Footer = styled.footer`
  flex-shrink: 0;
  height: 26%;
  background: #fff;
  padding: 20px;
`

const Title = styled.span`
  color: #222;
  font-family: 'Chivo';
  font-weight: 800;
  font-size: 2em;
  text-transform: uppercase;
`

const Hex = styled.span`
  color: #222;
  display: block;
  font-size: 0.6em;
  font-weight: normal;
  margin-top: -10px;
`

const Swatch = (props) => (
  <Container color={props.hex}>
    <Spacer />
    <Footer>
      <Title>
        {props.title}
        <Hex> {props.hex} </Hex>
      </Title>
    </Footer>
  </Container>
)

export default Swatch;
