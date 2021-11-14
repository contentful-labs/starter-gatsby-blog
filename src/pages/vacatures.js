import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Vacature from '../components/vacature/vacature'
import ApplicationForm from '../components/application/application'

const VacaturesIndex = (props) => {
  const {
    location,
    data: {
      allContentfulHero: { nodes: heros },
      allContentfulVacature: { nodes: vacatures = [] },
    },
  } = props
  const formRef = useRef(null)
  const [hero] = heros
  const subtitle =
    JSON.parse(hero.subtitle.raw)?.content?.[0]?.content?.[0]?.value || ''
  return (
    <Layout location={location}>
      <Seo title="Vacatures" />
      <Hero
        image={hero.image.gatsbyImageData}
        title={hero.title}
        subtitle={subtitle}
        disableButton
      />
      {vacatures.map((vacature) => (
        <Vacature vacature={vacature} formRef={formRef} />
      ))}
      <ApplicationForm formRef={formRef} />
    </Layout>
  )
}

export default VacaturesIndex

export const pageQuery = graphql`
  query VacatureQuery {
    allContentfulVacature {
      nodes {
        title
        description {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
    allContentfulHero(filter: { rank: { eq: 3 } }) {
      nodes {
        contentful_id
        title
        rank
        subtitle {
          raw
        }
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
  }
`
