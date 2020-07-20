import React from 'react'
import { Link } from 'gatsby'
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
        <article className={style.post}>
            <div className={style.postheading}>
                <div className={style.posttitle}>{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
            </div>

            <div className={style.postcontent}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </article>
    )

}

export default Post
