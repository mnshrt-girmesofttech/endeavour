import PropTypes from "prop-types"
import React from "react"
import Navbar from "../components/navbar.component/navbar.component";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
    }}
  >
    <div style={{ background: "#faf4df", height: "50px" }}>
      <ul style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingTop: "12.5px", listStyle: "none" }}>
        <li style={{ marginRight: "30px" }}>9225505783</li>
        <li style={{ marginRight: "10px" }}>Endeavourenterprises2018@gmail.com &nbsp; &nbsp;endeavourent@rediffmail.com</li>
      </ul>
    </div>
    {/* <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: `0 auto`,
        maxWidth: `1360px`,
        height: `107px`,
      }}
    >
      <div style={{ display: "flex" }}>
        <div >
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


      <Menu />
            </div> */}
    <Navbar siteTitle={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
