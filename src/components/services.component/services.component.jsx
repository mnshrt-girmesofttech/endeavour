import React from "react"
import importedMachines from "../../images/imported-machines.jpg"
import spareParts from "../../images/spare-parts.jpg"
import machinesProjects from "../../images/machines-projects.jpg"
import welding from "../../images/welding.jpg"
import "./services.component.scss"
export default function Services() {
  return (
    <div className="services-container">
      <h3>Services</h3>
      <div className="service-list-container">
        <div className="service-box">
          <img src={importedMachines} alt="imported machines substitutes" />
          <p>
            Design and manufacturing import substitute components for imported
            machines.
          </p>
        </div>
        <div className="service-box">
          <img src={spareParts} alt="spare parts supply" />
          <p>We supply all type of machine spare parts.</p>
        </div>
        <div className="service-box">
          <img
            src={machinesProjects}
            alt="machines and projects installation"
          />
          <p>Installation and commissioning of all type machines & projects.</p>
        </div>
        <div className="service-box">
          <img src={welding} alt="welding and fabrication" />
          <p>
            Welding & fabrication with materials to larger size in the plates 40
            thk in the ARC welding & gas Welding
          </p>
        </div>
      </div>
    </div>
  )
}
