import React from "react"
import Layout from "../layout"
import Teaser from "../Teaser/Teaser"
import { Link } from "gatsby"
import "./Poems.css"

const Poem = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="content-container">
        <div className="poem-container">
          {edges.map(post => {
            const { path, title, excerpt, date } = post.node.frontmatter
            return (
              <div key={path} className="poem-item">
                <h2 className="poem-item--header">
                  <Link to={path}>{title}</Link>
                </h2>
                <div className="poem-item--text">
                  <div>{excerpt}</div>
                  <small>
                    <em>{date}</em>
                  </small>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Poem
