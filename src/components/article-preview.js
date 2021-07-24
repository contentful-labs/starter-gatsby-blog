import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import * as styles from './article-preview.module.css'

const ArticlePreview = ({ article }) => (
  <Link to={`/blog/${article.slug}`} className={styles.link}>
    <GatsbyImage alt="" image={article.heroImage.traced} />
    <h3 className={styles.previewTitle}>
      {article.title}
    </h3>
    <small className="meta">{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </Link>
)

export default ArticlePreview
