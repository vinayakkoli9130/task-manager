const http=require('http');

const queryString=require('querystring')
//access separate file html
const fs=require("fs")

http.createServer((req,resp)=>{

    fs.readFile("html/form.html","utf-8",(err,data)=>{

        if(err){
             resp.writeHead(500,{"Content-Type":"text/plain"})
            resp.end("Internal Server Error")
             return;
        }

        resp.writeHead(200,{"Content-Type":"text/html"})
    if(req.url=="/"){
    resp.write(data)
    }

    else if(req.url=="/submit"){
        let dataBody=[]
        req.on('data',(chunk)=>{
        dataBody.push(chunk)
        })
        resp.write("<h1>Data Is Submitted!</h1>")

        req.on('end',()=>{
            let rawData=Buffer.concat(dataBody).toString()

            let readableData=queryString.parse(rawData)
            console.log(readableData)
        })
    }
 resp.end()
    })

   
}).listen(3200)

//access own file html
// http.createServer((req,resp)=>{
//     console.log(req.url)
//     resp.writeHead(200,{"Content-Type":"text/html"})
//     if(req.url=="/"){
//     resp.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name="name"/>
//         <input type="email" placeholder="enter email" name="email"/>
//         <button>Submit</button>
//         </form>
//         `)
//     }

//     else if(req.url=="/submit"){
//         resp.write("<h1>Data Is Submitted!</h1>")
//     }
    
// resp.end()
// }).listen(3200)

