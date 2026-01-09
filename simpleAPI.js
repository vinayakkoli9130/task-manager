const userData=[
    {name:'Vinayak Koli',age:26,email:"vinny@test.com"},
    {name:'Ganesh Koli',age:29,email:"ganny@test.com"},
    {name:'Deepak Koli',age:32,email:"deep@test.com"}
]

const http=require("http");
http.createServer((req,resp)=>{
 resp.setHeader("Content-Type","application/json")
 resp.write(JSON.stringify(userData))
 resp.end()
}).listen(6200)