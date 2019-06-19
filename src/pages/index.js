import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

import ColorConvertor from "../components/ColorConverter"

const IndexPage = props => (
  <Layout>
    <SEO
      title="RGBA to Hex Converter"
      description="Convert Hex to RGB, or RGBA to Hex. Open Source built with Gatsby"
      keywords={[`hex`, `rgba`, `convert`, `hex to rgba`, `rgba to hex`]}
    />
    <article id="rgba-to-hex" className="color-converter">
      <ColorConvertor />
    </article>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-123637627-6"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-123637627-6');
    </script>

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
