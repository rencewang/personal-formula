import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/blogfeatured.scss"

const BlogFeatured = () => {

    const data = useStaticQuery(graphql`
    query BlogFeaturedQuery {
        allMarkdownRemark (
            filter: { frontmatter: { tag: {in: "Featured"}, type: {eq: "post"} } }
            sort: { fields: [frontmatter___updated] order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        permalink
                        updated(formatString: "MMMM DD[,] YYYY")
                        category
                        description
                    }
                    id
                    excerpt(pruneLength: 400)
                }
            }
        }
    }`)

    return (
        <main className="blogfeatured">

            {data.allMarkdownRemark.edges.map(featuredPost => (
                <div className="accordionpiece" key={`one-of-${featuredPost.node.id}`}>
                    <input type="checkbox" id={featuredPost.node.id} name="accordion" />
                    <label htmlFor={featuredPost.node.id}>{featuredPost.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</label>
                    <div style={{paddingRight: '10px'}}>
                        <p>{featuredPost.node.frontmatter.description}</p>
                        <div className="readmore-links">
                            <div>{featuredPost.node.frontmatter.updated}</div>
                            <Link to={featuredPost.node.frontmatter.permalink}>CONTINUE READING</Link>
                        </div>
                    </div>
                </div>
            ))}

        </main>
    )
}

export default BlogFeatured
