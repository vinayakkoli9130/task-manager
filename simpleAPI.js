//Define Static API Data
const userData=[
    {name:'Vinayak Koli',age:26,email:"vinny@test.com"},
    {name:'Ganesh Koli',age:29,email:"ganny@test.com"},
    {name:'Deepak Koli',age:32,email:"deep@test.com"}
]

const http=require("http");
http.createServer((req,resp)=>{
 resp.setHeader("Content-Type","application/json")// Set the content type to JSON
 resp.write(JSON.stringify(userData)) // Convert the userData array to a JSON string
 resp.end()// End the response
}).listen(6200)