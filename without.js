import { eqArrays } from "./eqArrays.js";
import { assertArraysEqual } from "./assertArraysEqual.js";

// given two arrays with basic data types
// - original array
// - array of values to remove
function without(original_arr, remove_arr){
    let final_arr = original_arr;
    //check the original array for if they include the value
    for (let ele of remove_arr){
        final_arr = final_arr.filter(o_ele => o_ele !== ele);
    }
    return final_arr;
}

//Sanity testing
// without currently returns nothing... 
// iterating through the array and eliminating values is the problem
without([1,2,3],[3,2,5]); //should return [1]