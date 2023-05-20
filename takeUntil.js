
// Similar to lotide's "takeWhile" function 
// https://lodash.com/docs/4.17.15#takeWhile
function takeUntil(array, callback){
    let new_arr = [];
    let counter = 0;
    
    //iterate throug the array until the callback is falsy
    while(!callback(array[counter])){
        new_arr.push(array[counter]);
        counter++;
    }
    return new_arr;
}

module.exports = takeUntil; 