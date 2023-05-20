const eqArrays = require("./eqArrays");

//Takes 2 arrays and outputs a message 
// to the console
function assertArraysEqual(actual, expected){
    if( eqArrays(actual,expected) ) {
        console.log(`Assertion Passed ✅ : ${actual} === ${expected}`);
    } else {
        console.log(`Assertion Failed 🛑 : ${actual} !== ${expected}`);
    }
}

module.exports = assertArraysEqual;
