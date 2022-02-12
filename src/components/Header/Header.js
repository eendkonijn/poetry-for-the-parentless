import React, { useState } from "react"
import Burger from "../Burger/Burger"
import Menu from "../Menu/Menu"
import "./Header.css"
import { Link } from "gatsby"

//TODO: als je verder naar beneden scrollt verdwijnt de header, zodat je beeld rustig wordt.

const Header = props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="header container">
        <Link to="/">
          <h1 className="heading">Aardse Zaken</h1>
          <h6 className="heading">wetenschap, natuur, rituelen, mensen</h6>
        </Link>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </>
  )
}

export default Header
