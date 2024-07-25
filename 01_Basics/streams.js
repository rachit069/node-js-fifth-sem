// // Types of Streams
// // 1. Read Stream
// // 2. Write Stream
// // 3. Duplex Stream
// // 4. Transform Stream

// const fs = require("fs")

// const writeStream = fs.createWriteStream("/workspaces/node-js-fifth-sem/01_Basics/newstream.txt")
// const data = fs.createReadStream("/workspaces/node-js-fifth-sem/01_Basics/hello.txt",{
//     encoding: "utf-8",
//     // highWaterMark: 5
// })

// // data.on("data",(chunks)=>{
// //    writeStream.write(chunks)
// // })
// // data.on("end",()=>{
// //     console.log("finished")
// // })

// // data.pipe(writeStream)
// // data.on("end",()=>{
// //     console.log("finished")
// // })

