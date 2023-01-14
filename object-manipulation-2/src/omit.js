/* exported omit */
/* The opposite of pick; this method creates an object composed of properties of source not listed in keys.

/*  This function returns a new object that is composed of the property keys that the specified object 'source' DOES NOT contain.
This function will take in two arguments, any javascript object and an array of strings.
The strings in the array are the properties that we will check the source object of not having.
In other words, for every key in the array of keys, we check if the key of source object is valid,
if yes, that property will not be added.
otherwise, the value of specified object property will be assigned to a new key, and added to the return object.
if all of the property keys in the array is found , the return object will return a object with no keys or values.
*/
function omit(source, keys) {
  var returnNewObj = {};

  for (const prop in source) {
    if (!(keys.includes(prop))) {
      returnNewObj[prop] = source[prop];
    }
  }
  return returnNewObj;
}
