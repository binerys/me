import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { sample } from 'lodash';

const ColorGenerator = ({ data }) => {
  const colors = data.allColornamesJson.edges;
  const { node: randomColor } = sample(colors);

  return (
    <h1>{randomColor.name}</h1>
  );
};

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
