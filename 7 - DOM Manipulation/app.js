// DOM - Document Object Model
// Step 1: Targetting elements

// Old way
/* 
    getElementById,
    getElementsByClassName
    getElementsByTagName
*/

let elementWithId = document.getElementById("first-div");
console.log(elementWithId);

let elementsWithClass = document.getElementsByClassName("sample-div");
console.log(elementsWithClass);
console.log(elementsWithClass["first-div"]);
console.log(elementsWithClass[0]);

let listItems = document.getElementsByTagName("li");
console.log(listItems);
console.log(listItems[0]);

// New way
/* 
    querySelector
    querySelectorAll
*/

// querySelector = first occurence of ANY target string
let orderedListItem = document.querySelector(".ordered-list");
console.log(orderedListItem);

let firstDiv = document.querySelector("#first-div");
console.log(firstDiv);

// querySelectorAll = ALL occurences of any target string
let orderedListItems = document.querySelectorAll(".ordered-list");
console.log(orderedListItems);

let sampleDivs = document.querySelectorAll(".sample-div");
console.log(sampleDivs);

// Step 2: Modifying / Manipulation

// Changing CSS Styles (style)
let headings = document.querySelectorAll("h3");
headings[0].style.color = "aqua";
headings[0].style.backgroundColor = "black";

// Change text (innerText/textContent, innerHTML)
// headings[1].innerText = "<em>New Heading</em>";
headings[1].innerHTML = "<em>New Heading</em>";

// Looping through HTML element collections
headings.forEach(function (heading) {
  heading.style.color = "aqua";
  heading.style.backgroundColor = "black";
});

// https://cdn-icons-png.flaticon.com/512/624/624106.png
// https://cdn-icons-png.flaticon.com/512/3688/3688129.png

// Updating element attributes
let dayNightIcon = document.querySelector("#day-night-icon");

// setAttribute(name, value)
dayNightIcon.setAttribute(
  "src",
  "https://cdn-icons-png.flaticon.com/512/3688/3688129.png"
);

// getAttribute(name)
console.log(dayNightIcon.getAttribute("src"));

/* 
    HOW TO APPEND!
    1. Create Element
    2. Changing its properties
    3. Append/Link to an existing element
*/

// Appending Elements
let parentElement = document.querySelector("#parent-element");
let newElement = document.createElement("div");

// Change its properties
newElement.innerText = "Child Element";

// Append
parentElement.appendChild(newElement);

// Removing Elements
let elementToBeRemoved = document.querySelector("#element-to-be-removed");
elementToBeRemoved.remove();

// Step 3: Event Listeners
let darkModeBtn = document.querySelector("#dark-mode-btn");

// Adding Event Listener (event, function)
darkModeBtn.addEventListener("click", function () {
  let pageContainer = document.querySelector("#page-container");
  let pageModeText = document.querySelector("#page-mode-text");
  pageContainer.style.backgroundColor = "black";
  pageContainer.style.color = "white";
  pageModeText.textContent = "Dark Mode";
});
