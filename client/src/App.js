import { useEffect } from 'react'

// ! All below is react-router-dom version 6
// Bringing in components from react-router-dom (navigational system of React)

// BrowserRouter contains any component that needs to use a Link component
// Routes which allows us to only load one component at a time
// Route which specifies a route, and we attach to a component to make a single page
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import components
import Home from './components/Home'
import MovieIndex from './components/movies/MovieIndex'
import MovieShow from './components/movies/MovieShow'
import PageNavBar from './components/PageNavBar'
import NotFound from './components/NotFound'

const App = () => {

  return (
    <main className='site-wrapper bg-info'>
      {/* Any component that uses a Link component needs to be nested inside the BrowserRouter */}
      <BrowserRouter>
        {/* Any global component that we want o show on every page doesn't need a route */}
        <PageNavBar />
        {/* Alternatively any component that needs its own url needs to be added to a route */}
        <Routes>
          {/* Only route components should be children of Routes */}
          {/* We define a Route component then add the component we want to show as an element*/}
          {/* Path we wish component to have is set in path attribute */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieIndex />} />
          {/* Below: Define route for specific movie, using aplaceholder */}
          {/* To define placeholder in path, use colone before e.g. :id */}
          <Route path="/movies/:id" element={<MovieShow />} />
          {/* Following path matches any path specified - needs to come last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
