const fs = require("fs");

setImmediate(() => console.log("setImmediate"))

setTimeout(() => console.log("Timer Expired"))

Promise.resolve("promise").then(console.log)

fs.readFile("./file.txt","utf8", () => {
    setTimeout(() => console.log("2nd TImer"))

    process.nextTick(() => console.log("2nd nxtTick"))

    setImmediate(() => console.log("2nd setImmediate"))

    console.log("File reading CB");
})

process.nextTick(() => console.log("nextTick"))

console.log("Last line of the file.");

/*
Last line of the file.
nextTick
Promise
Timer Expired
setImmediate
File reading CB
2nd nxtTick
2nd TImer
2nd setImmediate
*/

