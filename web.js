const http=require('http')
const fs=require('fs')
 http.createServer((req,resp)=>{
    fs.readFile('html/web.html','utf-8',(err,data)=>{//filePath,Charater type,callback fn
 if(err){
    resp.writeHead(500,{"Content-Type":"text/plain"})//status 500 for error,
    resp.write("Internal Server Error")
    resp.end()
    return
 }
 resp.writeHead(200,{"Content-Type":'text/html'})//status 200 for success
resp.write(data)
resp.end()
    })

 }).listen(3200)