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
            
            <h2>Details</h2>
            <div className="projectside-post-info">
                <h5 className="time">Timeframe:</h5> <h6 className="timeinput">Summer 2020</h6>
                <h5 className="tools">Tools:</h5> <h6 className="timeinput">Summer 2020</h6>
            </div>

            <div className="projectside-post-nav">
                <h2>Projects</h2>
                {data.allMarkdownRemark.edges.map((project, index) => (
                    <h4 key={index}>
                        <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                    </h4>
                ))}
            </div>

            <div className="projectside-post-context">
                <h2>Previous</h2>
                    <Link to="/">Hellow: That's someting for later</Link>
                <h2>Next</h2>
                    <Link to="/">Hellow: That's someting for later</Link>
            </div>

        </div>
    )
}

export default ProjectSide