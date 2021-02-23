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
        <Link className="link has-text-white-ter" to="/decouverte">
          Découvrir
        </Link>
        <Link className="link has-text-white-ter" to="/materiel">
          Materiel
        </Link>
        <Link to="/envol" className="link has-text-white-ter">
          Prendre son envol
          </Link>
      </div>
      <div className="middle-links">
        <Link className="has-text-white-ter" to="/">
          <img src={logo} alt="Logo" style={{ width: 65 }} />
        </Link>
      </div>
      <div className="right-links is-flex flex-end">
        <Link to="http://facebook.com" className="link has-text-white-ter">
          Facebook
          </Link>
        <Link to="/tarif" className="link has-text-white-ter">
          Tarifs
          </Link>
        <Link to="/mediatheque" className="link has-text-white-ter">
          Mediatheque
          </Link>
      </div>
    </nav>
  )
}

export default Navbar
