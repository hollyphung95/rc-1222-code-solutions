/* exported includesSeven */
function includesSeven(array) {
  var validOrNot = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      validOrNot = true;
      break;
    }
  }
  return validOrNot;
}
