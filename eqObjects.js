import {assertEqual} from "./assertEqual.js";
import {assertArraysEqual} form "./assertArraysEqual.js";

//Given 2 objects - check if they are identicle
// NOTE: this is a primitive version --> a recursive version would be better 
function eqObjects( collection1, collection2){

    for (const [key, val] of Object.entries(collection1)) {
        if(collection2[key] !== val){
            return false;
        }
      }
      return true;
}

// --------- Tests  ----------------------
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
 
  assertEqual(eqObjects(bestTVShowsByGenre, bestTVShowsByGenre), true);
  assertEqual(eqObjects(bestTVShowsByGenre, {} ), false); 