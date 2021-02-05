import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Menu from "./menu.component/menu.component"
import logo from "../../images/logo.png"
import "./navbar.component.scss"

function Navbar({ siteTitle }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  let navbarClasses = ["navbar"]

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  const burgerClickHandler = () => {
    setMenuActive(!menuActive)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })
  if (scrolled) {
    navbarClasses.push("scrolled")
  }
  if (menuActive) {
    navbarClasses.push("cross-activate")
  }
  return (
    <div className={navbarClasses.join(" ")}>
      <div className="logo">
        <img src={logo} alt="Endeavour Enterprises Logo" />
      </div>
      <div className="logo-container">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <Menu active={menuActive} menuScrolled={scrolled} />
      <div className="burger" onClick={() => burgerClickHandler()}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  )
}

export default Navbar
