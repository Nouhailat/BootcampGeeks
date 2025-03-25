const planets = [
    { name: "Mercury", color: "gray", moons: [] },
    { name: "Venus", color: "yellow", moons: [] },
    { name: "Earth", color: "blue", moons: ["Moon"] },
    { name: "Mars", color: "red", moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", color: "orange", moons: ["Io", "Europa", "Ganymede", "Callisto"] },
    { name: "Saturn", color: "gold", moons: ["Titan", "Rhea", "Iapetus"] },
    { name: "Uranus", color: "lightblue", moons: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"] },
    { name: "Neptune", color: "darkblue", moons: ["Triton"] }
];
const section =document.querySelector(".listPlanets")
planets.forEach(planet=>{
    let planetDIV=document.createElement("div")
    planetDIV.classList.add("planet")
    planetDIV.style.backgroundColor=planet.color
    section.appendChild(planetDIV)
     planet.moons.forEach((moon, index) => {
        let moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");
        moonDiv.style.left = `${index * 40}px`;
        moonDiv.textContent=moon
        planetDIV.appendChild(moonDiv);
    });

})