const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("head(['Hello', 'World']) returns 'Hello' ", () => {
    assert.strictEqual(head(["Hello", "Hello"]), "Hello");
  });
  
});
