import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/about.scss"

const BlogFeatured = () => {

    const closeAbout = () => {
        const aboutBlock = document.querySelector("#aboutblock")
        aboutBlock.classList.remove('about-show')
    }

    return (
        <main id="aboutblock" className="about">
            <div className="about-nav"><button onClick={closeAbout}>Close</button></div>
            <div className="about-text">
                <p>I'm a student at &#x2609; Yale studying the intersection between computer science and design and <i>also economics</i>. I like basic things such as watching Chinese TV, making Spotify playlists, crying to YouTube videos, collecting song lyrics, and yelping.
                If you'd like to find out more about the interesting personality I never knew I had, you can check out my basic <a href="/">opinions</a>, my basic <a href="/">art</a>, or go find me &#x2193; while I get lost in space.</p>
            </div>
            
        </main>
    )
}

export default BlogFeatured

// style="text-align: left; float: left;