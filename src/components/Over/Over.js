import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Over.css"

const Over = props => {
  const image = (
    <StaticImage
      src="../../assets/images/reneyurt2.jpg"
      alt="rene yurt"
      className="over--image"
    />
  )

  return (
    <div className="Over">
      {" "}
      <div className="content--flexbox content-container">
        {image}
        <div className="over--text">
          <h2>Over Aardse Zaken</h2>
          <p>
            Aardse Zaken gaat over rituelen. Over mensen die met een open hart
            leven. Over wetenschap. Ideeen, inspiratie, poezie, interviews,
            magie, realisme. Van deze en andere werelden.
          </p>{" "}
          <h2>Over Rene</h2>
          <p>
            René van der Stok is van alles maar bovenal mens. Als journalist
            schreef hij eerder voor Bodhi, over boeddhisme in de Westerse
            wereld. De podcast Aardse Zaken komt voort uit zijn verlangen om de
            wereld beter te begrijpen, een hang naar verbinding met de natuur en
            een diepgaand leven.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Over
