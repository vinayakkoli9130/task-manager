//ECMAScript Module (Modern Javascrip)
//file type : .js or .mjs with type:"module" is optional
// // import { userName } from './data';
// console.log(userName) //work in javascript

//------------- two object in same module-----------------------------------
//Commonjs:file type : .js or .cjs,type:"commonjs" is optional
 let info=require('./data')

// info.add(67,6)//without returnig function

console.log(info.add(5,6))//with returnning
console.log(info.add(5,5))

 console.log(info.empInfo.empId)
  console.log(info.empInfo.empName)
   console.log(info.empInfo.empSalary)
 console.log(info.empAdd.currCity)
 console.log(info.empAdd.empDist)
 console.log(info.empAdd.empTaluka)
 console.log(info.empAdd.villaige)

 //Destructuring

  const {empInfo,empAdd,add}=require("./data")
 console.log(empInfo.empId)
 console.log(empInfo.empName)
 console.log(empInfo.empSalary)
 console.log("--------------------------------------")
 console.log(empAdd.currCity)
 console.log(empAdd.empDist)
 console.log(empAdd.empTaluka)
 console.log(empAdd.villaige)
console.log("--------------------------------------------")
//function 
console.log(add(47,55))
console.log("--------------------------------------------")
const {empInfo:{empId,empName,empSalary},empAdd:{currCity,empDist,empTaluka,villaige}}=require("./data")
console.log(empId)
console.log(empName)
console.log(empSalary)
console.log(currCity)
console.log(empDist)
console.log(empTaluka)
console.log(villaige)
////-----------------------------------------------------------
// let data=require('./data')
// console.log(data)//print object of data
// console.log(data.userName)
// console.log(data.cityName)
// console.log(data.age)

// //object destructuring
// let {userName,cityName,age}=require('./data')
// console.log(userName)
// console.log(age)
// console.log(cityName)
// //----------------------------------

// //require():Used to import modules, JSON, and local files.
let fs =require('fs');//fs:file system is internal module default we don't need to install
// const { userName } = require('./data');
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