const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people.pop());
console.log(people.shift());
// console.log(people.slice());
people.splice(people.indexOf("james"),1,"jason")
console.log(people);
people.push("nouha")
console.log(people);
console.log(people.indexOf("Mary"));
const people2=people.slice(1,-1);
console.log(people2);
console.log(people.indexOf("foo"));
const last=people[people.length-1]
console.log(last);
// part2
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
    
    
}
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
    if(people[index]==="Devon"){
        break;
    }
    
    
}
colors=["red","blue","yellow","black"]
for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1} choice is ${colors[i]}`);


    }
// bonus
const Suf = ["st", "nd", "rd", "th"];
for (let i = 0; i < people.length; i++) {
    const suffix=i<3 ? Suf[i]:Suf[3]
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);

    
}
// execice 3
const readline = require("readline-sync");
let  number;
do {
    number = readline.question("Enter a number");
    
} while (Number(number)<10);
console.log("enter a number greater than 10",number);

    //EXERCICE 4
    const building = {
        numberOfFloors: 4,
        numberOfAptByFloor: {
            firstFloor: 3,
            secondFloor: 4,
            thirdFloor: 9,
            fourthFloor: 2,
        },
        nameOfTenants: ["Sarah", "Dan", "David"],
        numberOfRoomsAndRent:  {
            sarah: [3, 990],
            dan:  [4, 1000],
            david: [1, 500],
        },
    }
    console.log(building.numberOfFloors);
    console.log(building.numberOfAptByFloor.firstFloor);
    console.log(building.numberOfAptByFloor.thirdFloor);
    console.log(building.nameOfTenants[1]+building.numberOfRoomsAndRent.dan[0]);

  let TRent=building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]
  console.log(TRent);
  if (TRent>building.numberOfRoomsAndRent.dan[1]) 
    {
        building.numberOfRoomsAndRent.dan[1]=1200
    
  }
  console.log(building.numberOfRoomsAndRent);
//   EXERCICE5
const family={
    father:"salah eddine",
    mother:"hanane",
    daughter:"Nouhaila",
    son:"mohammed",
 
}
// for in using key
for (let key in family) {
    console.log(key);
    }
    for (let key in family) {
        console.log(family[key]);
        }
    // exercice6
    const details = {
        my: 'name',
        is: 'Rudolf',
        the: 'reindeer'
      }
    let phrase=""
    for (let key in details) {
        phrase +=details[key] + " ";
        }
        // console.log(phrase);
        console.log(phrase.trim());
        // EXERCICE 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
 let secretName=names.map(name=>name[0]).sort().join("")
 console.log(secretName);
 
    

  
  











