import React from "react"
import Podcast from "../components/Podcast/Podcast"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const PodcastPage = ({ data }) => {
  return (
    <>
      <Layout>
        <Podcast data={data} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query PodCastQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "podcast" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            excerpt
            image
            intro
            type
          }
        }
      }
    }
  }
`

export default PodcastPage
