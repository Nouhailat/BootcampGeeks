// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
// in fun1 a will be 3 
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// ITS GOnna dislplay an err cause in  const we cant reaasingt a new value in a

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// THE ALERT WILL DISPLAY 5 
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// ALSO ITS GONNA AFFICHER ERREUR CS WE CANT REASSISNEMENT  A VALUE IN A CONSTANT

// #3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
// IN FUNCFour window.a will be " hello"
// and in funFive will be "inside the funcFive function hello"
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
// the alert willl display inside the funcSix function test" 
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// in this case nothing was change the alert gonna display and also the value of a aout of fun it will stay the same

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// in alert 1 in the if block 5  &&& `outside of the if block 2
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// nothing will be change with const in this case 