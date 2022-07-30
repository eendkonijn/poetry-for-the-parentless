import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./Over.css"

const Over = props => {
  const image = (
    <StaticImage
      src="../../assets/images/portrait-rene.jpg"
      alt="rene portrait"
      className="over--image"
      loading="eager"
    />
  )

  return (
    <div className="Over">
      {" "}
      <div className="content--flexbox content-container">
        {image}
        <div className="over--text">
          <h2>About</h2>
          <p>
            <p>
              By René. Find me{" "}
              <a
                className="underline"
                href="https://www.facebook.com/rene.vanderstok"
              >
                on Facebook
              </a>
            </p>
            <p> Inspired by: </p>
            <ul>
              <li className="plum-village-icon">
                <a
                  href="https://www.plumvillage.org"
                  className="text-decoration-none"
                >
                  Thich Nat Hanh and the Order of Interbeing
                </a>
              </li>
              <li className="dark-mountain-icon">
                <a
                  href="https://dark-mountain.net/"
                  className="text-decoration-none"
                >
                  The Dark Mountain Project
                </a>
              </li>
              <li className="dhamma-icon">
                <a
                  href="https://www.dhamma.org"
                  className="text-decoration-none"
                >
                  Vipassana Meditation as taught by S.N. Goenka
                </a>
              </li>
            </ul>
            <p>
              <strong>
                <em>Dedicated to Gaia</em>
              </strong>
            </p>
          </p>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
      </div>
    </div>
  )
}

export default Over
