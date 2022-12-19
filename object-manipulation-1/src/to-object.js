/* exported toObject */
/* Parameters - keyValuePair - An Array containing two elements;
a String key and any other JavaScript value.
Return Value - An Object with one property consisting of the passed keyValuePair.
This function will take in any list that contains two things.
1. a property name 2. the value of the property named in step1.
An empty object will be stored in returnObj.
save the value(item2 in list) to the property name(item1 in list) of the object.
The property name will automatically be created if it doesnt already exist.
This function just does its job and doesnt return anything.
Return returnObj.
*/
function toObject(keyValuePair) {
  var returnObj = {};

  returnObj[keyValuePair[0]] = keyValuePair[1];

  return returnObj;
}
