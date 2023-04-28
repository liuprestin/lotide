import {assertEqual} from "./assertEqual.js";


//take in a sentence and collect each index of a letter 
// Assumptions:
// not case sensitive

function letterPositions(sentence){

    //assume it is not case sentitive
    let clean_string = sentence.toLowerCase(); 
    let collectedLetters = {};

    //lets parse the string 
    for (let x = 0; x < clean_string.length; x++){
        let temp_arr = [x];
        console.log(collectedLetters[x])
        //collectedLetters[x] = collectedLetters[x].push(x) || temp_arr; //increment by one or if it doesn't exist yet

        // could instead use .indexOF() until it returns a -1 ; replace each instance of a letter with a 1 at that index since we have it 
        // continue through the loop 
    }


    return collectedLetters; 
}

//Test the countLetters function 
console.log(letterPositions("this is my day"));