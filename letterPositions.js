// letterPositions(string) take in a sentence and return 
// collection of each index of a letter 
// Assumptions:
// - passed in string is not case sensitive
function letterPositions(sentence){
    let clean_string = sentence.toLowerCase().split(""); 

    // create a set of unique vaules of the passed in string
    let collectedLetters = new Set(sentence.toLowerCase().replace(/\s/g,'').split("")); 
    
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

            key[value] = key_counter.toString();
            return key; 
        
        },
        {}); 


    return collectionL;
};

module.export = letterPositions;