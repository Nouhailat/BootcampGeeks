import { useState } from 'react'
import Garage from './Garage'

const Car = () => {
  const carInfo = { name: "Ford", model: "Mustang" }
  const [color, setColor] = useState("red")

  return (
    <div>
      <h2>This car is {color} {carInfo.model}</h2>
      <Garage size="small" />
    </div>
  )
}

export default Car