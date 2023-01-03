/* exported getDescriptionOfPerson */

/*
Parameters
person - a JavaScript object with name, occupation, and birthPlace properties
Return Value
A description of the person (see example).
*/
function getDescriptionOfPerson(person) {
  var returnValue = '';
  returnValue = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return returnValue;
}
