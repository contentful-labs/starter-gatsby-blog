import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'

const ErrorIndex = (props) => {
  const { location } = props
  return (
    <Layout location={location}>
      <Seo title="not found" />
      <Hero title="deze pagina is niet beschikbaar" />
    </Layout>
  )
}

export default ErrorIndex
