/* exported getSecondCharacter */
/*
Parameters
string - a JavaScript string
Return Value
The second character of the input string.
*/
function getSecondCharacter(string) {
  var returnValue = '';
  if (string.length >= 2) {
    returnValue = string[1];
  }
  return returnValue;
}
