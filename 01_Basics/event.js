// ---- Even Emitter ---- //
const EventEmitter = require("events")

const emitter = new EventEmitter();

emitter.on("add",(a,b)=>{
    console.log("It is a add callback",a,b)
})

emitter.emit("add",2,3)

