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
                            Design and manufacturing import substitute components for imported
                            machines.
          </p>
                    </div>
                    <div className="service-box">
                        <img src={service2} alt="spare parts supply" />
                        <p>We supply all type of machine spare parts.</p>
                    </div>
                    <div className="service-box">
                        <img
                            src={service3}
                            alt="machines and projects installation"
                        />
                        <p>Installation and commissioning of all type machines & projects.</p>
                    </div>
                    <div className="service-box">
                        <img src={service4} alt="welding and fabrication" />
                        <p>
                            Welding & fabrication with materials to larger size in the plates 40
                            thk in the ARC welding & gas Welding
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
