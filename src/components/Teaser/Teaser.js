import React from "react"
import "./Teaser.css"

const Teaser = ({ heading, paragraph, paragraphCursive }) => {
  return (
    <div className="teaser">
      <h1>{heading}</h1>
      <p
        style={paragraphCursive && { fontStyle: "italic" }}
        className="teaser--paragraph"
      >
        {paragraph}
      </p>
    </div>
  )
}

export default Teaser
