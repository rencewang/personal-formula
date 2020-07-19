import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/projectblogside.scss"

const ProjectSide = () => {

    const data = useStaticQuery(graphql`
    query BlogNavigationQuery {
        allMarkdownRemark (
            filter: { frontmatter: { type: {eq: "post"} } }
            sort: { fields: [frontmatter___updated] order: DESC }
        ) {
            category:group(field: frontmatter___category) {
                fieldValue
                edges {
                    node {
                        frontmatter {
                            title
                            permalink
                        }
                    } 
                }
            }
        }
    }`)

    return (
        <div className="blogcategorylist">

            {data.allMarkdownRemark.category.map(category => (

                <div className="category">
                    <h2>{category.fieldValue}</h2>
                    {category.edges.map(post => (
                        <h4>
                            <Link to={post.node.frontmatter.permalink}>{post.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                        </h4>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default ProjectSide