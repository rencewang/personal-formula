import React from "react"
import "../styles/header.module.scss"

export default () => {
    return (
        <footer>
            &copy; {(new Date()).getFullYear()} with ⌘ from LA &amp; NH
        </footer>
    )
}