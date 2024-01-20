# Independent Study Project - Filter Function

## Introduction
#### The filter() method is an iterative method, which allows you to filter an array to see elements that only meets a certain condition.It calls a callback function once for each element in an array and then creates a new array, or “shallow copy’ of the original array.

## Algorithm Description
![filter](./1_c-h6stlbIZX50KcrbWKwTQ_filter%20function%20IMAGE.webp)
#### 1. Define the array with elements
#### 2. Call the filter() method on the array
#### 3.  Pass the function that will test each element  of the array.
#### 4. Assign the new filtered array to a new variable

## Big O Notation
### Time Complexity
#### Time complexity for the filter() is O(n).  It iterates over the whole array.

### Space Complexity
#### Space complexity for the filter() is O(n), iterating over the whole array.

## Use Cases
#### It can be used to filter through lists of items on a website based on a specified criteria. When used, it prevents duplicate items from being listed.

## Edge Cases and Concerns
#### 1. The filter function does not mutate the array.  The new array needs to be saved if it is be used later.
#### 2. The function will not execute on an empty array.


## Citations
#### 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
#### 2. https://flexiple.com/javascript/javascript-filter-array
#### 3. https://debbie.codes/blog/js-array-filter-method/
#### 4. https://www.shiksha.com/online-courses/articles/how-to-use-javascript-array-filter/
