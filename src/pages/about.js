import React from 'react'
import AboutUs from '../images/about-us.jpeg'
import Header from "../components/header"
import Contact from "../components/contact.component/contact.component"
import './about.scss';

function about() {
    return (
        <>
            <Header siteTitle={`Endeavour Enterprises`} />


            <div
                style={{
                    margin: `0 auto`,
                    padding: ` 1.0875rem 1.45rem 0`,
                }}
                className="main-container"
            >
                <h1>About Us</h1>
                <div className="about-container">
                    <div className="about-container-1">
                        <img src={AboutUs} alt="about us" />
                    </div>
                    <div className="about-container-2">
                        <p>In the year 2018 “Endeavour Enterprises” has established as partnership  firm in dealing machine tool. Our range of work will satisfy your all needs.
                        We can proudly call ourselves as one of the leading Manufacturers &  Contractors providing Efficient & Specialized milling and turning work,  reconditioning, retrofitting, scraping, and grinding of heavy job. Endeavour Enterprises has made an investment not only in advance manufacturing  technology, but also in the high levels of technical expertise, essential to  ensure that both aspects of the industry are combined, “hand in hand” offer  you the highly competitive service you demand.
                        </p>
                    </div>
                </div>



                <h2>Why choose us?</h2>
                <div className="choose-container">
                    <div className="container-1">
                        <div className="box"><h3>Technical Expertise</h3><p>The company has earned an excellence in engineering industry as a reliable retrofitter and fabricator of machine tools. </p></div>
                        <div className="box"><h3>Quality</h3><p>Establish and maintain highest standards of professional performance and ethical practice. We have given importance to not only advanced technology but also technical excellence. It is  useful to provide the excellent solution with best accuracy.</p></div>
                    </div>
                    <div className="container-2">
                        <div className="box"><h3>Flexibility</h3><p>We are bound to provide the deliverables in time. We pleasure ourselves on having the flexibility and manufacturing technology to be in a position to offer both long and short runs in milling and turning a diverse range of components, jigs and fixtures, as well as the facility of a surface grinding service.</p></div>
                        <div className="box"><h3>Ability</h3><p>We have CAD (DELCAM) Network facilities with VMC and surface grinding. We having the ability of the more traditional based machining methods also having demands in now days.</p></div>
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

export default about
