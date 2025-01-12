const fs = require("fs")

const a = 100;

setImmediate(() => console.log("Set immediate"));

Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt","utf8", () => {
    console.log("File Reading CB");
});

process.nextTick(() => console.log("process.nextTick"))
setTimeout(() => console.log("Timer Expired"));

function printA() {
    console.log("a=",a);
}

printA();
console.log("Last line of the line.");