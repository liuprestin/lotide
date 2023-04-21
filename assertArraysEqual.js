import {eqArrays} from "./eqArrays.js";

//Takes 2 arrays and outputs a message 
// to the console

export function assertArraysEqual(actual, expected){
    if( eqArrays(actual,expected) ) {
        console.log(`Assertion Passed ✅ : ${actual} === ${expected}`);
    } else {
        console.log(`Assertion Failed 🛑 : ${actual} !== ${expected}`);
    }
}

assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 2, 3], [1, 2, 3,4])