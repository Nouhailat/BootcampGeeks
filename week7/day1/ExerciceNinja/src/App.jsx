import React from "react";
import Header from "./Header";
import CardComponent from "./Card";
import Contact from "./Contact";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header />

      <Container fluid>
        <Row className="justify-content-center my-5" id="section1">
          <Col md={4}>
            <CardComponent
              title="Section 1"
              text="This is the first section of the landing page."
              icon="fa-home"
            />
          </Col>
          <Col md={4}>
            <CardComponent
              title="Section 2"
              text="This is the second section of the landing page."
              icon="fa-cogs"
            />
          </Col>
          <Col md={4}>
            <CardComponent
              title="Section 3"
              text="This is the third section of the landing page."
              icon="fa-phone"
            />
          </Col>
        </Row>
      </Container>

      <Contact />
    </div>
  );
}

export default App;
