/* exported oddOrEven */
function oddOrEven(numbers) {
  var resultArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      resultArray.push('even');
    } else {
      resultArray.push('odd');
    }
  }
  return resultArray;
}
