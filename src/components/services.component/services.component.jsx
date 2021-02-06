import React from "react"
import { Link } from "gatsby"
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
          <Link to="/services">
            <img src={importedMachines} alt="imported machines substitutes" />
            <p>
              Design and manufacturing import substitute components for imported
              machines.
            </p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/services">
            <img src={spareParts} alt="spare parts supply" />
            <p>We supply all type of machine spare parts.</p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/services">
            <img
              src={machinesProjects}
              alt="machines and projects installation"
            />
            <p>
              Installation and commissioning of all type machines & projects.
            </p>
          </Link>
        </div>
        <div className="service-box">
          <Link to="/services">
            <img src={welding} alt="welding and fabrication" />
            <p>
              Welding & fabrication with materials to larger size in the plates
              40 thk in the ARC welding & gas Welding
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
