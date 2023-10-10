import React from 'react'

// Import Link to use in place of a tags when navigating internally
// ? a tags can still be used for external links
// Link components allow us to navigate around React site without reloading the page
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/movies">Movies</Link>
    </>
  )
}

export default Home