'use strict';
function getStudentNames(students) {
  const values = [];
  for (let i = 0; i < students.length; i++) {
    values.push(students[i].name);
  }
  return values;
}
