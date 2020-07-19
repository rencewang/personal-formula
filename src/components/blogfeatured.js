import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/blogfeatured.scss"

const BlogFeatured = () => {

    const data = useStaticQuery(graphql`
    query BlogFeaturedQuery {
        allMarkdownRemark (
        filter: {
            frontmatter: { tag: {in: "Featured"} }
        }
        sort: {
            fields: [frontmatter___updated]
            order: DESC
        }) {
            edges {
                node {
                    frontmatter {
                        title
                        permalink
                        updated(formatString: "MMMM DD[,] YYYY")
                        category
                        permalink
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
                <div className="accordionpiece">
                    <input type="checkbox" id={featuredPost.node.id} name="accordion" />
                    <label htmlFor={featuredPost.node.id}>{featuredPost.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</label>
                    <div>
                        <p>{featuredPost.node.excerpt}</p>
                        <div className="readmore-links">
                            <div>{featuredPost.node.frontmatter.updated}</div>
                            <a href={featuredPost.node.frontmatter.permalink}>CONTINUE READING</a>
                        </div>
                    </div>
                </div>
            ))}

        </main>
    )
}

export default BlogFeatured
