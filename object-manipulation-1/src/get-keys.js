/* exported getKeys */
/* 🚨 Do not use Object.keys in your implementation of getKeys().
Parameters
object - Any JavaScript Object
Return Value - An Array of the object's property keys.
This function will allow the user to take in any type of object and get a list of its properties.
The list of names of each property is stored in keys.
For each key in the object, add the key to the list of keys.
return the list of keys.
*/
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
