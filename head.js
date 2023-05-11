//similar to: https://lodash.com/docs/4.17.15#head

// ES6 async way: 
//import {assertEqual} from "./assertEqual.js";

const assertEqual = require('./assertEqual');

// Given an array return a copy of the 1st element 
// it must be a copy of the value and not the original 
// (ie. does not mutate)
function head(arr){
    let value = arr.slice(0, -(arr.length - 1)).pop();
    return value;
}



module.exports = head;