const person = {
  firstName: 'Sara',
  lastName: 'Choi',
  hobby: 'Music'
};

const fullName = `The person's name is: ${person.firstName} ${person.lastName}`;
console.log(person);
console.log(fullName);

person.job = 'Programmer';
console.log("The person's current job is: " + person.job);

person.previousJob = 'assistant';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
