import React from 'react'
import Header from './Header.jsx'
import CarouselComponent from './CarouselComponent.jsx'
import CardComponent from './Card.jsx'
import Contact from './Contact.jsx'
import Forms from './Forms.jsx'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <>
      <Header />

      <Container fluid className="py-5" id="section1">
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <CardComponent title="Section 1" text="Ceci est le premier encart." icon="fa-home" />
          </Col>
          <Col md={4} className="mb-4">
            <CardComponent title="Section 2" text="Deuxième encart ici." icon="fa-cogs" />
          </Col>
          <Col md={4} className="mb-4">
            <CardComponent title="Section 3" text="Troisième encart ici." icon="fa-phone" />
          </Col>
        </Row>
      </Container>

      <CarouselComponent />

      <Contact />

      <Container className="py-5">
        <h1 className="text-center mb-4">Form Demo</h1>
        <Forms />
      </Container>
    </>
  )
}

export default App
