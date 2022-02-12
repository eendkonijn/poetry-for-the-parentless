import React from "react"
import { bool, func } from "prop-types"
import "./Burger.css"

const Burger = ({ open, setOpen }) => {
  const styles = open ? "burger burger--open" : "burger"

  return (
    <div
      className={styles}
      open={open}
      onClick={() => {
        console.log("click")
        setOpen(!open)
      }}
    >
      <div />
      <div />
      <div />
    </div>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Burger
