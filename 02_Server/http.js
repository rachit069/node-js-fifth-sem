const http = require("http")
const fs = require("fs")
const server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-type":"text/html"})
    // const person = {
    //     name: "rachit",
    //     age: 10,
    //     pnumber: 70181,
    //     city: "rajpura"
    // }
    // // console.log(JSON.stringify(person))
    // response.end(JSON.stringify(person))
    
    // response.end(JSON.stringify(person))

    const read = fs.createReadStream("/workspaces/node-js-fifth-sem/02_Server/index.html")
    read.pipe(response)
})

server.listen(3000,()=>{
    console.log("server is starting on 3000 port")
})