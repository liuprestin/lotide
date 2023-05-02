//Rudemntry version of the MAP() function 
function myMap(arr, callback){

    let new_arr = arr;
    // iterate through each element --> replacing the the value 
    // with whatever the return value is of the object 
    for(let i = 0; i < arr.length; i++){
        new_arr[i] = callback(i);
    }

    return new_arr;
}

//Lets experiment with the function

const words = ["ground", "control", "to", "major", "tom"];
const results1 = myMap(words, word => word[0]);
console.log(results1);