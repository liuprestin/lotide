
//Console Assertion function
export function assertEqual(actual, expected){
    if( actual === expected) {
        console.log(`Assertion Passed ✅ : ${actual} === ${expected}`);
    } else {
        console.log(`Assertion Failed 🛑 : ${actual} !== ${expected}`);
    }

}

// TEST -- commented out since they seem to be exported too
/*
assertEqual("LHL", "Bootcamp");
assertEqual(1,1); 

*/