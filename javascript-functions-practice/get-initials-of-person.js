/* exported getInitialsOfPerson */
/*
Parameters
person - a JavaScript object with firstName and lastName properties
Return Value
The first and last initials of the person.
*/
function getInitialsOfPerson(person) {
  var initials = '';
  if (person.firstName && person.lastName) {
    if (person.firstName.length > 0 && person.lastName.length > 0) {
      initials = (person.firstName).charAt(0) + (person.lastName).charAt(0);
    }
  }
  return initials;

}
