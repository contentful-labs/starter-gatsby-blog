const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const Project = path.resolve('./src/templates/project.js')

  const result = await graphql(
    `
      {
        allContentfulProject {
          nodes {
            slug
            title
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  // const posts = result.data.allContentfulBlogPost.nodes
  // const hasPosts = posts.length > 0

  const projects = result.data.allContentfulProject.nodes
  const hasProjects = projects.length > 0

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  // if (hasPosts) {
  //   posts.forEach((post, index) => {
  //     const previousPostSlug = index === 0 ? null : posts[index - 1].slug
  //     const nextPostSlug =
  //       index === posts.length - 1 ? null : posts[index + 1].slug

  //     createPage({
  //       path: `/blog/${post.slug}/`,
  //       component: blogPost,
  //       context: {
  //         slug: post.slug,
  //         previousPostSlug,
  //         nextPostSlug,
  //       },
  //     })
  //   })
  // }

  if (hasProjects) {
    projects.forEach((project, index) => {
      const previousPostSlug = index === 0 ? null : projects[index - 1].slug
      const nextPostSlug =
        index === projects.length - 1 ? null : projects[index + 1].slug

      createPage({
        path: `/project/${project.slug}/`,
        component: Project,
        context: {
          slug: project.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
