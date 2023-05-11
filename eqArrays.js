//Console Assertion function that checks Arrays
// We also validate each value 
// returns true or false
function eqArrays(actual, expected){
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

module.export = eqArrays;