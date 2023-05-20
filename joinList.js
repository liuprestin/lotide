/*
 * joinList(array) is a function that joins elements 
of an array into a comma separated string

 * Note:
 * - not allowed to use join()
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
  //add the last element
  full_string += ` ${arr[arr.length - 1]}`;

  return full_string;
}

module.exports = joinList;
