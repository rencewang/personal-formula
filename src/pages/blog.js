import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectSide from "../components/projectside"
import BlogFeatured from "../components/blogfeatured"

import "../styles/projectbloggrid.scss"

const BlogPage = () => (
  <Layout>
    <SEO title="Project" />

      <div className="pbgrid">
        <div className="pbcontent">
          <BlogFeatured />
        </div>
        <div className="pbnav">
          <ProjectSide />
        </div>
      </div>
    
  </Layout>
)

export default BlogPage
