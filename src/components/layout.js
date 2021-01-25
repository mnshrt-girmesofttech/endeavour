/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 * 
 * 
 * backgroundImage: `url(${workshop})`, backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", backgroundSize: "100% 100%"
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import About from "./about.component/about.component";
import Showcase from "./showcase.component/showcase.component"
import Services from "./services.component/services.component"
import Contact from "./contact.component/contact.component"
import Clients from "./clients.component/clients.component"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Endeavour Enterprises`} />
      <Showcase />
      <About />
      <Services />
      <Clients />
      <Contact />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `960px`,
          padding: ` 1.0875rem 1.45rem 0`,
        }}
      >
        <main>{children}</main>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
