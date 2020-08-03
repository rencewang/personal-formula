import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import AboutBlock from "./aboutblock"

import "../../styles/general.scss"

const LayoutH = ({ children }) => {

  return (
    <div className="overall">
      <div className="container">
        <Header />
        <div className="content">
            {children}
        </div>
        <Footer />
        <AboutBlock />
      </div>
    </div>
  )
}

LayoutH.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutH
