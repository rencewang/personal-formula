import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/projectblogside.scss"

const ProjectSide = () => {

    const data = useStaticQuery(graphql`
    query ProjectNavigationQuery {
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
    }`)

    return (
        <div className="projectside-post">

            <div className="projectside-post-nav">
                <h2>Projects</h2>
                {data.allMarkdownRemark.edges.map(project => (
                    <h4>
                        <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                    </h4>
                ))}
            </div>



            <h4>Project Name</h4>
            <h4>Project Name</h4>
            <h4>Project Name</h4>
            <h4>Project Name</h4>
        </div>
    )
}

export default ProjectSide