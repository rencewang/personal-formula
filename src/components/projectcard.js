import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Icon, InlineIcon } from "@iconify/react"
import leftArrow from "@iconify/icons-ion/ios-arrow-thin-left"
import rightArrow from "@iconify/icons-ion/ios-arrow-thin-right"

import "../styles/projectcard.scss"
import "../styles/12columns.scss"

const ProjectCard = () => {

    // find more info about javascript gallery

    return(
        <div className="projectpost">

            <ul className="slider">
                <li className="project-slideritem active">

                    <div className="imageholder">
                        <img src="https://source.unsplash.com/featured/?sakura" />
                    </div>

                    <div className="intro">
                        <a href="#">
                            <h1 className="title">Explore Tokyo Project 1</h1>
                        </a>
                        <div>
                            <p className="description">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.</p>
                        </div>
                    </div>
                </li>

                <li className="project-slideritem">

                    <div className="imageholder">
                        <img src="https://source.unsplash.com/featured/?sakura" />
                    </div>

                    <div className="intro">
                        <a href="#">
                            <h1 className="title">Explore Tokyo Project 2</h1>
                        </a>
                        <div>
                            <p className="description">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.</p>
                        </div>
                    </div>
                </li>

                <li className="project-slideritem">

                    <div className="imageholder">
                        <img src="https://source.unsplash.com/featured/?sakura" />
                    </div>

                    <div className="intro">
                        <a href="#">
                            <h1 className="title">Explore Tokyo Project 3</h1>
                        </a>
                        <div>
                            <p className="description">Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.</p>
                        </div>
                    </div>
                </li>
            </ul>

            <div className="project-controls">
                <button className="previous">
                    <i><Icon icon={leftArrow} /></i>
                </button>
                <button className="next">
                    <i><Icon icon={rightArrow} /></i>
                </button>
            </div>

        </div>
    )
}

export default ProjectCard
