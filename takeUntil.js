
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

//TESTING

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);