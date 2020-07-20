import React from 'react'
import { Link } from 'gatsby'
// import Img from 'gatsby-image'

import style from '../styles/blogpost.module.scss'

const Post = ({
    title,
    date,
    path,
    excerpt,
    tag,
    category,
    html,
    previousPost,
    nextPost,
}) => {

    if (previousPost==null) {
        return (
            <article className={style.post}>
                <div className={style.postarea}>
                    <div className={style.postheading}>
                        <div className={style.posttitle}>{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
                        <span className={style.postdate}>{date}</span>
                        <span> in </span>
                        <span className={style.postcat}>{category}</span>
                    </div>

                    <div className={style.postcontent}>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>

                <div className={style.postnavigation}>
                    <div></div>
                    <Link to={nextPost.frontmatter.permalink}>{nextPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}  &raquo;</Link>
                </div>
            </article>
        )
    } else if (nextPost==null) {
        return (
            <article className={style.post}>
                <div className={style.postarea}>
                    <div className={style.postheading}>
                        <div className={style.posttitle}>{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
                        <span className={style.postdate}>{date}</span>
                        <span> in </span>
                        <span className={style.postcat}>{category}</span>
                    </div>
                    <div className={style.postcontent}>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
                
                <div className={style.postnavigation}>
                    <Link to={previousPost.frontmatter.permalink}>&laquo; {previousPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                    <div></div>
                </div>
            </article>
        )
    } else {
        return (
            <article className={style.post}>
                <div className={style.postarea}>
                    <div className={style.postheading}>
                        <div className={style.posttitle}>{title.replace("&#58;", ":").replace("&amp;", "&")}</div>
                        <span className={style.postdate}>{date}</span>
                        <span> in </span>
                        <span className={style.postcat}>{category}</span>
                    </div>
                    <div className={style.postcontent}>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            
                <div className={style.postnavigation}>
                    <Link to={previousPost.frontmatter.permalink}>&laquo; {previousPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</Link>
                    <Link to={nextPost.frontmatter.permalink}>{nextPost.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}  &raquo;</Link>
                </div>
            </article>
        )
    }
}

export default Post
