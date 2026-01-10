const http=require('http');


http.createServer((req,resp)=>{
    console.log(req.url)
    resp.writeHead(200,{"Content-Type":"text/html"})
    if(req.url=="/"){
    resp.write(`
        <form action="/submit" method="post">
        <input type="text" placeholder="enter name" name="name"/>
        <input type="email" placeholder="enter email" name="email"/>
        <button>Submit</button>
        </form>
        `)
    }

    else if(req.url=="/submit"){
        resp.write("<h1>Data Is Submitted!</h1>")
    }
    
resp.end()
}).listen(3200)