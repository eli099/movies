import { useEffect } from 'react'

// ! All below is react-router-dom version 6
// Bringing in components from react-router-dom (navigational system of React)

// BrowserRouter contains any component that needs to use a Link component
// Routes which allows us to only load one component at a time
// Route which specifies a route, and we attach to a component to make a single page
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import axios from 'axios' // Importing axios

// Import components
import Home from './components/Home'
import MovieIndex from './components/movies/MovieIndex'

const App = () => {
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/products/') // * <-- replace with your endpoint
      console.log(data)
    }
    getData()
  })

  return (
    <>
      {/* Any component that uses a Link component needs to be nested inside the BrowserRouter */}
      <BrowserRouter>
        <Home />
        <MovieIndex />
      </BrowserRouter>
    </>
  )
}

export default App
