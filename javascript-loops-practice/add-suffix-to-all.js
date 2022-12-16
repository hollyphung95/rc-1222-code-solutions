/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var resultArray = [];
  for (var i = 0; i < words.length; i++) {
    resultArray.push(words[i] + suffix);
  }
  return resultArray;
}
