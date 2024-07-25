const http = require("http")

const server = http.createServer((request,response)=>{
    response.writeHead(200,{"Content-type":"text/plain"})
    const person = {
        name: "rachit",
        age: 10,
        pnumber: 70181,
        city: "rajpura"
    }
    // console.log(JSON.stringify(person))
    response.end(JSON.stringify(person))
})

server.listen(3000,()=>{
    console.log("server is starting on 3000 port")
})

