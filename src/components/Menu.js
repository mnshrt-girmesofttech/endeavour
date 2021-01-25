import { Link } from "gatsby"
import React from 'react'

const Menu = () => (
    <div style={{ paddingTop: "40px", width: "50%" }}>
        <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-evenly" }}>
            <li ><Link to="/" style={{ color: `white`, textDecoration: `none`, }}>
                home
        </Link></li>
            <li ><Link to="/about" style={{ color: `white`, textDecoration: `none`, }}>
                about us
        </Link></li>
            <li ><Link to="/services" style={{ color: `white`, textDecoration: `none`, }}>
                services
        </Link></li>
            <li ><Link to="/contact-us" style={{ color: `white`, textDecoration: `none`, }}>
                contact us
        </Link></li>
        </ul>
    </div>
)

export default Menu;
