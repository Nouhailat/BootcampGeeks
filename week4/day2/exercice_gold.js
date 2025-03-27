// exercice1
// in this instruction we put map to the numbres in array and in each nbr should multipe to 2 
// 1*2 =2 AND 4 AND 6
// EXERCICE 2 
// IN OUTPUT RESULT IS 0 1 2 1 2 3
// EXERCICE3
// in instruction we use i or (index )to get the first position in array or somthing like that and uselly the index is start by default by 0
// so i in first operation hav 0 AND IN THE NEXT WZ HAVE i+1
//  EXERCICE 4
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
const modifiedArray = array.flat(2);
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const modifiedGreeting = greeting.map(words => words.join(" ")); 
console.log(modifiedArray);
console.log(greeting);
console.log(modifiedGreeting);


