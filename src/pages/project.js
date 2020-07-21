import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ProjectFeatured from "../components/projectfeatured"

import "../styles/projectgrid.scss"

const ProjectPage = ({data}) => (
  <Layout>
    <SEO title="Project" />

      <div className="projectgrid">
        <div className="projectgrid-content-home">
          <ProjectFeatured />
        </div>
        <div className="projectgrid-nav">
          <div className="projectpage-nav">
            <h2>Projects</h2>
            {data.allMarkdownRemark.edges.map((project, index) => (
              <h4 key={index}>
                <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
              </h4>
            ))}
          </div>
        </div>
      </div>
    
  </Layout>
)

export default ProjectPage

export const ProjectPageQuery = graphql`
  query ProjectPageQuery {
      allMarkdownRemark (
          filter: { frontmatter: { type: {eq: "project"} } }
          sort: { fields: [frontmatter___updated] order: DESC }
      ) {
          edges {
              node {
                  frontmatter {
                      title
                      permalink
                  }
                  id
              }
          }
      }
  }
`
