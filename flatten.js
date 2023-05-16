// Take in an array and remove
// embedded arrays into one array
function flatten(arr) {
  let rebuild = [];

  for (let ele of arr) {
    if (ele instanceof Array) {
      rebuild.push(...flatten(ele));
    } else {
      rebuild.push(ele);
    }
  }
  return rebuild;
}

module.export = flatten;
