import React from "react"
import { Link } from "gatsby"

import "../../styles/about.scss"

const BlogFeatured = () => {

    const closeAbout = () => {
        const aboutBlock = document.querySelector("#aboutblock")
        aboutBlock.classList.remove('about-show')
    }

    return (
        <main id="aboutblock" className="about">
            <div className="about-nav">
                <button onClick={closeAbout}>Close</button>
                <div className="about-social">
                    <a href="https://www.instagram.com/lawrencio.w/">Instagram</a>
                    <a href="https://www.linkedin.com/in/lawrence-c-w/">LinkedIn</a>
                    <a href="/">Resume</a>
                </div>
            </div>
            <div className="about-text">
                <p>I'm a student at &#x2609; Yale studying the intersection between computer science and design and <i>also economics</i>. I like basic things such as watching Chinese TV, making Spotify playlists, crying to YouTube videos, collecting song lyrics, and yelping.
                If you'd like to find out more about the interesting personality I never knew I had, you can check out my basic <Link to="/blog">opinions</Link>, my basic <a href="https://lawrencewang.myportfolio.com">art</a>, or go find me &#x2197; while I get lost in space.</p>
            </div>
            <div className="about-recents">
                <span>Recently &#x2014;</span>
                <span><a href="https://youtu.be/iVQhkDZS_Tk">a dream</a></span>
                <span><a href="https://www.planneduniverse.com">a blog about floor plans</a></span>
                <span><a href="https://youtu.be/kBF5l9rWQFs">a lesson on child-rearing</a></span>
            </div>
            
        </main>
    )
}

export default BlogFeatured