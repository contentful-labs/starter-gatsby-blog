import React from 'react'
import Container from './container'
import Navigation from './navigation'

import './base.css'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Template
