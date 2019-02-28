import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FaSync } from 'react-icons/fa'
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

const HexRefresh = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`
const Swatch = props => (
  <Container color={props.hex}>
    <Spacer />
    <Footer>
      <Title>
        {props.title}
        <HexRefresh>
          <Hex value={props.hex} />
          {
            props.handleRefresh &&
              <FaSync onClick={props.handleRefresh} size={'0.5em'} />
          }
        </HexRefresh>
      </Title>
    </Footer>
  </Container>
)

export default Swatch
