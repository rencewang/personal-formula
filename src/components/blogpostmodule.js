import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
// import Navigation from './navigation'
// import { toKebabCase } from '../helpers'

import style from '../styles/blogpost.module.scss'

const Post = ({
    title,
    date,
    path,
    excerpt,
    tag,
    category,
    html,
    // previousPost,
    // nextPost,
}) => {

    return(
        <article className={style.post}>
            <div className={style.postheading}>
                <div className={style.posttitle}>{title}</div>
                <div className={style.postdate}>{date}</div>
                <div className={style.postcat}>{category}</div>
            </div>

            <div className={style.postcontent}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </article>
    )
}

export default Post
