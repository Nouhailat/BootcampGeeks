import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


function Header() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="w-100">
        <Navbar.Brand href="#home" className="ms-3">My Landing Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse" />
        <Navbar.Collapse id="nav-collapse">
          <Nav className="ms-auto me-3">
            <Nav.Link href="#section1">Sections</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  
  export default Header