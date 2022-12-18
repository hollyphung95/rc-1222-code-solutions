/* exported filterOutNulls */
function filterOutNulls(values) {
  var resultArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      resultArray.push(values[i]);
    }
  }
  return resultArray;
}
