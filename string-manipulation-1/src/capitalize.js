/* exported capitalize */

/* This function accepts one string parameter.
   Any character position in the string can be referenced by its index position.
   A capitalized word consist of: two things-
   the first letter is uppercase and
   the rest of the word is lower case.
   return that result.
*/
function capitalize(word) {
  var capitalChar = word.charAt(0).toUpperCase();
  var result = capitalChar + word.substr(1).toLowerCase();
  return result;
}
