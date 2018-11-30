import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import ColorGenerator from '../components/ColorGenerator'

const IndexPage = () => (
  <Layout>
    <ColorGenerator />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
