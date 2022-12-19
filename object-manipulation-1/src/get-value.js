/* exported getValue */
/* Parameters
object - Any JavaScript Object
key - A JavaScript String
Return Value - The value in object found at the key property.
This function will allow the user to take in two arguments
1. any type of object 2. the property name of which the user is trying to get the value for.
This function will return the value of the specified property named.
The value of the property is stored in returnValue.
return returnValue.
*/

function getValue(object, key) {
  var returnValue = object[key];

  return returnValue;
}
