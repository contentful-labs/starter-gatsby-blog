import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => (
  <Container>
    <ul className={styles.articleList}>
      {posts.map((post) => {
        return (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`} className={styles.link}>
              <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
              <h2 className={styles.title}>{post.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  </Container>
)

export default ArticlePreview
