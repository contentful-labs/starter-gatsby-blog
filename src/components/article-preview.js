import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import Container from "./container"
import Tags from "./tags"
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => (
  <Container>
    <ul className={styles.articleList}>
      {posts.map(({ node }) => {
        return (
          <li key={node.slug}>  
            <Link to={`/blog/${node.slug}`} className={styles.link}>
              <GatsbyImage alt="" image={node.heroImage.traced} />
              <h3 className={styles.title}>
                {node.title}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{node.publishDate}</small>
                <Tags tags={node.tags} />
              </div>
            </Link>
          </li>
        )})}
    </ul>
  </Container>
)

export default ArticlePreview
