import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
// import ProjectFeatured from "../components/projectfeatured"
// import BlogFeatured from "../components/blogfeatured"
import Tracklist from "../components/tracklist"

import "../styles/index.scss"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <div className="content">
          <div className="index-roll">
            <Tracklist />
            {/* <div className="index-featured-group">
              <div className="index-titles"><span>Projects</span></div>
              <ProjectFeatured />
            </div> */}
            {/* <div className="index-featured-group">
              <div className="index-titles"><span>Writing</span></div>
              <BlogFeatured />
            </div>
            <div className="index-glow"><span className="circle"></span></div> */}
          </div>
        </div>
    </Layout>
)

export default IndexPage
