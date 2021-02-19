import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'

const Navbar = ({ show }) => {

  return (
    <nav
      className={`custom-navbar is-transparent ${show ? "" : "hidden-menu"}`}
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="left-links is-flex">
        <div className="link has-text-white-ter">
          Découvrir
          </div>
        <div className="link has-text-white-ter">
          Prendre son envol
          </div>
      </div>
      <div className="middle-links">
        <div className="has-text-white-ter">
          <img src={logo} alt="Logo" style={{ width: 65 }} />
        </div>
      </div>
      <div className="right-links is-flex flex-end">
        <div className="link has-text-white-ter">
          Tarifs
          </div>
        <div className="link has-text-white-ter">
          Mediatheque
          </div>
      </div>
    </nav>
  )
}

export default Navbar
