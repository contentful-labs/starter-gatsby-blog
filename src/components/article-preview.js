import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  // if (!posts) return null
  // if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/${post.slug}`} className={styles.link}>
                {post.attachmentSingle && (
                  <GatsbyImage
                    alt=""
                    image={post.attachmentSingle.gatsbyImageData}
                    style={{ height: 212 }}
                  />
                )}

                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>{post?.description && post.description}</div>
              <div className={styles.meta}>
                <small className="meta">{post.createdAt}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
