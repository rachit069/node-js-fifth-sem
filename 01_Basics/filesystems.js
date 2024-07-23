const fs = require("fs/promises")

async function readFun()
{
    const file = await readFile("./demo.txt")
    console.log(file)
}
readFun()

