import React from "react"
import { bool } from "prop-types"
import { Link } from "gatsby"
import "./Menu.css"

const Menu = ({ open, setOpen }) => {
  const styles = open ? "menu menu--open" : "menu menu--closed"

  return (
    <>
      <nav className="menu--large">
        {/* <Link to="/blog">Blog</Link> */}
        {/* <Link to="/poems" onClick={() => setOpen(!open)}>
          Poems
        </Link> */}
        <Link to="/over">?</Link>
        {/* <Link to="Doneren">Doneren</Link> */}
      </nav>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
