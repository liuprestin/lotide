// Console Assertion function that checks each 
// value of two arrays to see if they are equal
// returns true or false
function eqArrays(actual, expected){
    if (actual.length !== expected.length) {
        return false;
    }
    for (let i = 0; i < actual.length; i++){
        if( actual[i] !== expected[i]) {
            return false;
        }
    }
    return true;
}

module.export = eqArrays;