
// Return the value that is in the middle of the array
// if the array is even - it will return 2 elements
// if the array is odd - it will return 1 element
// excludes arrays of length 1 and 2 

function middle(arr){
    let rebuild = [];
    let index = 0;

    if(arr.length === 1 || arr.length === 2){
        return rebuild;
    }

    index = Math.round(arr.length / 2); //it will round up

    if(arr.length % 2 === 0)
    {
        //even number of values
        rebuild.push(arr[index - 1]);
        rebuild.push(arr[index]);
    } else {
        //ODD number of values
        rebuild.push(arr[index]);
        
    }
    return rebuild;
}

module.export = middle;