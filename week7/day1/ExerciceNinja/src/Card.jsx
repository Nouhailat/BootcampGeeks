import React from "react";
import { Card, Button } from "react-bootstrap";

function CardComponent({ title, text, icon }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          <i className={`fa ${icon}`} aria-hidden="true"></i> {title}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
