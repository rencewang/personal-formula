import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Icon } from "@iconify/react"
import leftArrow from "@iconify/icons-ion/ios-arrow-thin-left"
import rightArrow from "@iconify/icons-ion/ios-arrow-thin-right"

import "../styles/projectcard.scss"

const ProjectCard = () => {

    let count = 0;
    const showNextItem = () => {
        const items = document.querySelectorAll('.project-slideritem')
        const itemCount = items.length

        items[count].classList.remove('active')
        if (count < itemCount - 1) {
            count++
        } else {
            count = 0
        }
        items[count].classList.add('active')
        console.log(count)
    }   
    const showPreviousItem = () => {
        const items = document.querySelectorAll('.project-slideritem')
        const itemCount = items.length

        items[count].classList.remove('active')
        if(count > 0) {
        count--;
        } else {
        count = itemCount - 1
        }
        items[count].classList.add('active')
        console.log(count);
    }

    return (
        <main className="projectpost">

            <ul className="slider">
                <li className="project-slideritem active">
                    <div className="imageholder">
                        <img src="https://source.unsplash.com/featured/?sakura" />
                    </div>
                    <div className="intro">
                        <Link to="/">
                            <h1 className="title">The Politic: Presidential Hopefuls</h1>
                        </Link>
                        <div>
                            <p className="description">As a part of the Tech Team, I helped develop this minisite showcasing The Yale Politic's features &amp; interviews conducted over the past years about the presidential candidates for the 2020 election.</p>
                        </div>
                    </div>
                </li>

                <li className="project-slideritem">
                    <div className="imageholder">
                        <img src="https://source.unsplash.com/featured/?tree" />
                    </div>
                    <div className="intro">
                        <a href="#">
                            <h1 className="title">10 Albums of the 2010s</h1>
                        </a>
                        <div>
                            <p className="description">The 2010s was a defining decade in music. It marked the beginning of my exploration through genres and artists, and I wanted to commemorate the decade with a "book" bound in a jewel box and printed on an 19th century printing press.</p>
                        </div>
                    </div>
                </li>

                <li className="project-slideritem">
                    <div className="imageholder">
                        <img src="https://source.unsplash.com/featured/?beach" />
                    </div>
                    <div className="intro">
                        <a href="#">
                            <h1 className="title">Lover: A Virtual Experience</h1>
                        </a>
                        <div>
                            <p className="description">Inspired by Lover, I wanted to create a virtual reality experience that would capture the feeling of getting lost in the songs. The result was a floating dreamscape that enhances the listening experience.</p>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="project-controls">
                <button className="previous" onClick={showPreviousItem}>
                    <span><i><Icon icon={leftArrow} /></i></span>
                </button>
                <button className="next" onClick={showNextItem}>
                    <span><i><Icon icon={rightArrow} /></i></span>
                </button>
            </div>

        </main>
    )
}

export default ProjectCard

