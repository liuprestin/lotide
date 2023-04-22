// Take in an array and remove
// embedded arrays into one array

function flatten(arr) {
  let rebuild = [];

  for (let ele of arr) {
    //hmm how does the spread function work?
    // check type
    // spread if its an array
    // Push()
    
    if (ele instanceof Array) {
      rebuild.push(...flatten(ele));
    } else {
      rebuild.push(ele);
    }
  }
  return rebuild;
}

console.log(flatten([1, 1, [11,2,[10,11,14,[10]]], 2]));