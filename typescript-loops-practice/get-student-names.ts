/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): string[] {
  const values: string[] = [];
  for (let i = 0; i < students.length; i++) {
    values.push(students[i].name);
  }
  return values;
}
