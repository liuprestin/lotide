const joinList = require('../joinList');

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
  
  console.log(joinList([]));
  console.log(joinList("solo, solo"));