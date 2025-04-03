const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color,index)=>{
    console.log(`${index+1}. ${color}`);
})
if (colors.includes("Violet")) {
    console.log("YES VIOLET IN ARRAY ");
    
} else {
    console.log("NOO Violet is not in the array");
    
}
// EXERCICE 2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors2.forEach((c,i) => {
    let position=i+1
    let suffix=(position===1)?"st":(position===2)?"nd":(position===3)?"rd":"th";
    console.log(`${position}. ${c} ${suffix}`);
  
    
});
// exercice3
// at first console.lo of result its gonna be 
//  a array have bread with contenet of fruits cs we use ... it mean spread of array and same for vegetable and chiken element
// 2**  igeuuss spread doesnt match with string element just with tables but if he can word he gonna make the string gonna siparaete to alphapet in array
// in bonnus array are vide soo its gonna give null or err
// exercice4
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);

console.log(welcomeStudents);
const fullStack_Res=users.filter(user=>user.role=="Full Stack Resident")
console.log(fullStack_Res);
// exercice 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((acc, currentValue) => {
  return acc + ' ' + currentValue;
});

console.log(sentence);  
// exercice6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];
const STUDENT_PASSED_c=students.filter((student=> student.isPassed ))
console.log(STUDENT_PASSED_c);