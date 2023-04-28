import {assertEqual} from "./assertEqual.js";


//take in a sentence and count each of the letters in that sentence 
// Assumptions:
// not case sensitive

function countLetters(sentence){
    let clean_string = sentence.toLower().replace("[^A-Za-z]+", ""); //make sure all elements are 
    console.log(clean_string);
}