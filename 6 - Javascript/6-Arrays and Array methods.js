// Arrays and Array methods
// Arrays - allow us to store multiple values in a single variable

// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits);

// Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

// Getting the last element (length)
console.log(fruits.length);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying / Updating Array indexes
fruits[1] = "Grapes";
console.log(fruits);

fruits[2] = 36;
console.log(fruits);
fruits[2] = "Orange";

// Add another element (push())
fruits.push("Kiwi", "Durian", "Dragonfruit");
console.log(fruits);

// Remove the last element (pop())
console.log(fruits.pop());
console.log(fruits);

// Splice (Two methods)
// Add at a specific index (starting, remove, add)
fruits.splice(3, 0, "Pineapple");
console.log(fruits);
// Remove at a specific index (starting, remove)
fruits.splice(3, 3);
console.log(fruits);

// For loops with arrays
for (let i = 0; i < fruits.length; i++) {
  fruits[i] = "Golden " + fruits[i];
}
console.log(fruits);

// forEach method
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// includes() - true if the value is in array, false if not
console.log("Includes 3:", numbers.includes(3));
console.log("Includes 7:", numbers.includes(7));

// join() - converting your array values into a string
// join("symbol")
console.log("Joined array:", numbers.join(" "));

// slice() - extract a portion of an array to make a new array
// slice(start, end [not included])
let slicedArray = numbers.slice(1, 3);
console.log(slicedArray);
