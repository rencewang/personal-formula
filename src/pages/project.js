import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProjectSide from "../components/projectside"
import ProjectFeatured from "../components/projectfeatured"

import "../styles/projectbloggrid.scss"

const ProjectPage = () => (
  <Layout>
    <SEO title="Project" />

      <div className="pbgrid">
        <div className="pbcontent">
          <ProjectFeatured />
        </div>
        <div className="pbnav">
          <ProjectSide />
        </div>
      </div>
    
  </Layout>
)

export default ProjectPage
