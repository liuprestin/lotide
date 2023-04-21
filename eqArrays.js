import {assertEqual} from "./assertEqual.js";


//Console Assertion function that checks Arrays
// We also validate each value 
// returns true or false
export function eqArrays(actual, expected){
    if (actual.length !== expected.length) {
        return false;
    }

    //here we assume each array is same length
    for (let i = 0; i < actual.length; i++){
        if( actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
}

//TEST out array equality

/*
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", 2, 3], [1, 2, 3]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => should FAIL 

*/