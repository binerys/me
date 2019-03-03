import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { FaSync } from 'react-icons/fa'
import Hex from './Hex'
import styles from './styles.module.css'

const Container = styled.div`
  width: 200px;
  min-height: 246px;
  display: flex;
  flex-direction: column;
  background: ${props => props.color || 'palevioletred'};
  border-radius: 8px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

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
  border-radius: 0 0 7px 7px;
`

const FooterText = styled.div`
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

const Title = styled.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const HexContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

const Swatch = props => (
  <Container color={props.hex}>
    <Spacer />
    <Footer>
      <FooterText>
        <Title>{props.title}</Title>
        <HexContainer>
          <Hex value={props.hex} />
          {props.handleRefresh && (
            <FaSync
              onClick={props.handleRefresh}
              size={'0.5em'}
              className={styles.refresh}
            />
          )}
        </HexContainer>
      </FooterText>
    </Footer>
  </Container>
)

export default Swatch
