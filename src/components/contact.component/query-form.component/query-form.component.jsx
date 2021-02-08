import React, { useState } from "react"
import "./query-form.component.scss"

export default function QueryForm() {
  const [formData, setFormData] = useState({
    company_name: "",
    phone_num: "",
    requirement: "",
    email: "",
    message: "",
  })
  function handleChange(evt) {
    const value = evt.target.value
    setFormData({
      ...formData,
      [evt.target.name]: value,
    })
  }
  //mailto:mnshrt@gmail.com?subject=Query by ${formData.company_name}&body=Company Name: ${formData.company_name}, Requirement: ${formData.requirement}, Phone Number: ${formData.phone_num}, Email Id: ${formData.email}, Message: ${formData.message}
  return (
    <form className="query-form" target="_blank">
      <div className="box-1">
        <input
          type="text"
          name="company_name"
          value={formData.company_name}
          placeholder="Name/Company Name"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="requirement"
          value={formData.requirement}
          placeholder="Requirement"
          required
          onChange={handleChange}
        />
      </div>
      <div className="box-2">
        <div className="box-3">
          <div>
            <input
              type="tel"
              name="phone_num"
              value={formData.phone_num}
              placeholder="Phone no."
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email id"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="box-4">
          <textarea
            name="message"
            value={formData.message}
            rows="4"
            cols="28"
            placeholder="Message"
            required
            onChange={handleChange}
          />
        </div>
      </div>

      <button type="button">
        <a
          href={`mailto:Endeavourenterprises2018@gmail.com?subject=Query by ${formData.company_name}&body=Company Name: ${formData.company_name},\n Requirement: ${formData.requirement}, \n Phone Number: ${formData.phone_num},\n Email Id: ${formData.email},\n Message: ${formData.message}`}
        >
          Submit
        </a>
      </button>
    </form>
  )
}
