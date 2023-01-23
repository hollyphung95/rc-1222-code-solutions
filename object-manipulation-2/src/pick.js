/* exported pick */

/*  This function creates an object composed of the picked source properties.
This function will take in two arguments, any javascript object and an array of strings.
The strings in the array are the properties that we will check the source object of having.
In other words, for every key in the array of keys, we check if the key of source object is valid,
if yes, then the value of specified object property will be assigned to a new key, and added to the return object.
otherwise, that property will not be added.
if none of the properties in the array is found , the return object will return a object with no keys or values.
*/

function pick(source, keys) {
  var myKeys = Object.keys(source);
  var returnVal = [];

  for (var i = 0; i < myKeys.length; i++) {
    for (var j = 0; j < keys.length; j++) {
      if (myKeys[i] === keys[j]) {
        returnVal.push(myKeys[i]);
      }
    }
  }
  var returnObj = {};
  var currKey;
  var currVal;
  for (var k = 0; k < returnVal.length; k++) {
    currKey = returnVal[k];
    currVal = source[currKey];

    if (currVal !== undefined) {
      returnObj[currKey] = currVal;
    }

  }
  return returnObj;
}
