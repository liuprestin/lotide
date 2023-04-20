/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note:
 * - no join()
 * - this function assumes an iterative approach - but can be done with filter()
 * - iterate array with spaces
 * - replace spaces with ,
 *
 * Requirenments NOT mentioned:
 * - "solo , solo" should return - "solo"
 */

function joinList(data_arr) {
  let full_string = ""; //insert the 1st element to start
  let arr;

  //base case empty string
  if (data_arr.length === 0 || data_arr === undefined) {
    return full_string;
  }
  //deal with string case
  if (data_arr.length === 1) {
    arr = data_arr[0].split(/[ ,]+/);

    let cleaned = arr.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
    return cleaned.pop();
  }

  arr = data_arr;
  //assuming full array to concatenate
  full_string += `${arr[0]},`;
  //iterate through each element to check for smallest element
  for (let i = 1; i < arr.length - 1; i++) {
    full_string += ` ${arr[i]},`;
  }
  //do the last element
  full_string += ` ${arr[arr.length - 1]}`;

  return full_string;
}

/**
 
function joinList(arr) {
  let full_string = ""; //insert the 1st element to start

  //base case empty string
  if (arr === []) {
    return full_string;
  }
  //iterate through each element to check for smallest element
  for (let i = 0; i < arr.length - 1; i++) {
    full_string += `${arr[i]},`;
  }
  //do the last element
  full_string += `${arr[arr.length - 1]}`;
  return full_string;
}
 
 */

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
