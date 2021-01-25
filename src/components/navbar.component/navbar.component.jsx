import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Menu from "./menu.component/menu.component"
import logo from "../../images/logo.png"
import "./navbar.component.scss"

function Navbar({ siteTitle }) {
  const [scrolled, setScrolled] = useState(false)
  let navbarClasses = ["navbar"]

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })
  if (scrolled) {
    navbarClasses.push("scrolled")
  }
  return (
    <div className={navbarClasses.join(" ")}>
      <div style={{ display: "flex", height: "100%" }}>
        <div className="logo">
          <img src={logo} alt="Endeavour Enterprises Logo" />
        </div>
        <div style={{ padding: "25px 0 0 25px" }}>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
      </div>
      {/* <nav className="navigation">
              <div style={{ padding: "25px 0 0 25px" }}>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
         </nav> */}
      <Menu />
    </div>
  )
}

export default Navbar
