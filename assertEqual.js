
//Console Assertion function
function assertEqual(actual, expected){
    if( actual === expected) {
        console.log(`Assertion Passed ✅ : ${actual} === ${expected}`);
    } else {
        console.log(`Assertion Failed 🛑 : ${actual} !== ${expected}`);
    }

}

// TEST

assertEqual("LHL", "Bootcamp");
assertEqual(1,1);