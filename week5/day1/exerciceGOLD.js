const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
Promise.all([promise1,promise2,promise3])
.then(resultat=>{
    console.log("les promise et resolu",resultat);
    
})
.catch(error=>{
    console.log("erreur",error);
    
})
// exercice2
// we have a fun that take each element of array and multip it on *2
// soo the output will be  Array with those values 
// [2 AND 4 AND 6 ]