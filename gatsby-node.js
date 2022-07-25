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
  const poemTemplate = path.resolve("./src/templates/poemPage.js")

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              path
              type
            }
          }
          next {
            frontmatter {
              path
              title
              type
            }
          }
          previous {
            frontmatter {
              path
              title
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
    res.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
      if (node.frontmatter.type === "podcast") {
        createPage({
          path: node.frontmatter.path,
          component: podcastTemplate,
          context: {
            next,
            previous,
          },
        })
      }
      if (node.frontmatter.type === "blogpost") {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
          context: {
            next,
            previous,
          },
        })
      }
      if (node.frontmatter.type === "poem") {
        createPage({
          path: node.frontmatter.path,
          component: poemTemplate,
          context: {
            next,
            previous,
          },
        })
      }
    })
  })
}
