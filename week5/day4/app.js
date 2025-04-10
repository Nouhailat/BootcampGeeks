import person from "./data.js";
function calculateAverage(gens) {
    const ageTotal=gens.reduce((sum,person)=>sum+person.age,0)
    const average=ageTotal/gens.length
    console.log(`la moyenne d age ${average.toFixed(2) } ans` );
    

    
}
calculateAverage(person)