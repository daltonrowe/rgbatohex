import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import ColorConvertor from "../components/ColorConverter"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <article>
      <ColorConvertor />

      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={props.data.site.siteMetadata.github}
        >
          View on Github
        </a>
      </footer>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        github
      }
    }
  }
`

export default IndexPage
