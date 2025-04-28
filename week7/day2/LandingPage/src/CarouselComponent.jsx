import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function CarouselComponent() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="https://source.unsplash.com/800x600/?hongkong" alt="Hong Kong" />
        <p className="legend">Hong Kong</p>
      </div>
      <div>
        <img src="https://source.unsplash.com/800x600/?macau" alt="Macao" />
        <p className="legend">Macao</p>
      </div>
      <div>
        <img src="https://source.unsplash.com/800x600/?japan" alt="Japan" />
        <p className="legend">Japan</p>
      </div>
      <div>
        <img src="https://source.unsplash.com/800x600/?lasvegas" alt="Las Vegas" />
        <p className="legend">Las Vegas</p>
      </div>
    </Carousel>
  )
}

export default CarouselComponent
