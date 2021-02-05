import React from 'react'
import MyGallery from '../components/machine-gallery.component/machine-gallery.component'
import Header from "../components/header"
import Contact from "../components/contact.component/contact.component"

import './infrastructure.scss'

const manPower = [{
    srno: 1,
    position: "Supervisor Engineers",
    no: "3 person"
},
{
    srno: 2,
    position: "CNC Programmer",
    no: "2 person"
},
{
    srno: 3,
    position: "Skilled Operator",
    no: "10 person"
},
{
    srno: 4,
    position: "Semi Skilled Operator",
    no: "8 person"
},
{
    srno: 5,
    position: "Helpers",
    no: "7 person"
},
{
    srno: 6,
    position: "Commercial Staff",
    no: "2 person"
},
{
    srno: 7,
    position: "Quality Engineers",
    no: "2 person"
},
{
    srno: 8,
    position: "Maintenance Engineers & Assembly",
    no: "40 person"
},
]

const materialHandling = [{
    srno: 1,
    craneType: "Overhead Crane",
    capacity: "5ton",
    qty: 7
},
{
    srno: 2,
    craneType: "Overhead Crane",
    capacity: "10ton",
    qty: 1
}]

const listOfMachines = [
    {
        type: "VMC",
        description: "3200x2500x1000",
        no: 1,
        make: "Jyoti(India)"
    },
    {
        type: "VMC",
        description: "3000x2000x800",
        no: 1,
        make: "Hard Ford(Taiwan)"
    },
    {
        type: "VMC",
        description: "2000x840x800",
        no: 1,
        make: "Doosan(Germany)"
    },
    {
        type: "HMC",
        description: "3000x620x1000",
        no: 1,
        make: `Chien Kun M/C Co. Ltd
        (Taiwan )`
    },
    {
        type: "HBM",
        description: "1600x2000x1000",
        no: 1,
        make: `AFD100`
    },
    {
        type: "HBM",
        description: "1500x2500x1100",
        no: 1,
        make: `Collet`
    },
    {
        type: "HBM",
        description: "1200x2000x1100",
        no: 1,
        make: `Poland`
    },
    {
        type: "Plano Milling",
        description: "4000x1450x1000",
        no: 1,
        make: `MUIBI`
    },
    {
        type: "Compressor",
        description: "15 Kg Pressure",
        no: 1,
        make: `Elgi`
    },
    {
        type: "MIG Welding Machine",
        description: "CO2 + ARC",
        no: 1,
        make: `Licoln`
    },



]
function infrastructure() {
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
                <h1>Infrastructure</h1>
                <div className="infrastructure-container">
                    <div className="gallery-box">
                        <MyGallery />
                    </div>
                    <div className="table-container table-container-1">
                        <h1>Material Handling</h1>
                        <table className="layout display responsive-table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th colspan="2">Crane Type</th>
                                    <th>Capacity</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {materialHandling.map((ele, i) => (
                                    <tr key={`materialHandling-${i}`}>
                                        <td className="serial-num">{ele.srno}</td>
                                        <td className="crane-type" colspan="2">{ele.craneType}</td>
                                        <td className="capacity">{ele.capacity}</td>
                                        <td className="qty">{ele.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="table-container">
                        <h1>Man Power</h1>
                        <table className="layout display responsive-table">
                            <thead>
                                <tr >
                                    <th>Sr. No.</th>
                                    <th colspan="2">Position</th>
                                    <th>No. of Person</th>
                                </tr>
                            </thead>
                            <tbody>
                                {manPower.map((ele, i) => (
                                    <tr key={`manpower-${i}`}>
                                        <td className="serial-num">{ele.srno}</td>
                                        <td className="position" colspan="2">{ele.position}</td>
                                        <td className="number">{ele.no}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="table-container">
                        <h1>List of Machines</h1>
                        <table className="layout display responsive-table">
                            <thead>
                                <tr>
                                    <th>TYPE OF PRODUCTION EQUIPMENTS/MACHINES</th>
                                    <th colspan="2">MACHINE DESCRIPTION</th>
                                    <th>NO. OF PRODUCTION EQUIPMENTS / MACHINES</th>
                                    <th>EE/PRD/01/Rev.00 MAKE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOfMachines.map((ele, i) => (
                                    <tr key={`listOfMachines-${i}`}>
                                        <td className="type">{ele.type}</td>
                                        <td className="description" colspan="2">{ele.description}</td>
                                        <td className="no">{ele.no}</td>
                                        <td className="make">{ele.make}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default infrastructure
