import React from "react"
import { Link } from "gatsby"
import AboutUs from "../../images/about-us.jpeg"

import "./about.component.scss"

export default function About() {
  return (
    <div className="about-container">
      <div className="list-container">
        <div className="image-container">
          <img src={AboutUs} alt="about us" />
        </div>
        <div class="about-details-container">
          <div className="about-us">
            <h3>About Us</h3>
            <p>
              In the year 2018 “Endeavour Enterprises” has established as
              partnership firm in dealing machine tool.Our range of work will
              satisfy your all needs. We can proudly call ourselves as one of
              the leading Manufacturers & Contractors providing Efficient &
              Specialized milling and turning work, reconditioning,
              retrofitting, scraping, and grinding of heavy job. Endeavour
              Enterprises has made an investment not only in advance
              manufacturing technology, but also in the high levels of technical
              expertise, essential to ensure that both aspects of the industry
              are combined, “hand in hand” offer you the highly competitive
              service you demand.
            </p>
          </div>
          <div className="box-container">
            <div className="box box2">
              <Link to="/about">
                <h3> Our Vision</h3>
                <p>
                  To be leading paradigm of innovative products & cost effective
                  solution.
                </p>
              </Link>
            </div>
            <div className="box box3">
              <Link to="/about">
                <h3> Our Mission</h3>
                <p>To provide well engineered automation solution precisely.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
