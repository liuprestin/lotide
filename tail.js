//similar to: https://lodash.com/docs/4.17.15#head

//ES6 way
//import {assertEqual} from "./assertEqual.js";

// Classic way: note not needed if we have Mocha/chai
// const assertEqual = require('./assertEqual');

// Given an array return a copy of the 1st element
// it must be a copy of the value and not the original
// (ie. does not mutate)
function tail(arr) {
  let value = arr.slice(1);
  return value;
}

module.exports = tail;
