const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              nodes {
                title
                slug
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.nodes

        posts.forEach((post, index) => {
          const previousPostSlug = index === 0 ? null : posts[index - 1].slug
          const nextPostSlug =
            index === posts.length - 1 ? null : posts[index + 1].slug

          createPage({
            path: `/blog/${post.slug}/`,
            component: blogPost,
            context: {
              slug: post.slug,
              previousPostSlug,
              nextPostSlug,
            },
          })
        })
      })
    )
  })
}
