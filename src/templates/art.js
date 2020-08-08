import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import "../styles/gallery.scss"
import "../styles/12columns.scss"

const ArtTemplate = props => {
    const { pageContext } = props
    const { pageContent } = pageContext

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
                                  <img className="red" src={data.item.path} />
                                  {/* <Img 
                                      fluid={data.item.path}
                                  /> */}
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