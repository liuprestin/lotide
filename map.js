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