import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProjectFeatured from "../components/projectfeatured"
import BlogFeatured from "../components/blogfeatured"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProjectFeatured />
    <div style={{margin: "40px auto"}}>
      <BlogFeatured />
    </div>
  </Layout>
)

export default IndexPage
