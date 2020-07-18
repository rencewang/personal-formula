import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectcard"
import BlogFeatured from "../components/blogfeatured"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <ProjectCard />
    <div style={{margin: "40px auto"}}>
      <BlogFeatured />
    </div>
  </Layout>
)

export default IndexPage
