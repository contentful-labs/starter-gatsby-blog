/* eslint-disable react/no-danger */
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from '../container'
import * as styles from './projects.module.css'

const Projects = (props) => {
  const { projects } = props
  if (!projects) return null
  if (!Array.isArray(projects)) return null

  return (
    <Container>
      <ul className={styles.projectList}>
        {projects.map((project) => {
          const { slug } = project
          return (
            <li key={slug}>
              <Link to={`/project/${slug}`} className={styles.link}>
                <GatsbyImage
                  style={{ 'border-radius': '10px' }}
                  alt=""
                  image={project?.heroImage?.gatsbyImageData}
                />
                <h2 className={styles.title}>{project.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: project.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{project.publishDate}</small>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Projects
