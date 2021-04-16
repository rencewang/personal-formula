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
          <button onClick={showAbout}>
            <span class={style.mobilehide}>INFO</span>
            <span class={style.mobileshow}>?</span>
          </button>
      </div>

      <div className={style.navigation}>
        <div>
          <a href="http://rencewang.com/">
            Portfolio
          </a>
        </div>
        &nbsp;
        <div>
          <Link to="/blog">
            Writing
          </Link>
        </div>
        &nbsp;
        <div>
          <Link to="/art/digital">
          {/* <a href="/art/digital"> */}
            Art
          {/* </a> */}
          </Link>
        </div>
      </div>

    </header>
)}

export default Header
