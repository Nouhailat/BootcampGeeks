// EX1
const numbres=[1,2,3,5]
const Sum=numbres.reduce((acc,curr)=>acc+curr,0)
console.log(Sum);
// EX2
const num=[1,1,2,3,5,5,5]
const uniqueNum=[...new Set(num)]
console.log(uniqueNum);
// ex3
const array=[0,'',-2,undefined,5,NaN,false]
const CleanARRAY=array.filter(item=>item|| item===0)
console.log(CleanARRAY);
// ex4
function repeat(str,n=1) {
    return str.repeat(n)
    
}
console.log(repeat("ha",3));
// EXERCICE5
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
console.log(turtle.padStart(9));
console.log(rabbit.padStart(9));
turtle=turtle.trim().padEnd(9,'=')
console.log(turtle);
// the turtle move and whteSace removed ensuring that has lenght of 9 replace withspace with =

