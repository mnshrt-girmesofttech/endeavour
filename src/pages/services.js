import React from 'react'
import { Link } from "gatsby"
import Header from "../components/header"
import Contact from "../components/contact.component/contact.component"
import service1 from "../images/service-1.png"
import service2 from "../images/service-2.png"
import service3 from "../images/service-3.png"
import service4 from "../images/service-4.png"
import './services.scss'

function services() {
    return (
        <>
            <Header siteTitle={`Endeavour Enterprises`} />


            <div
                style={{
                    backgroundColor: "wheat",
                    margin: `0 auto`,
                    padding: `1.0875rem 1.45rem`,
                }}
            >
                <h1>Services</h1>
                <div className="service-list-container">
                    <div className="service-box">
                        <img src={service1} alt="imported machines substitutes" />
                        <p>
                            <ul>
                                <li>Heavy Duty CNC Machining</li>
                                <li>Heavy Duty Job works</li>
                            </ul>
                        </p>
                    </div>
                    <div className="service-box">
                        <img src={service2} alt="spare parts supply" />
                        <p><ul>
                            <li>Slide way Grinding </li>
                            <li>Surface Grinding work  </li>
                        </ul></p>
                    </div>
                    <div className="service-box">
                        <img
                            src={service3}
                            alt="machines and projects installation"
                        />
                        <p>Specialist in:
                            <ul>
                                <li>HBM machine</li>
                                <li>Plano milling machine</li>
                                <li>SPM machine</li>
                                <li>VMC machine</li>
                                <li>HMC machine</li>
                            </ul>
                        </p>
                    </div>
                    <div className="service-box">
                        <img src={service4} alt="welding and fabrication" />
                        <p><ul>
                            <li>VMC, CNC machine Reconditioning and Retrofitting.</li>
                            <li>Turn Key Industrial Projects.</li>
                        </ul>
                        </p>
                    </div>
                </div>

                <Contact />
                <footer
                    style={{
                        marginTop: `2rem`,
                    }}
                >
                    Copyright ©
            {` `}
                    <span>Endeavour Enterprises. All Rights Reserved</span>
                </footer>
            </div>
        </>
    )
}

export default services
