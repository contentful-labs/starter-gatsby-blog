import React from 'react'

import Container from "./container"

const Footer = () => (
  <Container>
    <div style={{
      borderTop: '1px solid var(--border)',
      fontSize: 'var(--text-sm)',
      marginTop: 'var(--space-2xl)',
      padding: 'var(--space-2xl) 0',
      textAlign: 'right',
    }}>
      Built with <a href="https://contentful.com/">Contentful</a> and <a href="https://gatsbyjs.com">Gatsby</a> &middot; <a href="https://github.com/contentful/starter-gatsby-blog">Source</a>
    </div>
  </Container>
)

export default Footer