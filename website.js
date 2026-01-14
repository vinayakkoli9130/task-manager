const http=require('http')
const fs=require('fs')

http.createServer((req,resp)=>{

//-----------------------------------
//block code
//Synchronous (Sync)
//fs.readFileSync() blocks further execution until the file is fully read.
//Use it for small files like header.html where immediate availability is needed.
let collectHeaderData= fs.readFileSync("html/header.html","utf-8")//comment all code in one line

//top code is one line code
//Asynchronous (Async)
//fs.readFile() does not block the code. It continues and runs the callback when data is ready.
//Better for performance, especially for larger or external files.
let collectHeadersData;
 fs.readFile("html/header.html","utf-8",(err,headerData)=>{
if(err){

resp.writeHead(500,{"content-type":"text/plain"})
resp.write("Internal Server Error")
return false
}

 collectHeaderData=headerData
// resp.writeHead(200,{"content-type":"text/html"})
// resp.write(data)
// resp.end()
    })

//-----------------------------------

//set file path dynmically
let file="/home"
if(req.url!="/"){
file=req.url
}

if(req.url!="/style.css"){

 fs.readFile("html/"+file+".html","utf-8",(err,data)=>{
if(err){

resp.writeHead(500,{"content-type":"text/plain"})
resp.write("Internal Server Error")
return false
}

// resp.writeHead(200,{"content-type":"text/html"})
resp.write(collectHeaderData+""+data)
resp.end()
    })

}
  else if(req.url=="/style.css"){
fs.readFile("html/style.css","utf-8",(err,data)=>{
if(err){

resp.writeHead(500,{"content-type":"text/plain"})
resp.write("CSS Not Found")
return false
}

resp.writeHead(200,{"content-type":"text/css"})
resp.write(data)
resp.end()
    })

  } 

}).listen(6200)