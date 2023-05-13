// const monthlyRent = 500;

// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);

// Numbers, strings and booleans

// Strings
// Anything in between the double quotes, single quotes
// and backticks.
// const firstName = "Billy";
// const lastName = "Arante";
// const occupation = 'Software Developer';
// const mottoInLife = `No pain, no gain.`;
// console.log(myName);
// console.log(occupation);
// console.log(mottoInLife);

// String concatenation and interpolation
// Template strings -> using backticks
// console.log(firstName + " " + lastName);
// console.log("Hello " + firstName + " " + lastName + "! How are you today?");
// console.log(`Hello ${firstName} ${lastName}! How are you today?`);

// Boolean
// Either true or false.
// const isActive = true;
// const isReady = false;

// Numbers
// Integers: 1, 2, 3, 500, 1000
// Floats: 0.5 2.9, etc.

// Control Flow
// if...else statements
// const skyIsBlue = true;

// skyIsBlue === true --> skyIsBlue
// if (skyIsBlue === true) {
//   // do something here
//   console.log("The sky is blue!");
// } else {
//   // do this otherwise
//   console.log("The sky is... not blue?");
// }

// if...else if...else
// const friendsAtYourParty = 0;

// if (friendsAtYourParty === 0) {
//   // do something here
//   console.log("Cool, now I have a lot of nachos to myself.")
// } else if (friendsAtYourParty <= 4) {
//   // then do something here
//   console.log("Perfect amount to play some Mario Kart.")
// } else {
//   // do anything here
//   console.log("Nothing to do here.")
// }

// Loops
// let friendsAtYourParty = 0;
// while (friendsAtYourParty < 20) {
//   // friendsAtYourParty = friendsAtYourParty + 1;
//   friendsAtYourParty += 1;
//   // friendsAtYourParty++;
//   // ++friendsAtYourParty;
//   console.log(friendsAtYourParty);
// }
// console.log(friendsAtYourParty);

// let friendsAtYourParty = 0;
// for (let i = 0; i <= 10; i++) {
//   friendsAtYourParty = friendsAtYourParty + 1;
//   console.log(friendsAtYourParty);
// }
// console.log(friendsAtYourParty);

// infinite loop
// let friendsAtYourParty = 1;
// while (friendsAtYourParty > 0) {
//   friendsAtYourParty = friendsAtYourParty + 1;
// }
// console.log(friendsAtYourParty);

// Functions
// Is designed to create re-usable codes.

// 1)
// function nameOfTheFunction(p1, p2, p3, ...) {
//   code block
// }

// 2) arrow function
// const nameOfTheFunction = () => {
//     code block
// }

// function addTwo(number) {
//   // do something else here
//   return number + 2;
// }

// // Create a function that accepts a firstName, and a lastName
// // as an input and then return your complete name as an output.

// function completeName(firstName, lastName) {
//   return `${firstName} ${lastName}`;
// }

// const completeName2 = (firstName, lastName) => {
//   // const newCompleteName = firstName + " " + lastName;
//   const newCompleteName = `${firstName} ${lastName}`;
//   return newCompleteName;
// }

// // Scope
// const someVariable = "you can't see me outside this function";

// function addFive(number) {
//   // const someVariable = "you can't see me outside this function";
//   console.log(someVariable);
//   return number + 5;
// }

// console.log(addFive(10));
// console.log(someVariable); // this will return an error

// // Built-ins
// const sentence = "This Has wEiRd CaSiNg On It";
// const lowerCaseSentence = sentence.toLowerCase(); 
// console.log(lowerCaseSentence);

// const number = 5.3;
// const roundNumber = Math.round(number);
// console.log(roundNumber);

// const testStringOne = "The quick brown fox jumps over the lazy dog.";
// console.log(testStringOne.includes("fox"));
// console.log(testStringOne.includes("cute"));

// // Objects
// const person = {
//   name: "LeBron James",
//   team: "Los Angeles Lakers",
//   numberOfChampionships: 4,
//   isAnMVP: true
// };

// console.log(person);
// console.log(person.name); // dot notation
// console.log(person["name"]); // brackets notation

// const me = {
//   name: {
//     firstName: "Jose",
//     lastName: "Rizal"
//   },
//   location: {
//     city: "Laguna",
//     state: "CALABARZON",
//     country: "Philippines"
//   }
// };

// // Display in the console the complete name, and address
// // the me object.
// console.log(`${me.name.firstName} ${me.name.lastName}`);
// console.log(`${me.location.city}, ${me.location.state}, ${me.location.country}`);

// // Context

// const hero = {
//   name: {
//     firstName: "Jose",
//     lastName: "Rizal"
//   },
//   location: {
//     city: "Laguna",
//     state: "CALABARZON",
//     country: "Philippines"
//   },
//   getCompleteName() {
//     return `${this.name.firstName} ${this.name.lastName}`;
//   }
// };

// console.log(hero.getCompleteName());
// console.log(this);

// // Arrays
// const daysOfTheWeek = [
//   "Monday", // 0
//   "Tuesday", // 1
//   "Wednesday", // 2
//   "Thursday", // 3
//   "Friday", // 4
//   "Saturday", // 5
//   "Sunday" // 6
// ];

// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[4]);

// // traversing an array
// for (let i = 0; i < daysOfTheWeek.length; i++) {
//   console.log(daysOfTheWeek[i]);
// }

// daysOfTheWeek.forEach(function (day) {
//   console.log(day);
// });

// ** Putting it all together **

// The DOM (Document Object Model)
const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "green";

const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

// Events and Listeners
const button = document.querySelector("#event-button");
button.addEventListener("click", function () {
  alert("Hey there!"); // modal UI
});

const input = document.querySelector("#input-to-copy");
const paragraph = document.querySelector("#p-to-copy-to");
input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});

const colorInput = document.querySelector(".color-input");
const colorParagraph = document.querySelector(".color-box");
colorInput.addEventListener("change", function () {
  colorParagraph.style.backgroundColor = colorInput.value;
});

// Method chaining
document
  .querySelector("#button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked button #${event.target.innerText}`);
});

// JSON

// AJAX (Asynchronous JavaScript and XML)

// async/await (Promise)