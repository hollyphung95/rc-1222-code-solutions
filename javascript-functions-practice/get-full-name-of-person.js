/* exported getFullNameOfPerson */

/*
Parameters
person - a JavaScript object with firstName and lastName properties
Return Value
The values of the firstName and lastName properties of the person object concatenated together with a space between.
*/
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}
