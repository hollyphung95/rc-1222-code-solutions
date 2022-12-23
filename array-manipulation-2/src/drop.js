/* exported drop */
/* 🚨 Do not mutate the input array! 🚨

Parameters
array - Any JavaScript Array
count - A positive integer Number of elements to "drop" from the beginning of array
Return Value
A new Array containing the elements of array after the first count elements. */

function drop(array, count) {
  var resultArray = [];

  for (var i = count; i < array.length; i++) {
    resultArray.push(array[i]);
  }
  return resultArray;
}
