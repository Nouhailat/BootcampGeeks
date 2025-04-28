import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <Container id="contact" className="py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your message" name="message" />
        </Form.Group>
        <div className="text-center">
          <Button variant="success" type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Contact
