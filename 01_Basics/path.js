// ----- Path ----- //
const path = require("path")

// console.log(__filename)
// console.log(__dirname)
// // console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// console.log(__filename)


// Relative path - beech me se path 
// Absolute path - shuru se le kr path..root directory se path


// console.log(path.parse(__filename)) 
// It returns this :
// {
//     root: '/',
//     dir: '/workspaces/node-js-fifth-sem/01_Basics',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
// }

// console.log(path.format(path.parse(__filename)))
// It returns this:
// /workspaces/node-js-fifth-sem/01_Basics/path.js

// console.log(path.join("/a","/b","/c","/d"))
// It returns this :
// a/b/c/d

// console.log(path.join(__dirname,"data.json"))
// it returns this :
// /workspaces/node-js-fifth-sem/01_Basics/data.json

// console.log(path.resolve("a","b","c"))
// this returns :
// /workspaces/node-js-fifth-sem/a/b/c

// console.log(path.resolve("/a","b","../c"))
console.log(path.dirname(path.join(__dirname,"data.json")))