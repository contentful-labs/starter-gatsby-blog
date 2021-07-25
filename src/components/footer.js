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
      gatsby-starter-contentful
    </div>
  </Container>
)

export default Footer