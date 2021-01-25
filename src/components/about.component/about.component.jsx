import React from "react"
import { Link } from "gatsby"
import machineMill from "../../images/machine-mill-1.jpeg"
import vision from "../../images/vision.jpg"
import mission from "../../images/mission.jpg"
import "./about.component.scss"
export default function About() {
  return (
    <div className="about-us-container">
      <div className="box">
        <Link to="/about/">
          <img src={machineMill} alt="about us" />
          <h3>About Us</h3>
          <p>
            In the year 2018 “Endeavour Enterprises” has established as
            partnership firm in dealing machine tool.
          </p>
        </Link>
      </div>
      <div className="box">
        <img src={vision} alt="our vision" />
        <h3> Our Vision</h3>
        <p>
          To be leading paradigm of innovative products & cost effective
          solution.
        </p>
      </div>
      <div className="box">
        <img src={mission} alt="our mission" />
        <h3> Our Mission</h3>
        <p>To provide well engineered automation solution precisely.</p>
      </div>
    </div>
  )
}
