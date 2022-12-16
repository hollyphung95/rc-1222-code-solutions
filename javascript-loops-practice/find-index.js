/* exported findIndex */
function findIndex(array, value) {
  var firstOccurenece = -1;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      firstOccurenece = i;
      break;
    }
  }
  return firstOccurenece;
}
