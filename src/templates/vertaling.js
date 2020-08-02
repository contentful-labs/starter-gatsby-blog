import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'



const Vertaling = ({data}) => {

  const post = get(data, 'contentfulVertaling')
  const siteTitle = get(data, 'site.siteMetadata.title')

  return (
    <Layout>
      <div>
        <h1>{post.titel}</h1>
        <div>{post.beschrijving.content[0].content[0].value}</div>
      </div>
    </Layout>
  )
}

export default Vertaling

export const pageQuery = graphql`
query VertalingBySlug($slug: String!) {
    contentfulVertaling(slug: { eq: $slug }) {
      auteur
      datumVanUitgave
      vertalers
      vertalingLink
      titel
      beschrijving {
        content {
          content {
            value
          }
        }
      }
    }
  }
`
