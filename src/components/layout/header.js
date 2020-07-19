import { Link } from "gatsby"
import React from "react"

import style from "../../styles/header.module.scss"
import "../../styles/about.scss"

const Header = () => {

  const showAbout = () => {
    const aboutBlock = document.querySelector("#aboutblock")
    if (aboutBlock.classList.contains('about-show')) {
      aboutBlock.classList.remove('about-show')
    } else {
      aboutBlock.classList.add('about-show')
    }
  }

  return (
    <header>
      <div>
          <Link to="/">
            Lawrence Wang
          </Link>
          <button onClick={showAbout}>?</button>
      </div>

      <div className={style.navigation}>
        <div>
          <Link to="/project">
            Project
          </Link>
        </div>
        &nbsp;
        <div>
          <Link to="/blog">
            Writing
          </Link>
        </div>
        &nbsp;
        <div>
          <Link to="/">
            Art
          </Link>
        </div>
      </div>

    </header>
)}

export default Header
