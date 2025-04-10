const {readFile,writeFile}=require('./fileManager')
const helloWorld=readFile('helloWorld.txt')
console.log(helloWorld);
writeFile('bye.txt','byee se u later')
