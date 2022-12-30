/* exported getPropertyValue */
/*
Parameters
object - a JavaScript object
key - a string
Return Value
The value stored in the object at the specified property key.
*/
function getPropertyValue(object, key) {
  var returnValue = object[key];
  return returnValue;
}
