import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProjectSide from "../components/projectside"
import ProjectCard from "../components/projectcard"

import "../styles/projectbloggrid.scss"

const ProjectPage = () => (
  <Layout>
    <SEO title="Project" />

      <div className="pbgrid">
        <div className="pbcontent">
          <ProjectCard />
        </div>
        <div className="pbnav">
          <ProjectSide />
        </div>
      </div>
    
  </Layout>
)

export default ProjectPage
