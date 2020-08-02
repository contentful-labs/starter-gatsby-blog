const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {

    const blogPost = path.resolve('./src/templates/blog-post.js')
    const vertalingComp = path.resolve('./src/templates/vertaling.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulVertaling {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }


        const vertalingen = result.data.allContentfulVertaling.edges
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        vertalingen.forEach(vertaling => {
          createPage({
            path: `/vertalingen/${vertaling.node.slug}/`,
            component: vertalingComp,
            context: {
              slug: vertaling.node.slug,
            },
          })
        })
        
      })
    )
  })
}
