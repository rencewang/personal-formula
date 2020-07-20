import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/projectblogside.scss"

const ProjectSide = ({ timeframe, tools, previousPost, nextPost}) => {

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

    if (previousPost==null) {
        return (
            <div className="projectside-post">
                <h2>Details</h2>
                <div className="projectside-post-info">
                    <h5 className="time">Timeframe:</h5> <h6 className="timeinput">{timeframe}</h6>
                    <h5 className="tools">Tools:</h5> <h6 className="timeinput">{tools}</h6>
                </div>
    
                <div className="projectside-post-nav">
                    <h2>All Projects</h2>
                    {data.allMarkdownRemark.edges.map((project, index) => (
                        <h4 key={index}>
                            <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                        </h4>
                    ))}
                </div>
    
                <div className="projectside-post-context">
                    <h2>Next</h2>
                        <Link to={nextPost.frontmatter.permalink}>{nextPost.frontmatter.title}</Link>
                </div>
            </div>
        )
    } else if (nextPost==null) {
        return (
            <div className="projectside-post">
                <h2>Details</h2>
                <div className="projectside-post-info">
                    <h5 className="time">Timeframe:</h5> <h6 className="timeinput">{timeframe}</h6>
                    <h5 className="tools">Tools:</h5> <h6 className="timeinput">{tools}</h6>
                </div>
    
                <div className="projectside-post-nav">
                    <h2>All Projects</h2>
                    {data.allMarkdownRemark.edges.map((project, index) => (
                        <h4 key={index}>
                            <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                        </h4>
                    ))}
                </div>
    
                <div className="projectside-post-context">
                    <h2>Previous</h2>
                        <Link to={previousPost.frontmatter.permalink}>{previousPost.frontmatter.title}</Link>
                </div>
            </div>
        )
    } else {
        return (
            <div className="projectside-post">
                <h2>Details</h2>
                <div className="projectside-post-info">
                    <h5 className="time">Timeframe:</h5> <h6 className="timeinput">{timeframe}</h6>
                    <h5 className="tools">Tools:</h5> <h6 className="timeinput">{tools}</h6>
                </div>
    
                <div className="projectside-post-nav">
                    <h2>All Projects</h2>
                    {data.allMarkdownRemark.edges.map((project, index) => (
                        <h4 key={index}>
                            <Link to={project.node.frontmatter.permalink}>{project.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                        </h4>
                    ))}
                </div>
    
                <div className="projectside-post-context">
                    <h2>Previous</h2>
                        <Link to={previousPost.frontmatter.permalink}>{previousPost.frontmatter.title}</Link>
                    <h2>Next</h2>
                        <Link to={nextPost.frontmatter.permalink}>{nextPost.frontmatter.title}</Link>
                </div>
            </div>
        )
    }
}

export default ProjectSide