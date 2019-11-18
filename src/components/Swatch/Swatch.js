import React from 'react'
import { FaSync } from 'react-icons/fa'
import Hex from './Hex'
import styles from './styles.module.css'
import {
  Container,
  StyledImg,
  Footer,
  FooterText,
  HexContainer,
  Spacer,
  Title,
} from './styles'

const Swatch = props => (
  <Container color={props.hex} height={props.height} width={props.width}>
    {props.img && (
      <StyledImg
        fluid={props.img}
        backgroundColor={props.hex}
        color={props.hex}
      />
    )}
    <Spacer />
    <Footer>
      <FooterText fontSize={props.fontSize}>
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
