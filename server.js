//create server using defult package http

const http=require('http')//

// http.createServer((req,resp)=>{ //take two parameter
//     resp.write("This is Vinayak Koli")
// resp.end("Hello")
// }).listen(4800)

http.createServer((req,resp)=>{ //take two parameter
    resp.write("<h1>This is Vinayak Koli</h>");//here we can also write html,create page on server
resp.end(" Hello ")// end responce.if we can not end responce using resp.end() requiset is pendenig
}).listen(4800)//port

//Run Another server in nodejs
http.createServer((req,resp)=>{ 
    resp.write("<h1>Another Server</h1>")
resp.end(" Hello ")
}).listen(5800)