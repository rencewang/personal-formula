import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/projectcard"
import BlogFeatured from "../components/blogfeatured"
import AboutBlock from "../components/aboutblock"

const IndexPage = () => (
  <Layout>
    <SEO title="" />
    <ProjectCard />
    <BlogFeatured />
    <AboutBlock />
  </Layout>
)

export default IndexPage
