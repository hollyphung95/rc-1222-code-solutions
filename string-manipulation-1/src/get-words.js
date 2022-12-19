/* exported getWords */
/* param -  A JavaScript String containing 0+ words, separated by spaces.  */
/* Returns - An Array of JavaScript String. */
/* Build a  string word character by character.
When the word is complete add word to the array and reset the string Builder.
A word is complete when we are the current position is a space or the end.
*/

function getWords(string) {
  var stringBuilder = '';
  var resultArray = [];

  for (var i = 0; i <= string.length - 1; i++) {
    stringBuilder += string[i];
    if (string[i] === ' ') {
      resultArray.push(stringBuilder.trimEnd());
      stringBuilder = '';
    } else if (i === string.length - 1) {
      resultArray.push(stringBuilder);
      return resultArray;
    } else {
      resultArray.push();
    }
  }
  return resultArray;
}
