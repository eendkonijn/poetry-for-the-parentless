import React from "react"
import Layout from "../layout"
import Teaser from "../Teaser/Teaser"
import { Link } from "gatsby"
import "./Blog.css"
import "./BlogItem.css"

const Blog = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="content-container">
        <Teaser
          heading="Woorden"
          paragraph="Verzamelde ideeen, teksten, besprekingen en andere woorden. Soms schrijf ik over oeroude rituelen en plekken waar de tijd heeft stilgestaan. Soms gaat het over leven in de metrolpolis, nanodeeltjes en AI. Soms gaat het over mensen zoals jij en ik, vandaag. Allemaal aardse zaken."
        />
        <div className="blog-container">
          {edges.map(post => {
            const { path, title, excerpt, date } = post.node.frontmatter
            return (
              <div key={path} className="blog-item">
                <h2 className="blog-item--header">
                  <Link to={path}>{title}</Link>
                </h2>
                <div className="blog-item--text">
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

export default Blog
