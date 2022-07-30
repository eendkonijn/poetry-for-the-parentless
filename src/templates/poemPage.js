import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import "./poemPage.css"

const Template = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title } = post.frontmatter
  const { previous, next } = pageContext

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = e => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    let prevLink = document.getElementById("prevLink")
    let nextLink = document.getElementById("nextLink")

    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (
      (isLeftSwipe && pageContext.next) ||
      (isRightSwipe && pageContext.previous)
    ) {
      isLeftSwipe ? nextLink.click() : prevLink.click()
    }
  }

  useEffect(() => {
    let prevLink = document.getElementById("prevLink")
    let nextLink = document.getElementById("nextLink")

    const handleKeyDown = ({ key }) => {
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
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => document.removeEventListener("keydown", handleKeyDown)
  })

  return (
    <Layout>
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="content-container"
      >
        <div className="poem fade-in">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} /> <br />
        </div>
        <div className="poem-arrows">
          <Link
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
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
        {/* <div className="poem-random">
          <Link to="">?</Link>
        </div> */}
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

export default Template
