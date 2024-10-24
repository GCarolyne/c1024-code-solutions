interface Person {
  firstName: string;
  lastName: string;
} /* exported getFirstInitialOfPerson */

function getFirstInitialOfPerson(person: Person): string {
  const firstInitialOfName: string = person.firstName[0];
  return firstInitialOfName;
}
