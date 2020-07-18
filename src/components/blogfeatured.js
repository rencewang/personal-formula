import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import "../styles/blogfeatured.scss"

const BlogFeatured = () => {

    return (
        <main className="blogfeatured">

            <div className="accordionpiece">
                <input type="checkbox" id="1" name="accordion" />
                <label htmlFor="1">Norman Fucking Rockwell!: Coexisting Hope and Despair</label>
                <div>
                    <p>For me, a good Lana song does two things: 1) makes me fall asleep and 2) gives me edgy inspiration upon further examination (the next morning, as it usually turns out). So it should come as no surprise that The Next Best American Record happened to be the first song...</p>
                    <div className="readmore-links">
                        <a href="/" >CONTINUE READING</a>
                    </div>
                </div>
            </div>

            <div className="accordionpiece">
                <input type="checkbox" id="2" name="accordion" />
                <label htmlFor="2">Norman Fucking Rockwell!: Coexisting Hope and Despair</label>
                <div>
                    <p>For me, a good Lana song does two things: 1) makes me fall asleep and 2) gives me edgy inspiration upon further examination (the next morning, as it usually turns out). So it should come as no surprise that The Next Best American Record happened to be the first song...</p>
                    <div className="readmore-links">
                        <a href="/" >CONTINUE READING</a>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default BlogFeatured

// style="text-align: left; float: left;