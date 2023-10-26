import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// Import useParams: a method that returns an object of placholders as keys
// e.g. 
// {
//   id: '1234567'
// }

import { useParams } from 'react-router-dom'

// Import Spinner
import SpinnerIcon from '../utilities/SpinnerIcon'

const MovieShow = () => {

  const { id } = useParams()
  console.log('params ->', id)

  // ? State
  const [movie, setMovie] = useState(false)
  const [errors, setErrors] = useState(false)

  // To camelise the (snake case) keys from the API [installed the 'camelize' package]
  const camelize = require('camelize')

  useEffect(() => {
    const getMovie = async () => {
      try {
        const { data } = await axios.get(`https://ghibliapi.vercel.app/films/${id}`)
        const camelCaseData = camelize(data)
        setMovie(camelCaseData)
        console.log('movie data ->', movie)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getMovie()
  }, [id])

  return (
    <>
      <Container className='movie-list'>
        <Row>
          {movie ?
            <>
              <Col md="6">
                <img src={movie.image} alt={movie.title} />
              </Col>
              <Col md="6">
                <Card>
                  <Card.Body>
                    <h4>Description</h4>
                    <p>{movie.description}</p>
                    <hr />
                    <h4>Director</h4>
                    <p>{movie.director}</p>
                    <hr />
                    <h4>Producer</h4>
                    <p>{movie.producer}</p>
                    <hr />
                    <Link to="/movies" className="btn btn-light">Back to Movies</Link>
                  </Card.Body>
                </Card>
              </Col>
            </>
            :
            <h2 className='text-center'>
              {errors ? 'Something went wrong! Please try again later.' : <SpinnerIcon />}
            </h2>
          }
        </Row>
      </Container>
    </>
  )
}

export default MovieShow