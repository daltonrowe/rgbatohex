import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import ColorConvertor from "../components/ColorConverter"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article id="rgba-to-hex" className="color-converter">
      <ColorConvertor />
    </article>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
