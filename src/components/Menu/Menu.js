import React from "react"
import { bool } from "prop-types"
import { Link } from "gatsby"
import "./Menu.css"

const Menu = ({ open, setOpen }) => {
  const styles = open ? "menu menu--open" : "menu menu--closed"

  return (
    <>
      <nav className={styles} open={open}>
        <Link to="/podcast" onClick={() => setOpen(!open)}>
          Podcast
        </Link>
        <Link to="/blog" onClick={() => setOpen(!open)}>
          Blog
        </Link>
        <Link to="/over" onClick={() => setOpen(!open)}>
          Over
        </Link>
        {/* <Link to="/doneren" onClick={() => setOpen(!open)}>
          Doneren
        </Link> */}
      </nav>
      <nav className="menu--large">
        <Link to="/podcast">Podcast</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/over">Over</Link>
        {/* <Link to="Doneren">Doneren</Link> */}
      </nav>
    </>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
