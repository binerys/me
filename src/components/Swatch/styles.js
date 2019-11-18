import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const Container = styled.div`
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '346px'};
  display: flex;
  flex-direction: column;
  background: ${props => props.color || 'palevioletred'};
  border-radius: 8px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  ${media.greaterThan('medium')`
    width: ${props => props.width || '400px'};
    height: ${props => props.height || '492px'};
  `}
`
export const StyledImg = styled(Img)`
  border-radius: 7px 7px 0px 0px;
  transition: .5s ease;

  &:hover {
    opacity: 0;
    transition: .5s ease;
  }
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
  font-size: ${props => props.fontSize || '1.5em'};
  font-weight: 800;
  text-transform: uppercase;

  ${media.greaterThan('medium')`
    font-size: ${props => props.fontSize || '2em'};
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
