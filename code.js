


// only differnece is this iterates right to left.
function insertionSortReverse(array) {
    console.log(array);
    // Must also include the 0 index
    for (var i = array.length - 1; i >= 0; i-- ){
        var val = array[i];
        // A binary search would be effective here as mentioned in lecture
        // J represents the appropriate INDEX for the replacement
        var j = binary_search(array, val, 0, i); // are moving window shifts to the left
        // README: I read up on the splice operator because it was mentioned
        //         In class and I'm in too deep now with trying to make this fast
        //         Honestly, it is very nice for readability and I assumed faster than
        //         what would otherwise be a for loop. Unfortunately I couldn't get it to work
        //         without skipping the last index.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

        // inserts at index j with val, and shifts other values appropriately
        // Doesn't ovewrite the index specified.
        // array.splice(j,0,val)
        // remove original index of the value 
        // which was shifted write when inserting it in the correct possition.
        // array.splice(i+1,1)

        // Shift elements to the right, excluding the current value
        for (var k = i; k > j; k--) {
            array[k] = array[k - 1];
        }

        // Insert the value at index j
        array[j] = val;
    }
    console.log("sorted: ", array)
    return array;

}


// For sake of clarity let's use a helper function
function binary_search(arr, val, beg, end){
    var middle = (beg + end) >> 1;  // bit shift right for faster divide by 2
    // base case
    if (beg > end){
        return beg;
    }
    // RECURSIVE CASE
    // if middle is the val, return middle
    if (arr[middle] == val){
        return middle;        
    }
    else if (arr[middle] < val){
        // when middle is less than the target value:
        //  the search range is updated to right half of the current range
        return binary_search(arr, val, middle + 1, end);
    }
    else{
        // when middle element is greater than the target value:
        //  the search range is updated to left half of the current range
        return binary_search(arr, val, beg, middle - 1);
    } 

}