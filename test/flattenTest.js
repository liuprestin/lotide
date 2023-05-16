//For now a simple test
const assert = require("chai").assert;
const flatten = require('../flatten');

describe("#flatten", () => {
    it("flatten([1, 1, [11,2,[10,11,14,[10]]], 2] should be [1,1,11,2,10,11,14,10,2]", () => {
      assert.strictEqual(flatten([1, 1, [11,2,[10,11,14,[10]]], 2]), [1,1,11,2,10,11,14,10,2]);
    });
});