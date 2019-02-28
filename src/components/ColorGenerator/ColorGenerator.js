import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { sample } from 'lodash'
import Swatch from '../Swatch'

class ColorGenerator extends React.Component {
  constructor(props) {
    super(props);
 
    const colors = this.props.data.allColornamesJson.edges
    const { node: color } = sample(colors)
 
    this.state = { name: color.name, hex: color.hex };
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh () {
    const colors = this.props.data.allColornamesJson.edges
    const { node: color } = sample(colors)
    this.setState({ name: color.name, hex: color.hex });
  }

  render() {
    return <Swatch
      title={this.state.name}
      hex={this.state.hex}
      handleRefresh={this.handleRefresh}
    />
  }
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
