//TEST out array equality
// ES6 async way: 
//import {assertEqual} from "./assertEqual.js";

// Classic way: note not needed if we have Mocha/chai
const assertEqual = require('./assertEqual');


eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should FAIL 

/*
const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("eqArrays([1, 2, 3, 4], [1, 2, 3]) should be false", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
  });
  it("eqArrays(['1', 2, 3], [1, 2, 3]) should be false", () => {
    assert.strictEqual(eqArrays(["1", 2, 3], [1, 2, 3]), false);
  });
  it("eqArrays(eqArrays([1, 2, 3], [1, 2, 3]) should be true", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

*/
