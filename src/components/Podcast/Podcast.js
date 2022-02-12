import React from "react"
import Teaser from "../Teaser/Teaser"
import "./Podcast.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const image = (
  <StaticImage
    src="../../assets/images/thispersondoesnotexist.jpg"
    alt="rene yurt"
    className="podcast--image"
  />
)

const Podcast = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <>
      <div className="podcast content-container">
        {" "}
        <Teaser
          heading="Een podcast over nieuwe oude verhalen"
          paragraph="In deze podcast komen mensen aan het woord die een nieuw -en soms oud- verhaal vertellen. Wetenschappers, spiritueel leraren, activisten, ondernemers en andere mensen die buiten de oude paradigma's gaan, en leven en werken vanuit verbinding. "
        />{" "}
      </div>
      {edges.map(podcast => {
        const { path, title, intro, date } = podcast.node.frontmatter
        return (
          <div className="podcast--unit">
            <div className="podcast--image-block">{image}</div>
            <div className="podcast--text">
              <h3 className="podcast--title">
                <Link to={path}>{title}</Link>
              </h3>
              <div className="podcast--introtext">{intro}</div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Podcast
