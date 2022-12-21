/* exported isUpperCased */

/* This function accepts one string parameter.
   If we convert all the text uppercase, is it the same as original
   Return the truthy value of the word(given) compared to word converted to all lowercase.
*/
function isUpperCased(word) {
  return word === word.toUpperCase();
}
