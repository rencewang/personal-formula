import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import AboutBlock from "./aboutblock"

import "../../styles/general.scss"

const Layout = ({ children }) => {

  return (
    <div className="container">
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
      <AboutBlock />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
