import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectcard"
import BlogFeatured from "../components/blogfeatured"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProjectCard />
    <div style={{margin: "40px auto"}}>
      <BlogFeatured />
    </div>
  </Layout>
)

export default IndexPage
