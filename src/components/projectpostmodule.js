import React from 'react'
// import Img from 'gatsby-image'

import style from '../styles/projectpost.module.scss'

const Post = ({
    title,
    date,
    path,
    excerpt,
    html,
}) => {

    return (
        <article className={style.project}>
            <div className={style.projectheading}>
                <div className={style.projecttitle}>{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
            </div>

            <div className={style.projectcontent}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </article>
    )

}

export default Post
