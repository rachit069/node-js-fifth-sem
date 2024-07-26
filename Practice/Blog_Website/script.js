const http = require("http")
const fs = require("fs")
const server = http.createServer((request,response)=>{

    console.log(request.url)
    const {url} = request;
    if(url=="/"){
        response.writeHead(200,{"Content-type":"text/html"})
        const read = fs.createReadStream("/workspaces/node-js-fifth-sem/Practice/Blog_Website/landing.html")
        read.pipe(response)
    }
    else if(url=="/login"){
    response.writeHead(200,{"Content-type":"text/html"})
    const read = fs.createReadStream("/workspaces/node-js-fifth-sem/Practice/Blog_Website/login.html")
    read.pipe(response)
    }
    else if(url=="/style.css"){
        response.writeHead(200,{"Content-type":"text/css"})
        const read = fs.createReadStream("/workspaces/node-js-fifth-sem/Practice/Blog_Website/style.css")
        read.pipe(response)
        }
    else if(url=="/register"){
        response.writeHead(200,{"Content-type":"text/html"})
        const read = fs.createReadStream("/workspaces/node-js-fifth-sem/Practice/Blog_Website/form.html")
        read.pipe(response)
    }
    else{
        response.writeHead(200,{"Content-type":"text/html"})
    const read = fs.createReadStream("/workspaces/node-js-fifth-sem/Practice/Blog_Website/error.html")
    read.pipe(response)
    }
})

server.listen(3000,()=>{
    console.log("server is starting on 3000 port")
})