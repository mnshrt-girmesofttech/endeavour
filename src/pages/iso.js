import React from 'react'
import Header from "../components/header"
import Contact from "../components/contact.component/contact.component"
import Certificate from "../images/certificate.jpg"

import './services.scss'

function iso() {
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
                <div className="certificate-container">
                    <img src={Certificate} alt="ISO certificate" />
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

export default iso
