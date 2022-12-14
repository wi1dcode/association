import React, { Component } from 'react'
import { Link } from "react-router-dom"


class Header extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={`/`} className='navbar-brand'>Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-head">
              <li className="nav-item">
                <Link to={`/Contact`} className='nav-link'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

export default Header