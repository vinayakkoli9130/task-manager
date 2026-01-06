
//require():Used to import modules, JSON, and local files.
let fs =require('fs')//fs:file system is internal module default we don't need to install
fs.writeFileSync("vinayakKoli.txt","My Name Is Vinayak Koli")//filename or file descriptor
console.log(20+20)

console.log("Hello Node.js Learner")

function fruit(item){
console.log("fruit name is "+item)
}
fruit("mango")
fruit("apple")

let a=10
let b=20
console.log("Addition -: ",a+b)