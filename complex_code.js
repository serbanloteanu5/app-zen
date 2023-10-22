// Filename: complex_code.js
// This code demonstrates a complex algorithm for finding prime numbers and performing various operations on them

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

// Function to generate the nth prime number
function generateNthPrime(n) {
  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) count++;
    num++;
  }

  return num - 1;
}

// Function to find the sum of first N prime numbers
function sumOfNPrimes(N) {
  let count = 0;
  let sum = 0;
  let num = 2;

  while (count < N) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }

  return sum;
}

// Function to find the product of first N prime numbers
function productOfNPrimes(N) {
  let count = 0;
  let product = 1;
  let num = 2;

  while (count < N) {
    if (isPrime(num)) {
      product *= num;
      count++;
    }
    num++;
  }

  return product;
}

// Main code execution
const N = 10;
console.log(`The Nth prime number is: ${generateNthPrime(N)}`);
console.log(`The sum of the first ${N} prime numbers is: ${sumOfNPrimes(N)}`);
console.log(`The product of the first ${N} prime numbers is: ${productOfNPrimes(N)}`);
console.log(`Is 17 prime? ${isPrime(17)}`);
console.log(`Is 27 prime? ${isPrime(27)}`);
console.log(`Is 1 prime? ${isPrime(1)}`);