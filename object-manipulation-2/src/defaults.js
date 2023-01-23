/* exported defaults */
/*
This function will allow the user to take in two arguments, both of which are objects of any type
1. First object, the target object is the object we will assign to.
2. Second object, the source object is where we will source the property values intended for 'target'
The target properties this function looks for from source object,
are all properties that ARE NOT defined in 'target'.
This function just does its job and doesnt return anything.
*/

function defaults(target, source) {
  Object.setPrototypeOf(target, source);
}
