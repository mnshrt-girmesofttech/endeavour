import PropTypes from "prop-types"
import React from "react"
import Navbar from "../components/navbar.component/navbar.component";
import "./header.scss";
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
    }}
    id="top"
  >
    <div className="contacts-container">
      <div className="contact-box">9225505783</div>
      <div className="contact-box">Endeavourenterprises2018@gmail.com</div>
      <div className="contact-box">endeavourent@rediffmail.com</div>
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
