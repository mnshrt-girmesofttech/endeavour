import React from "react"
import accurateEngg from "../../images/accurate-engg.png"
import atf from "../../images/atf.png"
import bharatForge from "../../images/bharat-forge.png"
import hyt from "../../images/hyt.png"
import kabra from "../../images/kabra.png"
import koneCrance from "../../images/kone-crance.png"
import sil from "../../images/sil.png"
import taikisha from "../../images/taikisha.jpg"
import thyssenkrupp from "../../images/thyssenkrupp.png"
import venusRobotics from "../../images/venus-robotics.png"
import "./clients.component.scss"
export default function Clients() {
  return (
    <div className="clients-container">
      <h3> Our Clients</h3>
      <div class="grid-container">
        <div class="grid-item">
          <img src={accurateEngg} alt="" />
        </div>
        <div class="grid-item">
          <img src={atf} alt="" />
        </div>
        <div class="grid-item">
          <img src={bharatForge} alt="" />
        </div>
        <div class="grid-item">
          <img src={hyt} alt="" />
        </div>
        <div class="grid-item">
          <img src={kabra} alt="" />
        </div>
        <div class="grid-item">
          <img src={koneCrance} alt="" />
        </div>
        <div class="grid-item">
          <img src={sil} alt="" />
        </div>
        <div class="grid-item">
          <img src={taikisha} alt="" />
        </div>
        <div class="grid-item">
          <img src={thyssenkrupp} alt="" />
        </div>
        <div class="grid-item">
          <img src={venusRobotics} alt="" />
        </div>
      </div>
    </div>
  )
}
