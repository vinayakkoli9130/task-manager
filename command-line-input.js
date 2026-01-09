//Sometimes, we want to pass values directly while running a file from the terminal
//  — like a username or a dynamic port number.

const arg=process.argv
console.log("-------------:",arg)//npx nodemon fileName.js vinayak koli

//Space-separated values are stored as separate elements in the array.
console.log("-------------:",arg[0])//'C:\\Program Files\\nodejs\\node.exe'
console.log("-------------:",arg[1])//'D:\\Angular\\Nodejs\\task-manager\\command-line-input.js'
console.log("-------------:",arg[2])//vinayak
console.log("-------------:",arg[3])//koli

//create server and pass dynamic port

const http=require("http")
const port=arg[2] //pass port 4100 from cmd.//npx nodemon fileName.js 4100

http.createServer((req,resp)=>{
resp.write("testing input from cmd")
resp.end()
}).listen(port)