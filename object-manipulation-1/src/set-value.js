/* exported setValue */

/* Parameters
object - Any JavaScript Object
key - A JavaScript String
value - Any JavaScript value
Return Value - This function does not return anything (undefined)
This function's job is to take in any type of object,
 a property name and the value the want to store to the property specified.
 The value(argument3) will be stored in the property(argument2) of the object(argument1)
 This function just does its job and doesnt return anything.
 */
function setValue(object, key, value) {
  object[key] = value;
}
