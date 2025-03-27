// exercice 1
let person1 = {
    name: "John",
    mass: 70, 
    height: 1.75, 
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};
console.log(person1.calculateBMI());
let bmi1=person1.calculateBMI()
let bmi2=person2.calculateBMI()

// PERSONNE 2
let person2 = {
    name: "Alice",
    mass: 60,
    height: 1.65,
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
        }
        };
    console.log(person2.calculateBMI());
    if (bmi1>bmi2) {
        console.log(person1.name + " a un BMI plus élevé que " + person2)
            } else if (bmi2>bmi1) {
                console.log(person2.name + " a un BMI plus élevé que " + person1)
                    
                
            }
            else{
                console.log("les deux ont le meme bmi")
            }
    //exercice 2 
    function findAvg(gradesList) {
        let total = 0;
        for (let i = 0; i < gradesList.length; i++) {
            total += gradesList[i];
        }
        let average = total / gradesList.length;
    
        if (average >= 65) {
            console.log("You GET PASSED! Your average is: " + average);
        } else {
            console.log("You failed. Your average is: " + average);
        }
    }
    
    
    let grades = [80, 70, 85, 90, 60]; 
    findAvg(grades);
        
   
    