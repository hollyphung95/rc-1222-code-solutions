/* exported getSecondElement */
/*
Parameters
array - a JavaScript array
Return Value
The second element of the input array.
*/
function getSecondElement(array) {
  var returnValue = '';
  if (array.length >= 2) {
    returnValue = array[1];
  }
  return returnValue;
}
