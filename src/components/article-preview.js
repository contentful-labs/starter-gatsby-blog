import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    { 
      article.heroImage &&
      article.heroImage.fluid &&
      <Img alt="" fluid={article.heroImage.fluid} />
    }
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    {
      article.publishDate &&
      <small>{article.publishDate}</small>
    }
    {
      article.description &&
      article.description.childMarkdownRemark &&
      article.description.childMarkdownRemark.html &&
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    }
  </div>
)
