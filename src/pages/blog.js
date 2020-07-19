import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogSide from "../components/blogside"
import BlogFeatured from "../components/blogfeatured"

import "../styles/projectbloggrid.scss"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

      <div className="pbgrid">
        <div className="pbcontent">
          <h2>Featured</h2>
          <BlogFeatured />
        </div>
        <div className="pbnav">
          <BlogSide />
        </div>
      </div>
    
  </Layout>
)

export default BlogPage
