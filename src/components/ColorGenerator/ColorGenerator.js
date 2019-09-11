import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { sample } from 'lodash'
import Swatch from '../Swatch'
import About from '../About';
import { Content } from './styles';

const pageQuery = graphql`
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
`

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
    return (
      <Content>
        <Swatch title={this.state.name} hex={this.state.hex} handleRefresh={this.handleRefresh} />
        <About hex={this.state.hex} />
      </Content>
    );
  }
}


export default props => (
  <StaticQuery
    query={pageQuery}
    render={data => <ColorGenerator data={data} {...props} />}
  />
)
