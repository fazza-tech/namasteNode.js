// Importing the function calculateSum from xyx.js and also destructuring the object to get the value of x and calculateSum function.

// const { x, calculateSum } = require('./calculate/sum.js');
// const {calculateMultiply} = require('./calculate/multiply.js');

const fs = require('fs');
const https = require('https');
const crypto = require('crypto');

crypto.pbkdf2Sync("password", "salt",5000000,60,"sha256");
console.log("Password is encrypoted");

crypto.pbkdf2("blablabla","salt",50000,50,"sha256",(err,key)=>{
    console.log("key is generated",key);
})

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("Your data is:: "+data);
})

https.get("https://dummyjson.com/api/products/1",(res)=>{
    console.log("Fetched data successfully");
})

setTimeout(()=>{
    console.log("After 5 seconds it will print");
},5000)

const {calculateSum, calculateMultiply} = require('./calculate/index.js');
const data = require('./data.json');
console.log(data);

calculateSum(2,3);

calculateMultiply(4,0)


