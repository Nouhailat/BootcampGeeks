// exercice1
// the otput it gonna diplay im (with herr name)john doe and his city vancouver with country canada and latitude  & longitude numbers of coordinates 
// exercice2
function displayStudentInfo({first,last}){
   return `Your full name is ${first}  ${last}`
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
// exercice3
const users = { user1: 18273, user2: 92833, user3: 90315 };
const userArray=Object.entries(users)
console.log(userArray);

const turnUserArray=userArray.map(([user,id])=>
    [user,id*2]
)

console.log(turnUserArray);
// ex4
// THE OUTPUT OF CODE IS "objet"cs we use typeof fr membre its insatnce of class persone that he have name as attribut 

// exercice5
// THE CONSTROCTOR will successfully extend the Dog class IS 2
// 2
// class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
//   EXERCICE6
// both are false cs its look like its the same but in adreess memoire are not 
//  in console 1 object2.number will display 4
//console.log(object3.number)=4 also 
// at last it will display 5
// CREATION CLASSS
class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  class Mammal extends Animal{
    constructor(name,type,color){
        super(name,type,color)
    }
    sound(sound){
        return`${sound} im a ${this.type} names${this.name} and my color is ${this.color}`
    }
  }
  const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
  console.log(farmerCow.sound('Moooo'));
