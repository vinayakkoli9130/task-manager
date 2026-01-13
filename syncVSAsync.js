
const fs=require("fs")

// //Async way
// fs.readFile("dummy.txt","utf-8",(err,data)=>{
//     if(err){
//         return false
//     }
//     console.log(data)//second
// })

// console.log("script ends!")//print this line first then 

//sync way 

let data=fs.readFileSync("dummy.txt","utf-8")

console.log(data)

console.log("script ends!")