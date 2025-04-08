function makeAllCaps(words) {
    return new Promise((resolve,reject)=>{
        const allstrings=words.every(word=>typeof word==="string" )
        if (allstrings) {
            const toUpperCased=words.map(word =>word.toUpperCase())
            resolve(toUpperCased)
            
        } else {
            reject("erreur")
            
        }
    })

    
}
function sortWords(words){
    return new Promise((resolve,reject) =>{
        if (words.length >4 ) {
            const sorted=words.sort()
            resolve(sorted)
            
        } else {
            reject("erreur le tableau ne contient pas plus de 4 mots")
            
        }
    })

}
makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
      makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))
      makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))
