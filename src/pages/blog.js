import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import BlogSide from "../components/blogside"
import BlogFeatured from "../components/blogfeatured"

import "../styles/bloggrid.scss"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

      <div className="bloggrid">
        <div className="bloggrid-content-home">
          <h2>Featured</h2>
          <BlogFeatured />
        </div>
        <div className="bloggrid-nav-home">
          <BlogSide />
        </div>
        <div className="bloggrid-glow"><span className="circle"></span></div>
      </div>
    
  </Layout>
)

export default BlogPage
