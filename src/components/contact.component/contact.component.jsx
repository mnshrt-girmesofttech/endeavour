import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import QueryForm from "./query-form.component/query-form.component"
import "./contact.component.scss"

export default function Contact() {
  return (
    <div id="contact-form" className="contact-main-container">
      <div className="contact-container">
        <div className="box query-form-container">
          <QueryForm />
        </div>
        <div className="box address-ql-container">
          <div className="quick-links-box">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="contacts-box">
            <h4>CONTACT US</h4>
            <h5>ENDEAVOUR ENTERPRISES</h5>
            <ul>
              <li>
                <strong>Address:</strong> Sr No. 145, Opp. Hindusthan Unilever,
                Ganesh Nagar Industrial Estate, Fursungi,Pune-412308
              </li>
              <li>
                <strong>Contact Person:</strong> Mr. Anil Gidde - +91-9225505783
              </li>
              <li>
                <strong>Email:</strong> Endeavourenterprises2018@gmail.com,
                endeavourent@rediffmail.com
              </li>
              <li>
                {" "}
                <AnchorLink to="#top" title="top">
                  <button style={{ color: "black" }}>TOP</button>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
