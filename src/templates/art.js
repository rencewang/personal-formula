import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import "../styles/gallery.scss"
import "../styles/12columns.scss"

const ArtTemplate = props => {
    const { pageContext } = props
    const { pageContent } = pageContext

    const images = useStaticQuery(graphql`
        query {
            flashlight: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/flash.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            morphology: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/morph.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            caged: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/caged.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wave: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/wave.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            birth: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/birth.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sunset: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/sunset.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            snow: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/mountain.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            duality: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/duality.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            thunderclouds: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/thunder.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            arches: file(sourceInstanceName: {eq: "src"}, relativePath: {eq: "images/artimages/traditional/arch.jpg"}) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Layout>
        <SEO title="Digital" />
    
          <section className="gallery">
              <div className="gallery-navigation bgcolor-changer">
                  <div><Link to="/art/design">Design</Link></div>
                  <div><Link to="/art/traditional">Traditional</Link></div>        
                  <div><Link to="/art/digital">Digital</Link></div>        
              </div>
  
              <main className="gallery-container">
                  <div className="grid">
  
                  {pageContent.map((data, index) => (
  
                      <div className={data.item.column} key={`content_item_${index}`}>
                          <figure className="img-container">
                              <a href={`#${data.item.id}`}>
                                  {/* <img className="red" src={data.item.path} /> */}
                                  <div className="red">
                                    <Img fluid={images[data.item.id].childImageSharp.fluid} style={{position: "inherit"}} />
                                  </div>
                              </a>
                              <a href="#" className="lightbox" id={data.item.id}>
                                  <img src={data.item.path} />
                              </a>
                              <div className="content-details">
                                  <div className="content-title">{data.item.title}</div>
                                  <div className="content-text">{data.item.description}</div>
                              </div>
                          </figure>
                      </div>
  
                  ))}
  
                  </div>
              </main>
          </section>
        
        </Layout>
    )
}
  
export default ArtTemplate