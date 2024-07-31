const express = require("express")
const app = express()

const mockusers = [
    {name:"ace", email:"ace@gmail.com", username:"ace_01"},
    {name:"bob", email:"bob@gmail.com", username:"bob_01"},
    {name:"michael", email:"michael@gmail.com", username:"michael_01"}
]

// app.get("/api/user",(req,res)=>{
//     res.status(200).send(mockusers)
// })

app.get("/api/user/:id/:key",(req,res)=>{
    console.log(req.params)
    res.status(200).send(mockusers)
})

app.listen(5100,()=>{
    console.log("port serving on 5100")
})


