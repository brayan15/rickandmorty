import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (): React.JSX.Element => (
  <nav className="navbar navbar-light bg-dark mb-4">
    <div className="container">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          Rick & Morty
        </Link>
      </div>
    </div>
  </nav>
)

export default Nav
