import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import rehypeReact from 'rehype-react'
import { Content, Header1, Header2, Link, Strong } from './styles';


const pageQuery = graphql`
  {
    markdownRemark(frontmatter: { id: { eq: "about" } }) {
      htmlAst
    }
  }
`

const About = (props) => {
  const { hex, data } = props;
  const markdown = data.markdownRemark;
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
      h1: props => <Header1 color={hex}>{props.children}</Header1>,
      h2: props => <Header2 color={hex}>{props.children}</Header2>,
      strong: props => <Strong color={hex}>{props.children}</Strong>,
      a: props => <Link color={hex} href={props.href}>{props.children}</Link>,
    },
  }).Compiler

  return <Content>{renderAst(markdown.htmlAst)}</Content>;
};

export default props => (
  <StaticQuery
    query={pageQuery}
    render={data => <About data={data} {...props} />}
  />
);
