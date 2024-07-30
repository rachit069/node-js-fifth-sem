const express = require("express")
const app = express()
const path = require("path")
app.use("/Public/",express.static("Public"))
// app.use("/Public",express)
// app.use(express.urlencoded((extended:true)))

app.get("/Public/",(req,res)=>{
    const obj = {
        name:"Zack Martin",
        age: 24
    }
    // res.json(obj)
    res.sendFile(path.join(__dirname,"/Public/index.html"))
})
app.get("/register",(req,res)=>{
    // const obj = {
    //     name:"Zack Martin",
    //     age: 24
    // }
    // res.json(obj)
    res.sendFile(path.join(__dirname,"/Public/form.html"))
})

app.post("/user-registered",(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(6000,()=>{
    console.log("Running on 6000 port")
})
