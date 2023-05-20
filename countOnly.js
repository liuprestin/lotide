// Given an array of strings
// count the number of identical strings
// return the object with those strings
// https://flex-web.compass.lighthouselabs.ca/workbooks/web-flex-v2-m01w2/activities/204?journey_step=72&workbook=45

function countOnly(arr, table_obj) {

  let obj_keys = Object.keys(table_obj);

  for (let i = 0; i < obj_keys.length; i++) {
    console.log(table_obj[obj_keys[i]]);
   
    //check if element is NOT true -> remove it from the keys
    if (!table_obj[obj_keys[i]]) {
      obj_keys.splice(i, 1); //from that item
    }
    console.log(obj_keys);
  }

  // now that we know what keys are valid we can check the other values
  let final_obj = {};

  //parse through the keys
  for (let x = 0; x < obj_keys.length; x++) {
    let temp_counter = 0;
    if (arr.includes(obj_keys[x])) {
      // parse through the array we need to check
      for (let ele of arr) {
        if (ele === obj_keys[x]) {
          temp_counter++;
          //add it to the object and increment it
          final_obj[ele] = temp_counter;
        }
        console.log(final_obj);
      }
    }
  }

  return final_obj;
}

module.exports = countOnly;