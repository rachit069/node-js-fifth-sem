const http = require("http")
const fs = require("fs")
const server = http.createServer((request,response)=>{

    console.log(request.url)
    const {url} = request;
    if(url=="/"){
        response.writeHead(200,{"Content-type":"text/html"})
        const read = fs.createReadStream("./index.html")
        read.pipe(response)
    }
    else if(url=="/newurl"){
    response.writeHead(200,{"Content-type":"text/html"})
    const read = fs.createReadStream("./new.html")
    read.pipe(response)
    }
})

server.listen(3000,()=>{
    console.log("server is starting on 3000 port")
})