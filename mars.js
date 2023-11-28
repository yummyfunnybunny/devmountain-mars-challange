alert("Hello!");
alert("prepare for the adventure of a life-time! We are going to Mars!");
alert("Houston - prepare for lift-off!");

const username = prompt("Please provide your name, astronaut!");

alert(`Hello, ${username}!`);

// explain the premise of the game
alert(
  `We are going to ask you a series of questions in order to cater this trip to you. Once completed, we will load you up and send you off to die in the freezing cold of space.`
);

let excited = prompt("Are you excited? (Type Y or N)");
excited = excited.toUpperCase().trim();

// if (excited === "Y") {
//   alert(`I knew you'd say that. It's so cool that you're going to Mars!`);
// } else if (excited === "N") {
//   alert(`Well, it's too late to back out now.`);
// } else {
//   alert(`I don't quite understand what you mean, but you're going anyway!`);
// }

if (excited.startsWith("Y") === true) {
  alert(`I knew you'd say that. It's so cool that you're going to Mars!`);
} else if (excited.startsWith("N") === true) {
  alert(`Well, it's too late to back out now.`);
} else {
  alert(`I don't quite understand what you mean, but you're going anyway!`);
}

// Suitcases

alert(`It's time to pack for your trip to Mars.`);

let numSuitCases = prompt(`How many suitcases do you plan to bring?`);

numSuitCases = Number(numSuitCases);

if (numSuitCases > 2) {
  alert(`That's way too many! You'll have to pack more lightly.`);
} else {
  alert(`Perfect. You'll certainly fit in the spaceship!`);
}

// Companion Animal

alert("You're allowed to bring one companion animal with you.");
let companionType = prompt(
  `What kind of companion animal would you like to bring?`
);
let companionName = prompt(`What is your companion's name?`);

let firstLetter = companionName[0].toUpperCase();
let otherLetters = companionName.slice(1).toLowerCase();
companionName = `${firstLetter}${otherLetters}`;

firstLetter = companionType[0].toUpperCase();
otherLetters = companionType.slice(1).toLowerCase();
companionType = `${firstLetter}${otherLetters}`;

alert(
  `Excellent! So you will be brining ${companionName} the ${companionType}!`
);

// Decor

alert("NASA has a interior design team offering to outfit your space ship.");
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decor;
let decorChoice = prompt(`Which would you like? 
A - Sleek, modern minimalism
B - Retro/vintage space age
C - Victorian-era steampunk`);

decorChoice = decorChoice.toUpperCase();

if (decorChoice === "A") {
  decor = "Sleek, modern minimalism";
} else if (decorChoice === "B") {
  decor = "Retro/vintage space age";
} else if (decorChoice === "C") {
  decor = "Victorian-era steampunk";
} else {
  decor = "a custom design";
}

alert(`Great! We'll decorate your spaceship with ${decor}!`);

// Impress the user
alert(
  `${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship!`
);

// Take off!
// alert(`5...`);
// alert(`4...`);
// alert(`3...`);
// alert(`2...`);
// alert(`1...`);
// alert(`*** LIFT OFF!!! ***`);

let timer = 5;

while (timer > 0) {
  alert(`${timer}...`);
  timer--;
}
alert(`*** LIFT OFF!!! ***`);
