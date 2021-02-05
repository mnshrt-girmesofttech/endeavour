import React from "react"
import { Gallery, Item } from "react-photoswipe-gallery"
import "photoswipe/dist/photoswipe.css"
import "photoswipe/dist/default-skin/default-skin.css"
import Co2Welding from "../../images/machine-gallery/co2-welding.jpg"
import CollectHbmBore from "../../images/machine-gallery/collect-hbm-bore.jpg"
import GasWelding from "../../images/machine-gallery/gas-welding.jpg"
import JyotiVmc from "../../images/machine-gallery/jyoti-vmc.jpg"
import PlanoMilling from "../../images/machine-gallery/plano-milling.jpg"
import PressMachine from "../../images/machine-gallery/press-machine.jpg"
import StandComp from "../../images/machine-gallery/stand-comp.jpg"
import "./machine-gallery.component.scss"
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
const MachineGallery = () => (
  <div className="photos-container">
    <div className="photos-1">
      <div className="photos">
        <img src={Co2Welding} alt="CO2 Welding" />
      </div>
      <div className="photos">
        <img src={CollectHbmBore} alt="Collect HBM Bore" />
      </div>
      <div className="photos">
        <img src={GasWelding} alt="Gas Welding" />
      </div>
      <div className="photos">
        <img src={JyotiVmc} alt="Jyoti VMC" />
      </div>
    </div>
    <div className="photos-2">
      <div className="photos">
        <img src={PlanoMilling} alt="Plano Milling Machine" />
      </div>
      <div className="photos">
        <img src={PressMachine} alt="Press Machine" />
      </div>
      <div className="photos">
        <img src={StandComp} alt="Stand Comp" />
      </div>
    </div>
  </div>
)
export default MachineGallery
