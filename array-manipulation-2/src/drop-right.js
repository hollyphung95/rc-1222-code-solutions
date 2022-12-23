/* exported dropRight */
/* 🚨 Do not mutate the input array! 🚨

Parameters
array - Any JavaScript Array
count - A positive integer Number of elements to "drop" from the end of array.
Return Value
A new Array containing the elements of array before the last count elements  */

function dropRight(array, count) {
  var resultArray = [];

  if (array.length === 0) {
    return resultArray;
  } else if (array.length < count) {
    for (var index in array) {
      resultArray.push(array[index]);
    }
  } else {
    for (var i = 0; i < array.length - count; i++) {
      resultArray.push(array[i]);
    }
    return resultArray;
  }
}
