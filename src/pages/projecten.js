import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'

const ProjectIndex = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Projecten" />
      <Hero title="Projecten" />
    </Layout>
  )
}

export default ProjectIndex
