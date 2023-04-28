import {assertEqual} from "./assertEqual.js";
import {assertArraysEqual} from "./assertArraysEqual.js";

//Given 2 objects - check if they are identicle
// NOTE: this is a primitive version --> a recursive version could solve it 
function assertObjectsEqual( actual, expected){

    for (const [key, val] of Object.entries(actual)) {
        if(expected[key] !== val){
            console.log(`${actual} !== ${expected}`);
            return; //exit the function 
        }
      }
      console.log(`${actual} !== ${expected}`);
}

// --------- Tests  ----------------------
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
 
  assertEqual(assertObjectsEqual(bestTVShowsByGenre, bestTVShowsByGenre), true);
  assertEqual(assertObjectsEqual(bestTVShowsByGenre, {} ), false); 