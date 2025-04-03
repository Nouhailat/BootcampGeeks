function mergeword(string) {
    return function (nextString) {
        if (nextString===undefined) {
            return string
            
        } else {
            return mergeword (string+' '+nextString)
            
        }
        
    }
    
}
console.log(mergeword('nouha')('have')('a')("objectif")());
