import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout/layout'
import ProjectSide from "../components/projectside"
import Post from "../components/projectpostmodule"

import "../styles/projectbloggrid.scss"

const ProjectPostTemplate = ({ data, pageContext }) => {
    const {
        frontmatter: { title, updated, permalink, tag, category },
        excerpt: autoExcerpt,
        id,
        html,
    } = data.markdownRemark
    const { next, previous } = pageContext

    return (
        <Layout>
          <SEO title={title.replace("&#58;", ":").replace("&amp;", "&")} description={autoExcerpt} />

            <div className="pbgrid">
                <div className="pbcontent">
                <Post
                    key={id}
                    title={title}
                    date={updated}
                    path={permalink}
                    // coverImage={coverImage}
                    html={html}
                    tag={tag}
                    category={category}
                    previousPost={previous}
                    nextPost={next}
                />
                </div>
                <div className="pbnav">
                    <ProjectSide />
                </div>
            </div>
        </Layout>
    )
}

export default ProjectPostTemplate

export const postQuery = graphql `
    query ProjectPostQuery ($path: String) {
        markdownRemark(frontmatter: { permalink: { eq: $path } }) {
            frontmatter {
                title
                updated(formatString: "MMMM DD[,] YYYY")
                tag
                category
                permalink
            }
            id
            html
            excerpt
        }
    }
`
