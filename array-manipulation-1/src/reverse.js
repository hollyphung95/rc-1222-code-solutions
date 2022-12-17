/* exported reverse */

/* This function will take in any javascript array(any type values and any number of elements).
Function will return a new array containing all elements of array in reversed order. We assume that the array is valid.
Meaning the array isnt null or any variables, objects, and etc used have been defined correctly, accessible, and not empty
eg. Say this function was called with an empty array as the argument passed in, the return of the function will be undefined.
First, for-loop will iterate through each element in the array. the intialization expression will intialize i = array[array.length - 1] , since we want to start at the last element in the array.
The conditional expression will iterate through length of the array backwards. (from last element to 0) and will be added to a new array named resultArray. Then the final expression of the for-loop will decrement by 1. and loop again  */

function reverse(array) {
  var resultArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
