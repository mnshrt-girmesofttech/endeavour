import { Link } from "gatsby"
import React from "react"
import "./menu.component.scss"
const MenuItems = [
  {
    linkName: "Home",
    linkPath: "/",
  },
  {
    linkName: "About Us",
    linkPath: "/about",
  },
  {
    linkName: "Services",
    linkPath: "/services",
  },
  {
    linkName: "Infrastructure",
    linkPath: "/infrastructure",
  },
  {
    linkName: "Contact Us",
    linkPath: "/",
  },
]
const Menu = ({ active, menuScrolled }) => (
  <div
    className={`menu-container ${active ? "active" : ""} ${
      menuScrolled ? "menu-scrolled" : ""
    }`}
  >
    <ul className="nav-links">
      {MenuItems.map((menuItem, index) => (
        <li key={index}>
          <Link to={menuItem.linkPath}>{menuItem.linkName}</Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Menu
