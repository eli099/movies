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

  // const toCamel = (s) => {
  //   return s.replace(/([-_][a-z])/ig, ($1) => {
  //     return $1.toUpperCase()
  //       .replace('-', '')
  //       .replace('_', '')
  //   })
  // }

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await axios.get('https://ghibliapi.vercel.app/films')
        setMovies(data)
        console.log('data ->', data)
      } catch (error) {
        console.log(error)
      }
    }
    getMovies()
  }, [])

  

  return (
    <>
      <Container>
        <Row>
          <Col md="6" lg="4" className="movie">
            {movies.map(movie => {
              const { id, title, image, release_date, director } = movie
              return (
                <Link to="movies" key={id}>
                  <Card>
                    <Card.Img src={image} />
                    <Card.Body>
                      <Card.Title>{title} ({release_date})</Card.Title>
                      <Card.Subtitle>{original_title}</Card.Subtitle>
                      <Card.Text>{director}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MovieIndex

