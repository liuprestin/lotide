const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  
});

//OLD test - note: bad practice to leave commented out code like this...
/*
assertEqual(head([1,2,3,4]), 1);
assertEqual(head(["Hello", "World"]), "Hello");
*/