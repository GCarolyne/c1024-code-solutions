/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}
function getInitialsOfPerson(person: Person): string {
  const personsInitials: string = person.firstName[0] + person.lastName[0];
  return personsInitials;
}
