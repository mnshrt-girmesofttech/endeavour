import React from 'react'
import { Link } from "gatsby"
import Header from "../components/header"


function clients() {
    return (
        <>
            <Header siteTitle={`Endeavour Enterprises`} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: `960px`,
                    padding: ` 1.0875rem 1.45rem 0`,
                }}
            >
                <h1>Clients</h1>
                <div>
                    <ul>
                        <li>Kabra Extrusion Technik Limited.</li>
                        <li> M/S Bharat Forge Limited.</li>
                        <li> M/S KoneCrance Demag India Pvt Ltd.</li>
                        <li> M/S Accurate Egg. Company Pvt. Ltd.</li>
                        <li> M/S Suresh Indu.Leser Pvt Ltd.</li>
                        <li> M/S Taikisha India.Pvt Ltd.</li>
                        <li> M/S HYT Engineering Company Pvt. Ltd. PUNE</li>
                        <li> M/S Thyssenkrupp System Engineering India Pvt Ltd</li>
                        <li> M/S Venus Robotics Pvt. Ltd.</li>
                        <li> M/S AT&F INDIA FABRICATION PVT LTD</li>

                    </ul>
                </div>

                <Link to="/">Go to Home</Link> <br />
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

export default clients
