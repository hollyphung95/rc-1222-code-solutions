
/* Colors Array */
var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

var strResult = 'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(strResult);

colors[2] = 'green';
strResult = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.';
console.log(strResult);

console.log('value of colors: ', colors);

/* Students Array */
var students = ['Holly', 'Joseph', 'Ethan', 'Callie'];

var numberOfStudents = students.length;
console.log('There are ', numberOfStudents, ' students in this class.');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('The last student in the array is ', lastStudent);
console.log('value of students : ', students);
