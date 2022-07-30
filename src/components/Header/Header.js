import React, { useState } from "react"
import Menu from "../Menu/Menu"
import "./Header.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//TODO: als je verder naar beneden scrollt verdwijnt de header, zodat je beeld rustig wordt.

const Header = props => {
  const image = (
    <StaticImage
      src="../../assets/images/embryoicon.webp"
      alt="ruin icon"
      className="header--icon"
      loading="eager"
    />
  )

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="header container">
        <Link to="/">
          {image}
          {/* <h1 className="heading">Poetry for the Parentless</h1> */}
          {/* <h6 className="heading">wetenschap, natuur, rituelen, mensen</h6> */}
        </Link>
        {/* <Burger open={open} setOpen={setOpen} /> */}
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default Header
