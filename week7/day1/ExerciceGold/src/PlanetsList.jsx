import React from "react";
function PlanetsList() {
    const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];
  
    return (
      <ul className="list-group">
        {planets.map((planet, idx) => (
          <li key={idx} className="list-group-item">
            {planet}
          </li>
        ))}
      </ul>
    );
  }
  
  export default PlanetsList;