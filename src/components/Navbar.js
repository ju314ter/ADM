import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <nav
        className="custom-navbar is-transparent"
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
          <div className="link has-text-white-ter">
            Logo
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
}

export default Navbar
