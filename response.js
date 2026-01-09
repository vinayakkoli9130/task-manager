//create server

let http=require("http")//import http module.

let age=26
let city="Pune"
const server=http.createServer((req,resp)=>{ //create server using http
 

//resp.setHeader("Content-Type", "text/html"): Tells the browser that we’re sending back HTML.
resp.setHeader('Content-Type','text/html')//Tell browser the response is HTML

//Template literals (` `): Used to inject JavaScript variables like age and Date() into the HTML.
resp.write(`
    <html>
    <head>
    <title>Code With Vinny</title>
    </head>
    <body>
    <h3>Hello Vinayak Koli</h3>
    <i>Lerning Node.js</i>
    <h4>${new Date()}</h4>
    <h4>`+age+`</h4> 
    <h5>City:${city}</h5>
    </body>
    </html>
    `)//write some data stream

resp.end()//current requset finish
process.exit()//exit process
})
server.listen(4800)