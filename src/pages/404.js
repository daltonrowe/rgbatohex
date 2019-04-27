import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND - Error 404</h1>
    <p>You just hit a route that doesn&#39;t exists.</p>
  </Layout>
)

export default NotFoundPage
