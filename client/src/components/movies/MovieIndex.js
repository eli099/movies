// Components to display all movies in a list

import React, { useState, useEffect } from 'react'

// ? Import Link
import { Link } from 'react-router-dom'

import axios from 'axios'

// ? Spinner
import SpinnerIcon from '../utilities/SpinnerIcon'

// Bootstrap components

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'


const MovieIndex = () => {

  const [movies, setMovies] = useState([])

  const [errors, setErrors] = useState(false)

  // To camelise the (snake case) keys from the API [installed the 'camelize' package]
  const camelize = require('camelize')

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('https://ghibliapi.vercel.app/films')
        // 'camelize' the data
        const camelCaseData = camelize(data)
        // set to state
        setMovies(camelCaseData)
        console.log('data ->', data)
        console.log('camelized data ->', camelCaseData)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getMovies()
  }, [])



  return (
    <>
      <Container className="movie-list">
        <Row>
          {movies.length ? movies.map(movie => {
            const { id, title, image, releaseDate } = movie
            return (
              <Col md="6" lg="4" className="movie mb-4" key={id}>
                <Card>
                  <Link to={`/movies/${id}`}>
                    <Card.Img src={image} />
                  </Link>
                  <Card.Body className='bg-light'>
                    <Link to={`/movies/${id}`}>
                      <Card.Title>{title} ({releaseDate})</Card.Title>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
            :
            <h2 className='text-center'>
              {errors ? 'Something went wrong! Please try again later.' : <SpinnerIcon />}
            </h2>
          }
        </Row>
      </Container >
    </>
  )
}

export default MovieIndex

