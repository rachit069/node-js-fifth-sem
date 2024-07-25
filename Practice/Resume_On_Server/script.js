const http = require("http")
const fs = require("fs")
const server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html"})
    const read = fs.createReadStream("/workspaces/node-js-fifth-sem/Practice/Resume_On_Server/index.html")
    read.pipe(response)
})

server.listen(3000,()=>{
    console.log("server is starting on 3000 port")
})