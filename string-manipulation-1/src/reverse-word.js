/* exported reverseWord */

/* Parameters - word -A single word as a JavaScript String */
/* Return Value - A JavaScript String containing the characters of word in reverse order */
/* Build a string word character by character.
Starting from the end of the word to the beginning of the word. last index to the first findex.
When the word is complete return the word.
*/
function reverseWord(string) {
  var strWord2 = '';
  for (var i = string.length - 1; i >= 0; i--) {
    strWord2 += string[i];
  }
  return strWord2;
}
