import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Template = ({ data }) => {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter

  return (
    <Layout>
      <div className="content-container">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} /> <br />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        excerpt
      }
    }
  }
`

export default Template
