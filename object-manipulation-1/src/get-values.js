/* exported getValues */
/* 🚨 Do not use Object.values in your implementation of getValues().

Parameters - object - Any JavaScript Object
Return Value - An Array of the object's property values.
This function will allow the user to take in any type of object and
get a list of the values from each of its properties.
The list of values of each property is stored in values.
For each key in the object, add the value of each key to the list of values.
return the list of values.
*/
function getValues(object) {
  var returnValues = [];

  for (var key in object) {
    returnValues.push(object[key]);
  }
  return returnValues;
}
