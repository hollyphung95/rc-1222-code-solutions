/* exported getFirstElement */

/*
Parameters
array - a JavaScript array
Return Value
The first element of the input array.
*/
function getFirstElement(array) {
  var returnValue = '';
  if (array.length > 0) {
    returnValue = array[0];
  }
  return returnValue;
}
