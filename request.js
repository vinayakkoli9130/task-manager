const http = require('http');

http.createServer((req, resp) => {
    console.log(req) 
    console.log(req.url)//Log the requested URL:/test,/login
    console.log(req.headers)// Log the request headers
    console.log(req.headers.host)// Log the host:localhost:5800
    console.log(req.method)//Log the HTTP method (GET, POST, etc.)

    //diplay pages on request
    if (req.url == "/") {
        resp.write("<h1>Home Page</h1>");
    }
    else if (req.url == "/login") {
        resp.write("<h1>Login Page</h1>");
    }
    else {
        resp.write("<h1>Other Page</h1>");
    }

    resp.end();
}).listen(5800);