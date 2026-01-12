const http=require('http')//imort http module
const fs=require('fs');//file system for read file
const queryString=require('querystring'); //convert data into readable form
const { resolveObjectURL } = require('buffer');

http.createServer((req,resp)=>{
fs.readFile("html/form.html","utf-8",(err,data)=>{
if(err){
   resp.writeHead(500,{"content-type":"text/html"})
    resp.end("Internal Server Error")
    return
}
 resp.writeHead(200,{"content-type":"text/html"})
if(req.url=="/"){
resp.write(data)
}
else if(req.url=="/submit"){

let dataBody=[]
//get data
req.on('data',(chunk)=>{
dataBody.push(chunk)
})

 //finalise data

 req.on('end',()=>{
    let rawData=Buffer.concat(dataBody).toString()//contact and merge in to string
 let readableData=queryString.parse(rawData)


 let dataString=`My name is ${readableData.name} and my email id is ${readableData.email}`
 
 //create file in sync
//  fs.writeFileSync('text/'+readableData.name+".txt",dataString)//block process to create file then go to next step
//  console.log("file created")

//crete file into async

fs.writeFile("text/"+readableData.name+".txt",dataString,'utf-8',(err)=>{//create file async without block process
if(err){
    resp.end("Internal Server Error")
    return false;
}else{
    console.log("File Is Created")
}
})

})

    resp.write("<h1>Data Is Submited</h1>")  
}

resp.end()
})

}).listen(3200)

console.log("--------------------------------------------------------------------")
// http.createServer((req,resp)=>{//create server
//     resp.writeHead(200,{"content-type":"text/html"})
// if(req.url=="/"){
// resp.write(`
//        <form action="/submit" method="post">
//         <input type="text" placeholder="enter name" name="name"/>
//         <input type="email" placeholder="enter email" name="email"/>
//         <button>Submit</button>
//         </form>
//         `)

// }
// else if(req.url=="/submit"){
//     resp.write("<h1>Data Is Submited</h1>")
   
// }
//   resp.end("Response End!")   
// }).listen(1300)//port address

// const http = require('http'); // import http module
// const fs = require('fs');    // file system
// const queryString = require('querystring'); // parse form data

// http.createServer((req, resp) => {

//     fs.readFile("html/form.html", "utf-8", (err, data) => {

//         if (err) {
//             resp.writeHead(500, { "Content-Type": "text/html" });
//             resp.end("Internal Server Error");
//             return;
//         }

//         if (req.url == "/") {
//             resp.writeHead(200, { "Content-Type": "text/html" });
//             resp.end(data);
//         }

//         else if (req.url == "/submit") {

//             let dataBody = [];

//             req.on('data', (chunk) => {
//                 dataBody.push(chunk);
//             });

//             req.on('end', () => {
//                 let rawData = Buffer.concat(dataBody).toString();
//                 let readableData = queryString.parse(rawData);
//                 console.log(readableData);

//                 // ✅ SHOW DATA IN BROWSER
//                 resp.writeHead(200, { "Content-Type": "text/html" });
//                 resp.end(`
//                     <h1>Data Is Submitted</h1>
//                     <p>Name: ${readableData.name}</p>
//                     <p>Email: ${readableData.email}</p>
//                     <a href="/">Go Back</a>
//                 `);
//             });
//         }

//     });

// }).listen(4500);
