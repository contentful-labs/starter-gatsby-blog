import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulGatsbysampleblog.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')
    const local = get(this, 'props.data.file')
    return (
      <Layout location={this.props.location}>
        <Hero
          image={local.childImageSharp.gatsbyImageData}
          title={local.name}
          content={''}
        />

        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulGatsbysampleblog(sort: { createdAt: DESC }) {
      nodes {
        title
        slug
        description
        createdAt(formatString: "MMMM Do, YYYY")
        attachmentSingle {
          gatsbyImageData(layout: FIXED, width: 424, height: 212)
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImage(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
        }
      }
    }
    file {
      name
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
      }
    }
  }
`
