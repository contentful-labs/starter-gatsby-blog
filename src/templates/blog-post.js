import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from "../components/seo"
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
          image={post.heroImage.resize.src}
        />
        <Hero image={post.heroImage.traced} title={post.title} content={post.description.childMarkdownRemark.excerpt} />
          <div className={styles.container}>
            <span className={styles.meta}>
              {post.author.name} &middot; <time dateTime={post.rawDate}>{post.publishDate}</time> — {post.body.childMarkdownRemark.timeToRead} minute read
            </span>
            <div className={styles.article}>
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
              <Tags tags={post.tags} />
            </div>
          </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        traced: gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          width: 1280
        )
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
          wordCount {
            words
          }
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
  }
`
