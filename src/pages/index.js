import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import KeyPoints from '../components/key-points/key-points'
import Specialities from '../components/specialities/specialities'

const RootIndex = (props) => {
  const {
    location,
    data: {
      // allContentfulBlogPost: { nodes: posts },
      allContentfulHero: { nodes: heros },
      allContentfulKeyPoint: { nodes: keypoints },
      allContentfulSpecialiteiten: { nodes: specialities },
    },
  } = props
  const mainHero = heros.find((h) => h.rank === 1)
  const secondHero = heros.find((h) => h.rank === 2)
  const subtitle =
    JSON.parse(mainHero.subtitle.raw)?.content?.[0]?.content?.[0]?.value || ''
  const secondSubtitle =
    JSON.parse(secondHero.subtitle.raw)?.content?.[0]?.content?.[0]?.value || ''
  return (
    <Layout location={location}>
      <Hero
        image={mainHero.image.gatsbyImageData}
        title={mainHero.title}
        subtitle={subtitle}
      />
      <KeyPoints
        keypoints={keypoints}
        title={secondHero.title}
        subtitle={secondSubtitle}
      />
      <Specialities specialities={specialities} />
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulSpecialiteiten {
      nodes {
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 282
            height: 230
          )
          title
          description
        }
        description {
          id
          description
        }
        title
      }
    }
    allContentfulKeyPoint {
      nodes {
        title
        subtitle
      }
    }
    allContentfulHero {
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
