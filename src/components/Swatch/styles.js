import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  width: 300px;
  min-height: 346px;
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
export const Footer = styled.footer`
  flex-shrink: 0;
  height: 26%;
  background: #fff;
  padding: 5%;
  border-radius: 0 0 7px 7px;
`

export const FooterText = styled.div`
  align-items: start;
  color: #222;
  display: flex;
  flex-direction: column;
  font-family: 'Chivo' !important;
  font-size: 1.5em;
  font-weight: 800;
  text-transform: uppercase;

  ${media.greaterThan('medium')`
    font-size: 2em;
  `}
`

export const HexContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
`

export const Spacer = styled.div`
  flex-grow: 1;
`

export const Title = styled.span`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
