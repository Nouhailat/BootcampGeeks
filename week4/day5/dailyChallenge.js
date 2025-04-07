function inanaGram(str1,str2) {
str1=str1.replace(/\s/g, "").toLowerCase()
str2=str2.replace(/\s/g, "").toLowerCase()
let sortStr1=str1.split("").sort().join("")
let sortStr2=str2.split("").sort().join("")
 return sortStr1===sortStr2
}
console.log(inanaGram("Astronomer","Moon starer"));
