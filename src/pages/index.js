import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "katex/dist/katex.css"

const IndexPage = () => (
  <Layout>
    <div>fqiao@lesley.edu</div>
    <div>
      <Link to="/matrix-integration">Matrix and Integration</Link>
    </div>
  </Layout>
)

export default IndexPage
