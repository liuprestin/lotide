import {assertEqual} from "./assertEqual.js";

//iterate through an object for a key
// takes in a callback function to determine the criteria for the key
function findKey(obj, callback){

    for(let [key, value] of Object.entries(obj)){
        if(callback(value)){
            return key;
        }
    }

}

//Quick Test 
let result = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

  console.log(result);