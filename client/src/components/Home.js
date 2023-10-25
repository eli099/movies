import React from 'react'

// Import Link to use in place of a tags when navigating internally
// ? a tags can still be used for external links
// Link components allow us to navigate around React site without reloading the page
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="hero text-center">
      <div className="hero-container bg-light">
        <h1 className="display-3">📽 Movie Collection 📽</h1>
        <p className='lead'>Information about all Studio Ghibli movies...</p>
        <Link to="/movies" className='btn btn-info btn-md'>Discover Movies</Link>
      </div>
    </div>
  )
}

export default Home