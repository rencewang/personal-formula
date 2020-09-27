import React from 'react'
// import Img from 'gatsby-image'
import '../styles/projectpost.scss'

const Post = ({
    title,
    date,
    path,
    excerpt,
    html,
}) => {

    return (
        <article className="project">
            <div className="projectheading">
                <div className="projecttitle">{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
            </div>

            <div className="projectcontent">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </article>
    )

}

export default Post
