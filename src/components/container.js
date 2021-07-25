import React from 'react'

const Container = ({ children }) => (
  <div style={{
    maxWidth: 'var(--size-max-width)',
    margin: '0 auto',
    padding: 'var(--space-2xl) var(--size-gutter)',
  }}>
    {children}
  </div>
)

export default Container