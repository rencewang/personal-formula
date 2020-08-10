import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProjectFeatured from "../components/projectfeatured"
import BlogFeatured from "../components/blogfeatured"
import Tracklist from "../components/tracklist"

import "../styles/index.scss"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
        <Tracklist />
        <div style={{margin: "30px auto"}}>
          <h4 className="index-titles"><span>Featured Writing</span></h4>
          <BlogFeatured />
        </div>
        <div style={{margin: "30px auto"}}>
          <h4 className="index-titles"><span>Featured Project</span></h4>
          <ProjectFeatured />
        </div>
    </Layout>
)

export default IndexPage
