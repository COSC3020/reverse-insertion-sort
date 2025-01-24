# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

1) The Outer loop always iterates $\Theta(n)$ times regardless of other factors.

2) The secondary loop will compare the current element with every previous element as the sorted section of the list grows. This may also require a swap with all previous elements.
This makes sense given your extremes are either no swaps or all swaps, between the best and worst cases.

3) The combination of outer loop and inner loop makes the average complexity as $\Theta(n^2)$.
A binary search instead of a linear probe could make the inner loop better for its worst case making, but without additional analysis I find it difficult to beleive it would improve the average time complexity by much when factoring in handling edge cases like empty sets.
