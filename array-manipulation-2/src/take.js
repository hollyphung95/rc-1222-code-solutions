/* exported take */
/* Parameters - array - Any JavaScript Arrays    - count - A positive integer Number of elements to "take" from the beginning of array
Return Value - A new Array containing the first count elements of array  */
function take(array, count) {
  var resultArray = [];

  if (array.length === 0) {
    return resultArray;
  } else if (array.length < count) {
    for (var index in array) {
      resultArray.push(array[index]);
    }
  } else {
    for (var i = 0; i < count; i++) {
      resultArray.push(array[i]);
    }

    return resultArray;
  }
}
