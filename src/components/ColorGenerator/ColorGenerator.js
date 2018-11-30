import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { sample } from 'lodash'
import Swatch from '../Swatch'

const ColorGenerator = ({ data }) => {
  const colors = data.allColornamesJson.edges
  const { node: randomColor } = sample(colors)

  return <Swatch title={randomColor.name} hex={randomColor.hex} />
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allColornamesJson {
          edges {
            node {
              name
              hex
            }
          }
        }
      }
    `}
    render={data => <ColorGenerator data={data} {...props} />}
  />
)
