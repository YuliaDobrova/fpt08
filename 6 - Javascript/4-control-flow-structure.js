// 1. Conditional Statements - Allows us to execute different blocks of codes based on a condition

if (temperature < 0) {
  console.log("It's freezing!");
}

// Contional: if
let temperature = 22;
if (temperature < 0) {
  console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 20) {
  console.log("It is cool outside.");
} else if (temperature >= 21 && temperature < 30) {
  console.log("It is warm outside.");
} else {
  console.log("It is hot outside!");
}

// Conditional: Switch
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It is the start of the week.");
    break;
  case "Friday":
    console.log("It is the end of the weekdays.");
    break;
  default:
    console.log("It is a regular day.");
    break;
}

// 2. Looping Statements - Used to repeateadly execute a block of codes until a specific condition is met.
// They provide way to automate task repetitive task.
// Loops: for loop
// Loops: for loop
for (let i = 1; i <= 5; i++) {
  console.log("for loop:", i);
}

// Loops: while loop
let count = 1;
while (count <= 5) {
  console.log("Perform me first!");
  count++;
  console.log("while loop:", count);
}

//  Loops: do-while loop
let counter = 100;
do {
  console.log("do while:", counter);
  counter++;
} while (counter <= 5);
