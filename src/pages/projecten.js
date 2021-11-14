import React from 'react'
import { graphql } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'

const ProjectIndex = (props) => {
  const {
    location,
    data: {
      allContentfulHero: { nodes: heros },
      allContentfulProject: { nodes: projects },
    },
  } = props
  const [hero] = heros || [{}]

  return (
    <Layout location={location}>
      <Seo title="Projecten" />
      <Hero image={hero.image.gatsbyImageData} title={hero.title} />
      <Projects projects={projects} />
    </Layout>
  )
}

export default ProjectIndex

export const pageQuery = graphql`
  query ProjectenQuery {
    allContentfulHero(filter: { rank: { eq: 5 } }) {
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
    allContentfulProject {
      nodes {
        slug
        title
        body {
          body
        }
        description {
          childMarkdownRemark {
            html
          }
        }
        photos {
          gatsbyImageData
        }
        heroImage {
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
