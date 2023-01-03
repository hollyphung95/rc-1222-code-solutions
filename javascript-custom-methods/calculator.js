/* exported calculator */

/* In calculator.js,
create an object named calculator with the following methods
while refreshing test.html to check your progress:

add(x, y) - returns the sum of x and y
subtract(x, y) - returns the difference of x and y
multiply(x, y) - returns the product of x and y
divide(x, y) - returns the quotient of x and y
square(x) - returns the square of x
sumAll(numbers) - returns the sum of an array of numbers
getAverage(numbers) - returns the average of an array of numbers
*/

var calculator = {
  /* add(x, y) - returns the sum of x and y */
  add: function (x, y) {
    return x + y;
  },
  /* subtract(x, y) - returns the difference of x and y */
  subtract: function (x, y) {
    return x - y;
  },
  /* multiply(x, y) - returns the product of x and y */
  multiply: function (x, y) {
    return x * y;
  },
  /* divide(x, y) - returns the quotient of x and y */
  divide: function (x, y) {
    return x / y;
  },
  /* square(x) - returns the square of x */
  square: function (x) {
    return x * x;
  },
  /* sumAll(numbers) - returns the sum of an array of numbers */
  sumAll: function (numbers) {
    var result = 0;

    for (var i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result;
  },
  /* getAverage(numbers) - returns the average of an array of numbers */
  getAverage: function (numbers) {
    var result = 0;
    var length = numbers.length;

    for (var i = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
    return result / length;
  }
};
