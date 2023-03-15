import React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div className={styles.hero}>
    {/* {index ? (
      <StaticImage className={styles.image} fixed={image} alt="test fixed" />
    ) : (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )} */}
    {image && (
      <GatsbyImage className={styles.image} alt={title} image={image} />
    )}
    <div className={styles.details}>
      <h1 className={styles.title}>{title}</h1>
      {content && <div className={styles.content}>{content}</div>}
    </div>
  </div>
)

export default Hero
