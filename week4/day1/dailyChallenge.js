let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
 const display=()=>{
    groceries.fruits.forEach(fruits=>{
        console.log(fruits);
        
    })

 }
 const cloneGroceries=()=>{
    let user =client
    client="nouha"
    console.log("Client after change:", client);
    let shopping = groceries;
    shopping.totalPrice = "35$";
    console.log("Shopping total price after change:", shopping.totalPrice); 
    console.log("Groceries total price after change:", groceries.totalPrice);
shopping.other.paid=false
console.log("shopping paid status after change:", shopping.other.paid);
    console.log("groceries paid status after change:", groceries.other.paid);

 }
 display()
 cloneGroceries()