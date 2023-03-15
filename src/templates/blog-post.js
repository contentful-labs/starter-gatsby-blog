import React from 'react'

import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
// import { BLOCKS } from '@contentful/rich-text-types'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import readingTime from 'reading-time'
import parse from 'html-react-parser'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulGatsbysampleblog') //blog名変更
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    const plainTextDescription = documentToPlainTextString(post.description)
    const plainTextBody = documentToPlainTextString(
      parse(post.article2.childMarkdownRemark.rawMarkdownBody)
    )
    const { minutes: timeToRead } = readingTime(plainTextBody)

    // const options = {
    //   renderNode: {
    //     [BLOCKS.EMBEDDED_ASSET]: (node) => {
    //       const { gatsbyImageData, description } = node.data.target
    //       return (
    //         <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
    //       )
    //     },
    //   },
    // }

    const parsedArticle = parse(post.article2.childMarkdownRemark.html)

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={plainTextDescription}
          image={`http:${post.attachmentSingle.resize.src}`}
        />
        <Hero
          image={post.attachmentSingle?.gatsbyImage}
          title={post.title}
          content={post.description}
        />
        <div className={styles.container}>
          <span className={styles.meta}>
            {/* {post.author?.name} &middot;{' '} */}
            <time dateTime={post.rawDate}>{post.createdAt}</time> – {timeToRead}{' '}
            minute read
          </span>
          <div className={styles.article}>
            <div className={styles.body}>
              {/* {post.article && renderRichText(post.article, options)} */}
              {post.article2 && parsedArticle}
            </div>
            <Tags tags={post.tags} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate
// const slug = 'first'
export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulGatsbysampleblog(slug: { eq: $slug }) {
      slug
      title
      createdAt(formatString: "MMMM Do, YYYY")
      rawDate: createdAt
      attachment {
        gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          width
          height
          src
        }
      }
      attachmentSingle {
        gatsbyImage(layout: FULL_WIDTH, width: 1280, placeholder: BLURRED)
        resize(height: 630, width: 1200) {
          width
          height
          src
        }
      }
      tags
      article2 {
        article2
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      article {
        raw
      }
      description
    }

    previous: contentfulGatsbysampleblog(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulGatsbysampleblog(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
