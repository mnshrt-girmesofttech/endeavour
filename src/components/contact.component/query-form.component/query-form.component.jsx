import React from "react"
import "./query-form.component.scss"

export default function QueryForm() {
  return (
    <form className="query-form">
      <div className="box-1">
        <input
          type="text"
          value={""}
          placeholder="Name/Company Name"
          required
        />
        <input type="text" value={""} placeholder="Requirement" required />
      </div>
      <div className="box-2">
        <div className="box-3">
          <div>
            <input type="tel" placeholder="Phone no." required />
          </div>
          <div>
            <input type="email" placeholder="Email id" required />
          </div>
        </div>
        <div className="box-4">
          <textarea
            name="message"
            rows="4"
            cols="28"
            placeholder="Message"
            required
          />
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
