
// ES6 way of importing 
//import {assertArraysEqual} from "./assertArraysEqual.js"
//import { eqArrays } from "./eqArrays.js"

/*
console.log(middle([1])); //should return []
console.log(middle([1,2,3,4])); //should print a message
*/

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns empty array for [1]", () => {
    assert.strictEqual(middle([1]), []);
  });
  it("returns [2,3] as even amount of element", () => {
    assert.strictEqual(middle([1,2,3,4]), [2,3]);
  });
});