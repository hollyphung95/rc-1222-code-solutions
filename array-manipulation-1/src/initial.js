/* exported initial */

/* This function will take in any javascript array(any type values and any number of elements).
Function will return a new array containing all elements of array excluding the last element. We assume that the array is valid.
Meaning the array isnt null or any variables, objects, and etc used have been defined correctly, accessible, and not empty
eg. Say this function was called with an empty array as the argument passed in, the return of the function will be undefined.
First, for-loop will iterate through each element in the array. the intialization expression will intialize i = 0 , since an array's first element is acces at index 0.
The conditional expression will iterate through length of the array (all the elements) and will be added to a new array named resultArray. Then the final expression of the for-loop will increment by 1. */

function initial(array) {
  var resultArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
