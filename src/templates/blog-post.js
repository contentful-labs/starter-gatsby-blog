import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'
import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
  withOptimizely,
} from '@optimizely/react-sdk';


//Uncomment it to set the Bamburgh Customer
var cartAttributes = {
  'productId': 'sku94578',
  'quantity': 1,
  'price': 100,
  'isBundle': true,
  'deviceType': 'iOS',
};

// Uncomment it to set the Non Bamburgh Customer
// var cartAttributes = {
//   'productId': 'sku34656',
//   'quantity': 1,
//   'price': 100,
//   'isBundle': true,
//   'deviceType': 'iOS',
// };

// Increment the customer Id for demo purposes and trigger different variations
var userId = "customer4";

const optimizely = createInstance({
  sdkKey: '9qLfCieQpxTyhkL8iCckc',
  datafileOptions: {
    updateInterval: 10000,
    autoUpdate: true,
    urlTemplate: 'https://cdn.optimizely.com/datafiles/9qLfCieQpxTyhkL8iCckc.json',
  }
})

function ButtonVar(props) {
  function onClick(event) {
    props.optimizely.track('addToCart', userId, cartAttributes);
    alert("Variation 1 clicked")
  }

  return (
    <button onClick={onClick} style={{ height: '50px', width:'100%', background: props.color, color: "white"}}>
      Add to Cart
    </button>
  )
}

const WrappedButtonVar = withOptimizely(ButtonVar)
class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {post.publishDate}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <OptimizelyProvider
            optimizely={optimizely}
            user={{ id: userId}}
          >
            <OptimizelyFeature autoUpdate={true} feature="add_to_cart_campaign">
              { (isEnabled, variables) => (
                isEnabled
                  ? <WrappedButtonVar color={variables.cartButtonColor}/>
                  : <pre >{`[DEBUG: Feature OFF] `}</pre>
              )}
            </OptimizelyFeature>
        </OptimizelyProvider>
      </Layout>
    )
  }
}


                

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`