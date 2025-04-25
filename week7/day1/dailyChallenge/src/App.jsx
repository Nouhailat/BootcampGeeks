import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
function App() {
  return (
    <div className="App">
      <h1>Travel Destinations</h1>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src="https://hksevens.com/assets/uploads/uploads/images/Content-Block-3.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://media.traveler.es/photos/61fc0b0b5cae14b9c14d3dd9/16:9/w_2560%2Cc_limit/2A5AXX7.jpg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YqLmI-RQSaEQYLCiruboB0vNa_aDF9V5nTpYTnOGqw&s&ec=72940543" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://www.visittheusa.fr/sites/default/files/styles/16_9_1280x720/public/2023-06/7b05e031-2d80-4d0a-bbd5-9c28a7ef8d8e.jpeg?h=2ce89a5c&itok=8XWWefxQ" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;