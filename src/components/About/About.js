import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  width: 400px;
  padding: 1em;
  text-align: center;
`

const Header = styled.h1`
  color: ${props => props.color || 'black'};
  text-align: center;
`

const Bold = styled.b`
  color: ${props => props.color || 'black'};
`

const About = props => (
  <Content>
    <Header color={props.hex}> hello! </Header>
    <p>
      I'm <Bold color={props.hex}>Breanna Nery</Bold>, a Filipina hailing from
      Long Beach, CA. I currently work remotely as a{' '}
      <Bold color={props.hex}>Software Engineer</Bold> for{' '}
      <Bold color={props.hex}>Autodesk</Bold>. I primarily work on fullstack web
      development using <Bold color={props.hex}>React</Bold> and{' '}
      <Bold color={props.hex}>Ruby on Rails</Bold>.
    </p>
  </Content>
)

export default About
