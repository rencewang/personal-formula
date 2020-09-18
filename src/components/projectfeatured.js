import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Icon } from "@iconify/react"
import leftArrow from "@iconify/icons-ion/ios-arrow-thin-left"
import rightArrow from "@iconify/icons-ion/ios-arrow-thin-right"

import "../styles/projectfeatured.scss"

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

    const data = useStaticQuery(graphql`
    query ProjectFeaturedQuery {
        allMarkdownRemark (
            filter: { frontmatter: { tag: {in: "Featured Project"}, type: {eq: "project"} } }
            sort: { fields: [frontmatter___updated] order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        permalink
                        updated(formatString: "MMMM DD[,] YYYY")
                        description
                        coverimage {
                            childImageSharp {
                                fluid(maxWidth: 1500, maxHeight: 450) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    id
                    excerpt(pruneLength: 400)
                }
            }
        }
    }`)

    return (
        <main className="projectfeatured">
            <ul className="slider">
                
                {data.allMarkdownRemark.edges.map((featuredProject, index) => {
                    if (index===0) {
                        return (
                            <li className="project-slideritem active" key={featuredProject.node.id}>
                            <div className="projectfeatured-mobileflex">
                                <div className="imageholder">
                                    {/* <img src={featuredProject.node.frontmatter.coverimage.absolutePath} /> */}
                                    <Img 
                                        fluid={featuredProject.node.frontmatter.coverimage.childImageSharp.fluid} 
                                        style={{maxHeight: '100%'}}
                                    />
                                </div>
                                <div className="project-controls">
                                    <div className="project-controls-grid">
                                        <button className="previous" onClick={showPreviousItem} aria-label="previous-project">
                                            <span><i><Icon icon={leftArrow} /></i></span>
                                        </button>
                                        <button className="next" onClick={showNextItem} aria-label="next-project">
                                            <span><i><Icon icon={rightArrow} /></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="intro">
                                    <Link to={featuredProject.node.frontmatter.permalink}>
                                        <h1 className="title">{featuredProject.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</h1>
                                    </Link>
                                    <div className="description">
                                        {featuredProject.node.frontmatter.description}
                                    </div>
                                </div>
                            </div>
                            </li>
                        )
                    } else {
                        return (
                            <li className="project-slideritem" key={featuredProject.node.id}>
                            <div className="projectfeatured-mobileflex">
                                <div className="imageholder">
                                    {/* <img src={featuredProject.node.frontmatter.coverimage.absolutePath} /> */}
                                    <Img 
                                        fluid={featuredProject.node.frontmatter.coverimage.childImageSharp.fluid} 
                                        style={{maxHeight: '100%'}}
                                    />
                                </div>
                                <div className="project-controls">
                                    <div className="project-controls-grid">
                                        <button className="previous" onClick={showPreviousItem}>
                                            <span><i><Icon icon={leftArrow} /></i></span>
                                        </button>
                                        <button className="next" onClick={showNextItem}>
                                            <span><i><Icon icon={rightArrow} /></i></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="intro">
                                    <Link to={featuredProject.node.frontmatter.permalink}>
                                        <h1 className="title">{featuredProject.node.frontmatter.title.replace("&#58;", ":").replace("&amp;", "&")}</h1>
                                    </Link>
                                    <div className="description">
                                        {featuredProject.node.frontmatter.description}
                                    </div>
                                </div>
                            </div>
                            </li>
                        )
                    }
                })}

            </ul>



        </main>
    )
}

export default ProjectCard

