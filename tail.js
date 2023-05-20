//similar to: https://lodash.com/docs/4.17.15#head

// Given an array return a copy of the last element
// it must be a copy of the value and not the original
// (ie. does not mutate)
function tail(arr) {
  let value = arr[arr.length - 1];
  return value;
}

module.exports = tail;
