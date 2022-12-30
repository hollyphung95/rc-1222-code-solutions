/* exported getFirstInitialOfPerson */

/*
Parameters
person - a JavaScript object with firstName and lastName properties
Return Value
The first character of the the string stored in the firstName property of the person object.
*/
function getFirstInitialOfPerson(person) {
  return (person.firstName).charAt(0);
}
