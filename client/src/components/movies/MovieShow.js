import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

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
                {/* Text Card */}
                <Card>
                  <Card.Body>
                    {/* <Card.Title>📽 {movie.title}</Card.Title> */}
                    {/* <Card.Subtitle className='text-muted mb-2'>
                      <Badge className='me-2'>JP</Badge>{movie.originalTitle} <br />
                      <Badge className='me-2'>R</Badge>{movie.originalTitleRomanised}
                    </Card.Subtitle> */}
                    {/* Top Row */}
                    <Row>
                      <Col md="6">
                        <Table responsive="lg" bordered hover>
                          <tbody>
                            <tr>
                              <th><Badge pill className='bg-info text-light'>English</Badge></th>
                              <th>{movie.title}</th>
                            </tr>
                            <tr>
                              <td><Badge pill className='bg-info text-light'>Japanese</Badge></td>
                              <td>{movie.originalTitle}</td>
                            </tr>
                            <tr>
                              <td><Badge pill className='bg-info text-light'>Romaji</Badge></td>
                              <td>{movie.originalTitleRomanised}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                      <Col md="6">
                        <Table responsive="lg" striped bordered hover className='text-muted'>
                          <tbody>
                            <tr>
                              <th>Release Date</th>
                              <td>{movie.releaseDate}</td>
                            </tr>
                            <tr>
                              <th>Director</th>
                              <td>{movie.director}</td>
                            </tr>
                            <tr>
                              <th>Producer</th>
                              <td>{movie.producer}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>

                    <Card.Subtitle className='fw-bold'>Description</Card.Subtitle>
                    <Card.Text>
                      <p>{movie.description}</p>

                      <p>
                        <ButtonGroup>
                          <Button variant="outline-secondary" bg="info">Rotten Tomato Score</Button>
                          <Button disabled variant="outline-success" bg="info">{movie.rtScore}</Button>
                        </ButtonGroup>
                      </p>

                    </Card.Text>
                    <Link to="/movies" className="btn bg-secondary text-light">Back to Movies</Link>
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