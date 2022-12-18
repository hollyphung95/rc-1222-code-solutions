/* exported getStudentNames */
function getStudentNames(students) {
  var resultArray = [];
  for (var i = 0; i < students.length; i++) {
    resultArray.push(students[i].name);
  }
  return resultArray;
}
