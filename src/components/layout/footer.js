import React from "react"
import "../../styles/header.module.scss"

export default () => {
    return (
        <footer>
            {/* &copy; {(new Date()).getFullYear()} code &amp; design by me 满载星海 from LA */}
            {/* &copy; {(new Date()).getFullYear()} Built with Gatsby. Set in Inter, Millionaire, and Freight. */}
            &copy; {(new Date()).getFullYear()} Built with Gatsby.
        </footer>
    )
}
