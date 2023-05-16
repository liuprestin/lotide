// Min - in an array determine the smallest number in an array
// Assumptions:
// - interger array of numbers
function min(numbers) {
  let smallest = numbers[0]; //insert the 1st element to start

  //iterate through each element to check for smallest element
  for (const ele of numbers) {
    if (smallest > ele) {
      smallest = ele;
    }
  }
  return smallest;
}

module.exports = min;
