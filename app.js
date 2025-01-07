// Importing the function calculateSum from xyx.js and also destructuring the object to get the value of x and calculateSum function.

// const { x, calculateSum } = require('./calculate/sum.js');
// const {calculateMultiply} = require('./calculate/multiply.js');

const {calculateSum, calculateMultiply} = require('./calculate/index.js');
const data = require('./data.json');
console.log(data);

calculateSum(2,3);

calculateMultiply(4,0)

