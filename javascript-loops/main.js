
/* getNumbersToTen */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
getNumbersToTen();
console.log(getNumbersToTen());

/* getEvenNumbersToTwenty */
function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
getEvenNumbersToTwenty();
console.log(getEvenNumbersToTwenty());

/* repeatWord */
function repeatWord(word, times) {
  var count = 1;
  var repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
repeatWord('', Number);
console.log(repeatWord('javascript', 30));

/* logEachCharacter */
function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
logEachCharacter('');
console.log(logEachCharacter('javascript'));

/* doubleAll */
function doubleAll(numbers) {
  var doubled = [];

  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
doubleAll([]);
console.log(doubleAll([5, 7, 9, 11]));

/* getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
getKeys([]);
console.log(getKeys({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));

/* getValues */
function getValues(object) {
  var values = [];
  for (var key in object) {
    values.push(object[key]);
  }
  return values;
}
getValues([]);
console.log(getValues({ isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer' }));
