import React from "react"
import Poems from "../components/Poems/Poems"
import { graphql } from "gatsby"

const PoemPage = ({ data }) => {
  return <Poems data={data} />
}

export const query = graphql`
  query PoemQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { frontmatter: { type: { eq: "poem" } } }
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

export default PoemPage
