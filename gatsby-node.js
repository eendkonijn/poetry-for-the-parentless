/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/templates/blogPost.js")
  const podcastTemplate = path.resolve("./src/templates/podcastPage.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.type === "podcast") {
        createPage({
          path: node.frontmatter.path,
          component: podcastTemplate,
        })
      }
      if (node.frontmatter.type === "blogpost") {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        })
      }
    })
  })
}
