// //module types
// //core Modules:modules that are already available/include in node.js
// //that module dont need to install and import using require() ex:file system,operating system
// //core modules 1.file system
// const fs=require('fs')
// fs.writeFileSync("dummy.txt","trying with modules")

// //2.operating system

// const os=require('os')//import operating system

// console.log(os.platform())//platform of os

// console.log(os.hostname()) //host name of os

// console.log(os.cpus()) 

//global object dont need to import

console.log("abc")

console.log(process.cwd())//path

console.log(process.pid)//process id

//import globle object forcefully 

let {log,warn,info}=require('console')

log("custom log")

warn("custom warn")

info("custom info")