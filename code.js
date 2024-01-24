


// only differnece is this iterates right to left.
function insertionSortReverse(array) {
    // check for empty
    if (array.length == 0){
        // revist why this isn't caught by second part?
        return [];
    }
    // Start the loop from the second-to-last element 
    // (index n - 2) and move towards the beginning
    // Must also include the 0 index!!!!
    for (var i = array.length - 2; i >= 0; i-- ){
        var val = array[i];
        var j = i + 1;
        // Move elements of arr[i+1..length-1] that are greater than val (current value of index i)
        // to one position ahead of their current position
        // I attempted Binary Search but couldn't get it to work for swaps that required
        // Traversal greater than one posistion AND with repeat values ex:[1, 0, 0]
        while (j < array.length && array[j] < val) {
            array[j - 1] = array[j];
            j++;
        }
  
        // Place the current value at its correct position
        array[j - 1] = val;
    }

        // README: I read up on the splice operator because
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        // inserts at index j with val, and shifts other values appropriately
        // Doesn't overite the index specified.
        // array.splice(j,0,val)
        // remove original index of the value 
        // which was shifted write when inserting it in the correct possition.
        // array.splice(i+1,1)

        return array;
    }

//[Running] node "/home/tyson/Documents/Cosc3020/reverse-insertion-sort/code.test.js"
//[Done] exited with code=0 in 0.049 seconds

    
/*
// No Binary Search doesn't work with empty arrays
// For sake of clarity let's use a helper function
function binary_search(arr, val, beg, end){
    var middle = beg + end >> 1;  // bit shift right for faster divide by 2
    // base case
    if (beg > end){
        return start;
    }
    // RECURSIVE CASE
    // if middle is the val, return middle
    if (arr[middle] == val){
        return middle;        
    }
    else if (arr[middle] < val){
        // when middle is less than the target value:
        //  the search range is updated to right half of the current range
        binary_search(arr, val, mid +1, end);
    }
    else{
        // when middle element is greater than the target value:
        //  the search range is updated to left half of the current range
        binary_search(arr, val, start, mid -1);
    }
}
*/
