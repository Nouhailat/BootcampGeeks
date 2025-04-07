function compareToTen(num) {
    return new Promise(function(resolve,reject){
        if (num <=10) {
            resolve(num+"is less than 10")
            
        } else {
            reject(num+"is great than 10")
            
        }
    })
    
}
// compareToTen(7).then(result => console.log(result))
// .catch(error => console.log(error));
async function checkNumber(num) {
    try {
      const result = await compareToTen(num);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  checkNumber(16)
//   exer2
const promise=new Promise((resolve) => {
    setTimeout(function () {
        resolve("succes")
        
    },4000)
    
})
promise.then(res=>console.log(res)
)
// ex3
const promiseRes=Promise.resolve(3)
promiseRes
.then(resultat=>console.log("resolu with",resultat)
)
.catch(error=>console.log("erreur:",error)

)

const promise2=Promise.reject("bouh!")
promise2
.then(resulta=>console.log("resolu with:",resulta))
.catch(error=>console.log("erreur",error)


)