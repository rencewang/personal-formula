import { Link } from "gatsby"
import React from "react"

import style from "../styles/header.module.scss"
import logoGIF from "../images/title6.gif"

const Header = () => (
  <header>
    <div>
        <Link to="/">
          Lawrence Wang
        </Link>
    </div>

    <div className={style.navigation}>
      <div>
        <Link to="/">
          Project
        </Link>
      </div>
      &nbsp;
      <div>
        <Link to="/">
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
)

export default Header
