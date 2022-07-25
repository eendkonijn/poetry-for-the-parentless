import React from "react"
import Teaser from "../Teaser/Teaser"
import "./Home.css"
import { navigate } from "gatsby"

const Podcast = props => {
  return (
    <div className="podcast content-container">
      {" "}
      <Teaser
        heading="We are the parentless"
        paragraph="The world is our ancestry. Our liberation is one from fiction."
        paragraphCursive
      />{" "}
      <p></p>
      <div className="home--buttons">
        <button
          onClick={() => {
            navigate("/orphaned")
          }}
        >
          Read On
        </button>
      </div>
    </div>
  )
}

export default Podcast
