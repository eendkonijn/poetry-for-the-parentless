import React from "react"
import Teaser from "../Teaser/Teaser"
import "./Home.css"
import { navigate } from "gatsby"

const Podcast = props => {
  return (
    <div className="podcast content-container">
      {" "}
      <Teaser
        heading="De wereld brandt en ons verlangen ook"
        paragraph="De mens wordt uitgenodigd om naar binnen te gaan. We gaan op avontuur in onze geest en vinden de mooiste schatten en de zwartste gaten."
        paragraphCursive
      />{" "}
      <p>
        Veel mensen voelen dat de tijd waarin we leven vraagt om... ja om wat
        eigenlijk? Minder neoliberalisme? Meer verbinding met onze natuur?
        'Omzien naar elkaar'? René interviewt mensen die hierover mooie dingen
        te vertellen hebben. En hij houdt een blog bij met de dingen die hij
        zelf ontdekt.{" "}
      </p>
      <div className="home--buttons">
        <button
          onClick={() => {
            navigate("/podcast")
          }}
          style={{ marginRight: "5.8rem" }}
        >
          Podcast
        </button>
        <button
          onClick={() => {
            navigate("/blog")
          }}
        >
          Blog
        </button>
      </div>
    </div>
  )
}

export default Podcast
