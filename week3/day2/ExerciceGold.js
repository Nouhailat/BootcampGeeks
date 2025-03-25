// ex1
function isBlank(str) {
    return str.trim() === '';
    
}
// console.log(isBlank(''));
console.log(isBlank('nouha'));
// ex2
function abbrevName(str) {
    let word=str.split(' ')
    return word[0]+' '+word[1].charAt(0)+'.';


    
}
console.log(abbrevName('Nouhaila TOUATI'));
// ex3
function swapCase(str) {
    return str.split('').map(char => 
        char === char.toUpperCase() 
        ? char.toLowerCase() 
        : char.toUpperCase()
    ).join('');
}

console.log(swapCase('i study at geeks')); 

