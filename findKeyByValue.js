//Given an object find the key related to its value
function findKeyByValue(collection, key_str) {
  for (const [key, val] of Object.entries(collection)) {
    if (val == key_str) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKeyByValue;
