//similar to: https://lodash.com/docs/4.17.15#head

import {assertEqual} from "./assertEqual.js";

// Given an array return a copy of the 1st element 
// it must be a copy of the value and not the original 
// (ie. does not mutate)
function tail(arr){
    let value = arr.slice(1);
    return value;
}


//test each value
assertEqual(tail([1,2,3,4])[0], [2,3,4][0]);
assertEqual(tail(["Hello", "World"])[0], "World");