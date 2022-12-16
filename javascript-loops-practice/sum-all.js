/* exported sumAll */
function sumAll(numbers) {
  var resultSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    resultSum += numbers[i];
  }
  return resultSum;
}
