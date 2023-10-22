/*
 * filename: complexCode.js
 * description: A complex and sophisticated code showcasing various JavaScript concepts and functionalities.
 */

// Create a class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Create a subclass of Person representing an Employee
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }

  promote(newPosition) {
    this.position = newPosition;
    console.log(`Congrats, ${this.name}! You have been promoted to ${this.position}.`);
  }
}

// Create an array of employees
const employees = [
  new Employee("John Doe", 30, "Manager"),
  new Employee("Jane Smith", 25, "Developer"),
  new Employee("Mike Johnson", 35, "Designer")
];

// Display employee details and promote one of them
employees.forEach((employee) => {
  employee.greet();
});

employees[1].promote("Senior Developer");

// Define a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// Create an object representing a car
const car = {
  brand: "Tesla",
  model: "Model S",
  color: "Red",
  price: 70000,
  features: ["Autopilot", "Touchscreen", "Electric"],
  getInfo: function() {
    return `${this.brand} ${this.model} (${this.color}) - $${this.price}`;
  }
};

console.log(car.getInfo()); // Output: Tesla Model S (Red) - $70000

// Perform asynchronous operations using Promises
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function complexAsyncTask() {
  console.log("Starting complex asynchronous task");

  await delay(2000);
  console.log("Task 1 completed.");

  await delay(3000);
  console.log("Task 2 completed.");

  await delay(1500);
  console.log("Task 3 completed.");

  console.log("Complex asynchronous task finished.");
}

complexAsyncTask();

// Use a generator function to iterate over numbers within a range
function* numberRange(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const numbers = numberRange(1, 5);

for (const num of numbers) {
  console.log(num);
}

// Simulate a network request using async/await
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData("https://api.example.com/data");

// ... More complex code continues ...
...
...
...
...
...
...

// End of complexCode.js