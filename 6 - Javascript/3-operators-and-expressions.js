// Operators and Expressions

// 1. Arithmetic Operators

let x = 21;
let y = 10;

// Addition, '+'
let sum = x + y;
console.log("The total of x and y is:", sum);

// Substraction, '-'
let difference = x - y;
console.log("The difference of x and y is:", difference);

//Multiplication '*'
let multiply = x * y;
console.log("The multiply of x and y is:", multiply);

//Division, '/'
let division = x / y;
console.log("The division of x and y is:", division);

// Remainder, '%'
let modulus = x % y;
console.log("Division Remainder of x and y: ", modulus);

let answer = (10 / 2) * 23 + 23;
console.log(answer);

// 2. String Expressions or concatenation
console.log("Hello" + " " + "world!");
let greeting = "Hi";
let userName = "John";
console.log(greeting + " " + userName + "!");

// 3. Comparison Operators
// Equal to (==): This operator checks if two values are equal
let num1 = 5;
let num2 = 10;
console.log("Is it equal?", num1 == num2);

// Strict equal to(===): This operator checks if two values are equal in both value and type
console.log("Are the values and types equal?", num1 === num2);

// Not equal to (!=): This operator checks if two values are not equal
console.log("Are the values not equal?", num1 != num2);

// Greater than (>): This operator checks if the left operand is greater than the right operand
console.log(num1 > num2);
// Less than (<): This operator checks if the left operand is less than the right operand
console.log(num1 < num2);

// Greater than or Equal to (>=): This operator checks if the left operand is greater than or equal to the right operand
console.log("Greater than or Equal to (>=):", num1 >= num2);
// Less than or Equal to (<=): This operator checks if the left operand is less than or equal to the right operand
console.log("Less than or Equal to (<=):", num1 <= num2);

// 4. Logical Expressions (&&, ||, !)
let sunny = true;
let warm = true;
console.log("Is it sunny AND warm?", sunny && warm);
console.log("Is it sunny OR warm?", sunny || warm);
console.log("Not sunny?", !warm);
