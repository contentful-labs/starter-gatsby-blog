import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { preview, previewTitle} from './article-preview.module.css'

export default ({ article }) => (
  <div className={preview}>
    <Img alt="" fluid={article.heroImage.fluid} />
    <h3 className={previewTitle}>
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
)
