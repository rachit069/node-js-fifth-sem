// const express = require("express")
// const fs = require("fs/promises")
// const app = express()
// const path = require("path")
// app.use("/Public/",express.static("Public"))
// // app.use("/Public",express)
// app.use(express.urlencoded({extended:true}))

// app.get("/Public/",(req,res)=>{
//     // const obj = {
//     //     name:"Zack Martin",
//     //     age: 24
//     // }
//     // res.json(obj)
//     res.sendFile(path.join(__dirname,"/Public/index.html"))
// })
// // app.get("/register",(req,res)=>{
// //     // const obj = {
// //     //     name:"Zack Martin",
// //     //     age: 24
// //     // }
// //     // res.json(obj)
// //     res.sendFile(path.join(__dirname,"/Public/form.html"))
// // })

// // // app.post("/user-registered",(req,res)=>{
// // //     console.log(req.body)
// // //     res.send(req.body)
// // // })

// // app.post("/user-registered",async(req,res)=>{
// //     console.log(req.body)
// //     try{
// //         console.log(req.body)
// //         let readData = await fs.readFile("db.json","utf-8")
// //         readData = JSON.parse(readData)
// //         readData = [...readData,newData]
// //         await fs.writeFile("db.json",JSON.stringify(readData))
// //         res.send(readData)
// //     }
// //     catch(err){
// //         console.log(err)
// //     }
// // })

// app.listen(6000,()=>{
//     console.log("Running on 6000 port")
// })


// // connected to github


const express = require("express");
const path = require("path")
const fs = require("fs/promises");
const app = express();

app.use("/Public/",express.static("Public"))
app.use(express.urlencoded({extended:true}))

app.get("/Public", (req,res) => {
  res.sendFile(path.join(__dirname,'/Public/form.html'));

})

// app.post("/user-registered", async (req, res) => {
//   try {
//     const log = `${Date.now()} from ${req.method} ${req.url} with data: ${JSON.stringify(req.body)}\n`;
//     await fs.writeFile("Logger.txt", log, { flag: "a" });
//     // Log form data for debugging
//     console.log(req.body); // req.body will contain parsed form data
//     let readData = await fs.readFile("./db.json", "utf8");
//     readData = JSON.parse(readData);
//     readData.push(req.body);
//     await fs.writeFile("./db.json", JSON.stringify(readData, null, 2), "utf8");
//     // res.json(readData);
//     res.send("Data Recieved")

//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.post("/user-registered",async(req,res)=>{
    console.log(req.body)
    try{
        const newData = req.body
        let readData = await fs.readFile("/Users/rachit/Documents/SEM 5/node-js-fifth-sem/03_express/Public/db.json","utf-8")
        readData = JSON.parse(readData)
        readData = [...readData,newData]
        console.log(readData)
        await fs.writeFile("/Users/rachit/Documents/SEM 5/node-js-fifth-sem/03_express/Public/db.json",JSON.stringify(readData))
        res.json(readData)
        res.send(readData)
    }
    catch(err){
        console.log(err)
    }
})

app.get("/user-registered",async(req,res)=>{
  try{
      let readData = await fs.readFile("/Users/rachit/Documents/SEM 5/node-js-fifth-sem/03_express/Public/db.json","utf-8")
      readData = JSON.parse(readData)
      const a = readData.filter(item=> item.name[0] == 'a')
      console.log(a)
      res.send(a);
  }
  catch(err){
      console.log(err)
  }
})



app.listen(8000,() =>{
  console.log("Running on 8000 port")
})