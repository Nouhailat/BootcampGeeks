let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] % 3 === 0); }
    // exercice 2
    let guestList = {
        randy: "Germany",
        karla: "France",
        wendy: "Japan",
        norman: "England",
        sam: "Argentina"
      }
      const readline = require("readline-sync");
    let studentname=readline.question("write your name please:")
    if (studentname in guestList) {
        console.log(`Heey! i'm ${studentname}, and i'm from ${guestList[studentname]}.`);
        } else {
            console.log("im a guest");
            }
        
// exercice 3
let Age = [20, 5, 12, 43, 98, 55];

let sum = 0;
for (let i = 0; i < Age.length; i++) {
    sum += Age[i];
}
console.log("Sum of all ages:", sum);
let highestAge=Age[0]
for (let i = 0; i < Age.length; i++) {
    if (Age[i] > highestAge) {
        highestAge = Age[i];
        }
        }
console.log("highest age is:", highestAge);


