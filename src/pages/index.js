import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import ArticlePreview from '../components/article-preview/article-preview'
import KeyPoints from '../components/key-points/key-points'

const RootIndex = (props) => {
  const {
    location,
    data: {
      allContentfulBlogPost: { nodes: posts },
      allContentfulHero: { nodes: heros },
      allContentfulKeyPoint: { nodes: keypoints },
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
      <ArticlePreview posts={posts} />
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
