import {assertEqual} from "./assertEqual.js";


//take in a sentence and count each of the letters in that sentence 
// Assumptions:
// not case sensitive

function countLetters(sentence){

    //remove special characters and spaces
    let clean_string = sentence.toLowerCase().replace(/(\s+|@|&|'|\(|\)|<|>|#)/g, ""); 
    let collectedLetters = {};

    //lets parse the string 
    for (let ele of clean_string){
        collectedLetters[ele] = (collectedLetters[ele] + 1 )|| 1; //increment by one
    }


    return collectedLetters; 
}

//Test the countLetters function 
console.log(countLetters("this is my day"));