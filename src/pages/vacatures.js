import React from 'react'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'

const VacaturesIndex = (props) => {
  return (
    <Layout location={props.location}>
      <Seo title="Vacatures" />
      <Hero title="Vacatures" />
    </Layout>
  )
}

export default VacaturesIndex
