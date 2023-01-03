/* exported student */

/* In student.js,create an object named student with the following
properties and methods while refreshing test.html to check your progress:
firstName - a string containing your first name
lastName - a string containing your last name
subject - a string containing your favorite subject */

var student = {
  firstName: 'Holly',
  lastName: 'Phung',
  subject: 'Pokemon',

  /* getFullName - a function that returns the student's firstName and lastName separated by a space.
The function should use the firstName and lastName properties of this. */
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
  /* getIntroduction - a function that returns a string introduction like so:
  "Hello, my name is Warby Parker and I am studying optometry.".
The function should use the firstName, lastName, and subject properties of this. */
  getIntroduction: function () {
    var introStr = 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
    return introStr;
  }
};
