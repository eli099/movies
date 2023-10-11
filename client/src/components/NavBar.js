import React from 'react'

// Bring in Link for React navigation
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  )
}

export default NavBar