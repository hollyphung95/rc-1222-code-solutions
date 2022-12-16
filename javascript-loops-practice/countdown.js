/* exported countdown */
function countdown(number) {
  var resultArray = [];

  while (number >= 0) {
    resultArray.push(number);
    --number;
  }
  return resultArray;
}
