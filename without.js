import { eqArrays } from "./eqArrays.js";
import { assertArraysEqual } from "./assertArraysEqual.js";

// given two arrays with basic data types
// - original array
// - array of values to remove
function without(original_arr, itemsToRemove){
    let temp = []; 

    for (let x = 0; x < original_arr.length; x++){
        if(!(itemsToRemove.includes(original_arr[x]))){
                console.log(original_arr[itemsToRemove[x]]);
            temp.push(original_arr[x]);
        }
    }
    return temp;
    
}

//Sanity testing
// without currently returns nothing... 
// iterating through the array and eliminating values is the problem
console.log(without([1,2,3,67,25],[3,2,5,25])); //should return [1]