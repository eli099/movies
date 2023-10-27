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
        <p className='fs-6 fw-light text-wrap'>
          Studio Ghibli, acclaimed Japanese animation film studio that was founded in 1985 by animators and directors Miyazaki Hayao and Takahata Isao and producer Suzuki Toshio. Studio Ghibli is known for the high quality of its filmmaking and its artistry. Its feature films won both critical and popular praise and influenced other animation studios.
        </p>
        <p className="blockquote-footer">
          Britannica
        </p>
        <Link to="/movies" className='btn btn-info btn-md'>Discover Movies</Link>
      </div>
    </div>
  )
}

export default Home