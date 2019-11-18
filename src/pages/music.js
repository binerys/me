import React, { Component } from 'react'
import styled from 'styled-components'
import analyze from 'rgbaster'
import { graphql, StaticQuery } from 'gatsby';
import BeatLoader from 'react-spinners/BeatLoader'
import { toHex } from '../utils/colors';
import Layout from '../components/layout'
import Swatch from '../components/Swatch';
import Navigation from '../components/Navigation';

const spotifyQuery = graphql`
  {
    artists: allSpotifyTopArtist(
      filter: { time_range: { eq: "medium_term" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          name
          spotifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  & > * {
    margin-bottom: 1em;
  }
`

class MusicPage extends Component {
  constructor() {
    super();
    this.state = { artists: [], isReady: false };
  }

  async componentDidMount() {
    const results = [];
    this.props.data.artists.edges.forEach(({ node: artist }) => {
      results.push(this.fetchArtistInfo(artist));
    });

    const artists = await Promise.all(results);

    this.setState({ artists, isReady: true });
  }

  async fetchArtistInfo(artist) {
    const { src } = artist.image.localFile.childImageSharp.fluid;
    const results = await analyze(src, { ignore: ['rgb(255,255,255)', 'rgb(0,0,0)'] });
    const hex = toHex(results[0].color)

    return {
      name: artist.name,
      spotifyId: artist.spotifyId,
      fluid: artist.image.localFile.childImageSharp.fluid,
      hex
    };
  }

  renderArtists() {
    return this.state.artists.map(artist => (
      <Swatch
        key={artist.spotifyId}
        hex={artist.hex}
        title={artist.name}
        img={artist.fluid}
        height={'250px'}
        width={'200px'}
        fontSize={'1.5em'}
      />
    ))
  }

  renderLoader() {
    return <div style={{ margin: '0 auto' }}>
        <BeatLoader sizeUnit={'px'} size={50} />
      </div>
  }

  render() {    
    return <Layout>
        <Navigation />
        <h2>
          who I've been listening to <span role="img" aria-label="headphones">
            🎧
          </span>
        </h2>
        <Container>
          {this.state.isReady ? this.renderArtists() : this.renderLoader()}
        </Container>
      </Layout>
  }
}


export default props => (
  <StaticQuery
    query={spotifyQuery}
    render={data => <MusicPage data={data} {...props} />}
  />
)
