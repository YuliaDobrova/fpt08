// Functions - Allows us to write resuable block of codes that can excuted whenever needed

// Defining a function
function greet() {
  console.log("Helo, welcome to the world of functions!");
  console.log("Yehey!");
}

// Calling a function
greet();

// Functions with parameter
// Defining functions with parameter
function sum(num1, num2) {
  console.log("starting computation...");
  return num1 + num2;
  console.log("Computation done!"); // Muted or no longer reachable due to return keyword
}
// Calling functions with parameter
// The value that we are passing to a function is called argument
console.log(sum(10, 15));
