import React from "react"
import { Link, graphql } from "gatsby"

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
            <h2>Case Studies</h2>
            {data.allMarkdownRemark.edges.map((project, index) => (
              <h4 key={index}>
                <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
              </h4>
            ))}
            <h2>Projects</h2>
              <h4><a href="https://spotlist.netlify.app/">Spotlist</a></h4>
              <p className="project-description">&#8593; react app to get information about any spotify playlist</p>
            <h2>For Fun</h2>
              <h4><a href="https://thoughts.rence.la/">Thoughts</a></h4>
              <p className="project-description">&#8593; logging everyday thoughts</p>
              <h4><a href="https://inmydefense.glitch.me/">In My Defense</a></h4>
          </div>
        </div>
      </div>
    
  </Layout>
)

export default ProjectPage

export const ProjectPageQuery = graphql`
  query ProjectPageQuery {
      allMarkdownRemark (
          filter: { frontmatter: { type: {eq: "project"}, published: {eq: true} } }
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
