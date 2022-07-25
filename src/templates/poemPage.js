import React, { useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "./poemPage.css"

const Template = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter
  const { previous, next } = pageContext

  useEffect(() => {
    let prevLink = document.getElementById("prevLink")
    let nextLink = document.getElementById("nextLink")

    document.addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "ArrowLeft":
          console.log("Left arrow")
          prevLink.click()
          break
        case "ArrowRight":
          console.log("Right arrow")
          nextLink.click()
          break
      }
    })
  })

  return (
    <Layout>
      <div className="content-container">
        <div className="poem fade-in">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} /> <br />
        </div>
        <div className="poem-arrows">
          <Link
            id="prevLink"
            className={
              previous && previous.frontmatter.type === "poem" ? "" : "hv"
            }
            to={previous && `${previous.frontmatter.path}`}
          >
            {"<"}
          </Link>

          {pageContext.next && (
            <>
              <Link
                id="nextLink"
                to={`${next.frontmatter.path}`}
                className={
                  next.frontmatter.type === "poem"
                    ? "poem-arrows--right"
                    : "poem-arrows--right hv"
                }
              >
                {">"}
              </Link>
            </>
          )}
        </div>
        <div className="poem-random">
          <Link to="">?</Link>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query Poem($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        excerpt
        page
      }
    }
  }
`

// export const query = graphql`
//   query PoemQuery {
//     allMarkdownRemark(
//       sort: { order: RAND, fields: frontmatter___date }
//       filter: { frontmatter: { type: { eq: "poem" } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             path
//             tags
//             excerpt
//           }
//         }
//       }
//     }
//   }
// `

export default Template
