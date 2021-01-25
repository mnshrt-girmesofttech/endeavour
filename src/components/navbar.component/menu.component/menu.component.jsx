import { Link } from "gatsby"
import React from "react"
import "./menu.component.scss"

const Menu = () => (
  <div className="menu-container">
    <ul>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about">ABOUT US</Link>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
      </li>
      <li>
        <Link to="/contact-us">CONTACT US</Link>
      </li>
    </ul>
  </div>
)

export default Menu
