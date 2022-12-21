/* exported compact */

/* This function will take in any javascript array(any type values and any number of elements).
Function will return a new array containing all elements of array in reversed order. We assume that the array is valid.
Meaning the array isnt null or any variables, objects, and etc used have been defined correctly, accessible, and not empty
For-loop will iterate through every element in the array. Expression1 will intialize the start to index 0. Then check if condition is valid,
if yes enter the clode block and add the element at array[0].
otherwise, dont add anything.
The conditional expression will loop to the end of array.. (from start to end) and will be added to a new array named resultArray. Then the final expression of the for-loop will decrement by 1. and loop again  */

function compact(array) {
  var resultArray = [];
  for (var i = 0; i <= array.length - 1; i++) {
    if (array[i]) {
      resultArray.push(array[i]);
    } else {
      resultArray.push();
    }
  }
  return resultArray;
}
