import React from "react"
import Blog from "../components/Blog/Blog"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  return <Blog data={data} />
}

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "blogpost" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
          }
        }
      }
    }
  }
`

export default BlogPage
