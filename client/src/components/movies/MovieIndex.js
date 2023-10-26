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


const MovieIndex = () => {

  const [movies, setMovies] = useState([])

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
      }
    }
    getMovies()
  }, [])



  return (
    <>
      <Container className="movie-list">
        <Row>
          {movies.map(movie => {
            const { id, title, image, releaseDate, director, originalTitle } = movie
            return (
              <Col md="6" lg="4" className="movie mb-4" key={id}>
                <Card>
                  <Link to={`/movies/${id}`}>
                    <Card.Img src={image} />
                  </Link>
                  <Card.Body className='bg-primary-subtle'>
                    <Link to={`/movies/${id}`}>
                      <Card.Title>{title} ({releaseDate})</Card.Title>
                    </Link>
                    <Card.Subtitle>{originalTitle}</Card.Subtitle>
                    <Card.Text>dir. {director}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container >
    </>
  )
}

export default MovieIndex

