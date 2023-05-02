import {assertEqual} from "./assertEqual.js";


//take in a sentence and collect each index of a letter 
// Assumptions:
// not case sensitive

function letterPositions(sentence){

    //assume it is not case sentitive and create an array from it
    let clean_string = sentence.toLowerCase().split(""); 

    // create a set of unique vaules of the passed in string
    let collectedLetters = new Set(sentence.toLowerCase().replace(/\s/g,'').split("")); //this should give us each unique
    
    // create an object from that collection 
    let collectionL =  [...collectedLetters].reduce(
        (key, value) => {
            let key_counter = 0;

            //collect all occurances of a letter 
            for (let i = 0; i < clean_string.length; i++){
                if(clean_string[i] == value){
                    key_counter++;
                }
            }

            key[value] = key_counter.toString(); //for each occurance of that letter  
            return key; 
        
        },
        {}); //object to fill


    return collectionL;
}

//Test the countLetters function 
console.log(letterPositions("this is my day"));