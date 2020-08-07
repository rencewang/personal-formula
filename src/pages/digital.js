import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import DigitalYAML from "../content/art/digital.yaml"
import "../styles/gallery.scss"
import "../styles/12columns.scss"

const ArtDigital = () => (
    <Layout>
      <SEO title="Digital" />
  
        <section className="gallery">
            <div className="gallery-navigation bgcolor-changer">
                <div><a href="/design">Design</a></div>
                <div><a href="/traditional">Traditional</a></div>        
                <div><a href="/digital">Digital</a></div>        
            </div>

            <main className="gallery-container">
                <div className="grid">

                {DigitalYAML.content.map((data, index) => (

                    <div className={data.item.column} key={`content_item_${index}`}>
                        <figure className="img-container">
                            <a href="#still">
                                <img className="red" src={data.item.path} />
                            </a>
                            <a href="#_" className="lightbox" id="still">
                                <img src="../images/artimages/digital/still.jpg" />
                            </a>
                            <div className="content-details">
                                <h3 className="content-title">{data.item.title}</h3>
                                <p class="content-text">{data.item.description}</p>
                            </div>
                        </figure>
                    </div>

                ))}

                </div>
            </main>
        </section>
      
    </Layout>
  )
  
  export default ArtDigital