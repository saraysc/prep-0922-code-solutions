function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

console.log(convertHoursToMinutes(2));

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * 3.14159265359 * radius;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('Juan', 'Ramirez'));

function cube(number) {
  return number * number * number;
}

console.log(cube(5));
