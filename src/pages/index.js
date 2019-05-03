import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import ColorConvertor from "../components/ColorConverter"

const IndexPage = props => (
  <Layout>
    <SEO
      title="Home"
      description="Convert Hex to RGB, or RGBA to Hex. Open Source built with Gatsby"
      keywords={[`hex`, `rgba`, `convert`, `hex to rgba`, `rgba to hex`]}
    />
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
