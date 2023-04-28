import {assertEqual} from "./assertEqual.js";


//Given an object find the key related to its value

function findKeyByValue( collection, key_str){

    for (const [key, val] of Object.entries(collection)) {
        console.log(`${key}: ${val}`);
        if(val == key_str){
            return key;
        }
      }
      return undefined;
}

//Tests
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  findKeyByValue(bestTVShowsByGenre, "The Wire");

  /*
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); */