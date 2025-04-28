import React from 'react'
import { Card, Button } from 'react-bootstrap'

function CardComponent({ title, text, icon }) {
  return (
    <Card className="h-100 text-center">
      <Card.Body>
        <Card.Title>
          <i className={`fa ${icon} fa-2x mb-3`}></i>
          {title}
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
