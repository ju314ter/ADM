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
        <Link activeClassName="activeLink" className="link has-text-white-ter" to="/decouverte">
          Découvrir
        </Link>
        <Link activeClassName="activeLink" className="link has-text-white-ter" to="/materiel">
          Materiel
        </Link>
        <Link activeClassName="activeLink" className="link has-text-white-ter" to="/envol">
          Prendre son envol
          </Link>
      </div>
      <div className="middle-links">
        <Link activeClassName="activeLink" className="has-text-white-ter" to="/">
          <img src={logo} alt="Logo" style={{ width: 65 }} />
        </Link>
      </div>
      <div className="right-links is-flex flex-end">
        <a to="https://www.facebook.com/AilesDuMaine/" className="link has-text-white-ter">
          Facebook
          </a>
        <Link to="/tarif" activeClassName="activeLink" className="link has-text-white-ter">
          Tarifs
          </Link>
        <Link to="/mediatheque" activeClassName="activeLink" className="link has-text-white-ter">
          Mediatheque
          </Link>
      </div>
    </nav>
  )
}

export default Navbar
