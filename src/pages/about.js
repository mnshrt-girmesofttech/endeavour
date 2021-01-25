import React from 'react'
import { Link } from "gatsby"
import Header from "../components/header"
import Contact from "../components/contact.component/contact.component"


function about() {
    return (
        <>
            <Header siteTitle={`Endeavour Enterprises`} />


            <div
                style={{
                    margin: `0 auto`,
                    padding: ` 1.0875rem 1.45rem 0`,
                }}
            >
                <h3>About Us</h3>
                <p>In the year 2018 “Endeavour Enterprises” has established as partnership  firm in dealing machine tool. Our range of work will satisfy your all needs.
                We can proudly call ourselves as one of the leading Manufacturers &  Contractors providing Efficient & Specialized milling and turning work,  reconditioning, retrofitting, scraping, and grinding of heavy job. Endeavour Enterprises has made an investment not only in advance manufacturing  technology, but also in the high levels of technical expertise, essential to  ensure that both aspects of the industry are combined, “hand in hand” offer  you the highly competitive service you demand.
                </p>
                <h3>Expertise:</h3>
                <p>The company has earned an excellence in engineering industry as a reliable retrofitter and fabricator of machine tools. We offer a variety of services from the traditional machine tools to the fully automated V.M.C. We provide reconditioning, retrofitting, scraping, grinding of heavy job work, all types of slide, bed grinding, matching, turcite fitment of slides & solutions on surface with slide way grinding. We also work in project designing & manufacturing.</p>
                <h3>Flexibility</h3>
                <p>We are bound to provide the deliverables in time. We pleasure ourselves on having the flexibility and manufacturing technology to be in a position to offer both long and short runs in milling and turning a diverse range of components, jigs and fixtures, as well as the facility of a surface grinding service.</p>

                <h3>Ability:</h3>
                <p>We have CAD (DELCAM) Network facilities with VMC and surface grinding. We having the ability of the more traditional based machining methods also having demands in now days. We have given importance to not only advanced technology but also technical excellence. It is  useful to provide the excellent solution with best accuracy.
</p>
                <h3>Our Mission: </h3>
                <p>To provide well engineered automation solution precisely. </p>
                <h3>Our Vision: </h3>
                <p>To be leading paradigm of innovative products & cost effective solution. </p>


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

export default about
