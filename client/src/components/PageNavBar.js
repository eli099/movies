import React from 'react'

// Bring in Link for React navigation
import { Link } from 'react-router-dom'

// Import React Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const PageNavBar = () => {
  return (
    <Navbar bg="secondary" expand="sm">
      <Container>
        {/* Navbar Brand */}
        {/* Replace href with 'as={Link}' and a 'to="/..."' */}
        <Navbar.Brand as={Link} to="/">📽</Navbar.Brand>
        {/* Navbar Toggle -> mobile burger icon displayed at breakpoint specified on Navbar component above */}
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        {/* Navbar Collapse */}
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            {/* Nav Link  */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar