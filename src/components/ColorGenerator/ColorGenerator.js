import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { sample } from 'lodash'
import { useDarkTheme } from '../../utils/colors'
import Swatch from '../Swatch'
import About from '../About';
import { Body, Content } from './styles';

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
    super(props)

    this.state = {
      hex: null,
      name: null
    }
    this.handleRefresh = this.handleRefresh.bind(this)
  }

  componentDidMount() {
    const colors = this.props.data.allColornamesJson.edges
    const { node: color } = sample(colors)

    this.setState({ name: color.name, hex: color.hex });
  }

  handleRefresh() {
    const colors = this.props.data.allColornamesJson.edges
    const { node: color } = sample(colors)
    this.setState({ name: color.name, hex: color.hex })
  }

  render() {
    const { hex, name } = this.state;

    if (hex) {
      return (
        <>
          <Body useDarkTheme={useDarkTheme(hex)} />
          <Content>
            <Swatch
              title={name}
              hex={hex}
              handleRefresh={this.handleRefresh}
            />
            <About hex={hex} />
          </Content>
        </>
      )
    } else {
      return null;
    }
    
  }
}


export default props => (
  <StaticQuery
    query={pageQuery}
    render={data => <ColorGenerator data={data} {...props} />}
  />
)
