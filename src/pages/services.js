import React from 'react'
import { Link } from "gatsby"
import Header from "../components/header"
import Contact from "../components/contact.component/contact.component"


function services() {
    return (
        <>
            <Header siteTitle={`Endeavour Enterprises`} />


            <div
                style={{
                    margin: `0 auto`,
                    padding: ` 1.0875rem 1.45rem 0`,
                }}
            >
                <h1>Services</h1>
                <p>We carry out complete reconditioning of machines which includes total dismantling of  machine, inspection of all the components, Repairing / Replacement of faulty components,  bearing, lead and ball screw. We provide Recondition of Spindle, Gear Box and Guide Way.  Grinding, scrapping, Turcite Fixing & overhauling. Assembly of machine & Alignment of  machine. We also carry out heavy job works & project work.
                </p>

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
