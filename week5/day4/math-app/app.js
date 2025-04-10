import _ from'lodash'
import{add,multip,divsion}from './math.js'
const sum=add(10,5)
const product=multip(10,5)
const div=divsion(15,2)
const numbres=[10,12,2,6]
const max=_.max(numbres)
const min=_.min(numbres)
console.log(`Addition: 10 + 5 = ${sum}`);
console.log(`Multiplication: 10 * 5 = ${product}`);
console.log(`divsion: 15 + 2 = ${div}`);
console.log(`Max value: ${max}`);
console.log(`Min value: ${min}`);