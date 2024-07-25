const fs = require("fs/promises")

// async function readFun()
// {
//     const file = await fs.readFile("/workspaces/node-js-fifth-sem/01_Basics/demo.txt")
//     console.log(file)
// }
// readFun()

// async function writeFun()
// {
//     const file = await fs.writeFile("/workspaces/node-js-fifth-sem/01_Basics/doc.txt","Hello guys, i am coding in node js")
//     console.log(file)
// }
// writeFun()

// async function copyFun()
// {
//     const file = await fs.copyFile("/workspaces/node-js-fifth-sem/01_Basics/doc.txt","/workspaces/node-js-fifth-sem/01_Basics/demo.txt")
//     console.log(file)
// }
// copyFun()

// async function deleteFun()
// {
//     const file = await fs.unlink("/workspaces/node-js-fifth-sem/01_Basics/doc.txt")
//     console.log(file)
// }
// deleteFun()

// async function addFun()
// {
//     const file = await fs.appendFile("/workspaces/node-js-fifth-sem/01_Basics/demo.txt","\tI am appending this file, ok!")
//     console.log(file)
// }
// addFun()



// async function rename(){
//     try{
//         await fs.rename("/workspaces/node-js-fifth-sem/01_Basics/basic.txt","hello.txt")
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// rename()

// async function watch(){
//     try{
//     const result = fs.watch("/workspaces/node-js-fifth-sem/01_Basics/hello.txt")
//     for await (let event of result){
//         console.log(event)
//     }
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// watch()

// ---- Directories ---- //

// async function makeDir(){
//     try{ 
//         await fs.mkdir("newDir")
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// makeDir()

// async function remDir(){
//     try{
//         await fs.rmdir("/workspaces/node-js-fifth-sem/newDir")
//     }
//     catch(err){
//         console.log(err)
//     }
// }

async function readDir(){
    try{
        const data = await fs.readdir("/workspaces/node-js-fifth-sem/newDir")
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
readDir()

