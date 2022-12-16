/* exported filterOutStrings */
function filterOutStrings(values) {
  var resultArray = [];

  for (var i = 0; i < values.length; i++) {
    if (values[i] !== String(values[i])) {
      resultArray.push(values[i]);
    }
  }
  return resultArray;
}
