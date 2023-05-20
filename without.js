
// given two arrays with basic data types
// - original array
// - array of values to remove
function without(original_arr, itemsToRemove){
    let temp = []; 

    for (let x = 0; x < original_arr.length; x++){
        if(!(itemsToRemove.includes(original_arr[x]))){
                console.log(original_arr[itemsToRemove[x]]);
            temp.push(original_arr[x]);
        }
    }
    return temp;
    
}

module.exports = without;