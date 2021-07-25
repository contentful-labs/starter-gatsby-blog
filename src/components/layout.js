import React from 'react'

import './variables.css'
import './base.css'
import Seo from "./seo"
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        {children}
        <Footer />
      </>
    )
  }
}

export default Template
