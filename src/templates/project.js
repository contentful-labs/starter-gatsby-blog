/* eslint-disable react/no-danger */
import React from 'react'
import { Link, graphql } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import * as styles from './project.module.css'
import CaptionCarousel from '../components/carousel/carousel'

const ProjectTemplate = (props) => {
  const {
    data: { contentfulProject: project, previous, next },
    location,
  } = props

  return (
    <Layout location={location}>
      <Seo
        title={project.title}
        description={project.description.childMarkdownRemark.excerpt}
        image={`http:${project.heroImage.resize.src}`}
      />
      <Hero
        image={project.heroImage?.gatsbyImageData}
        title={project.title}
        content={project.description?.childMarkdownRemark?.excerpt}
      />
      <div className={styles.container}>
        <span className={styles.meta}>
          {project?.author?.name} &middot;{' '}
          <time dateTime={project.rawDate}>
            Datum: {project.dateConstruction}
          </time>
        </span>
        <div className={styles.article}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{
              __html: project.body?.childMarkdownRemark?.html,
            }}
          />
          <CaptionCarousel photos={project.photos} />
          {(previous || next) && (
            <nav>
              <ul className={styles.articleNavigation}>
                {previous && (
                  <li>
                    <Link to={`/project/${previous.slug}`} rel="prev">
                      ← {previous.title}
                    </Link>
                  </li>
                )}
                {next && (
                  <li>
                    <Link to={`/project/${next.slug}`} rel="next">
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

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulProject(slug: { eq: $slug }) {
      slug
      title
      dateConstruction(formatString: "MMMM Do, YYYY")
      rawDate: dateConstruction
      photos {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulProject(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulProject(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
