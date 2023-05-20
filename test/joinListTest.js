const joinList = require('../joinList');
const assert = require("chai").assert;

// Test / Driver Code below...
const conceptList = [
    "gists",
    "types",
    "operators",
    "iteration",
    "problem solving",
  ];

  const concepts = joinList(conceptList);
  console.log(`Today I learned about ${concepts}.`);
  

  describe("#joinList", () => {
    it("joinList([]) returns '' ", () => {
      assert.strictEqual(joinList([]), "");
    });
    it("joinList('solo, solo') returns 'solo'", () => {
      assert.strictEqual(joinList(['solo, solo']), "solo");
    });
    
  });