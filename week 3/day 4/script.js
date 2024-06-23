//exercise 1

let x = 12;
let y = 22;

if (x > y) {
    console.log('x is the biggest number');
} else if (y > x) {
    console.log('y is the biggest number');
} else {
    console.log('Both numbers are equal');
}


// exercise 2

let newDog = "Chihuahua";

 
console.log("Number of letters in newDog: " + newDog.length);

 
console.log("Uppercase: " + newDog.toUpperCase());

 
console.log("Lowercase: " + newDog.toLowerCase());

 
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it's my favorite dog breed");
} else {
    console.log("I don't care, I prefer cats");
}

// exercise 3

const userInput = prompt("Please enter a number:");
const number = parseFloat(userInput);

if (!isNaN(number)) {
    console.log(number + (number % 2 === 0 ? " is an even number." : " is an odd number.")) }


//exercise 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
    console.log("no one is online");
} else if (users.length === 1) {
    console.log(users[0] + " is online");
} else if (users.length === 2) {
    console.log(users[0] + " and " + users[1] + " are online");
} else {
    const additionalUsers = users.length - 2;
    console.log(users[0] + ", " + users[1] + ", and " + additionalUsers + " more are online");
}
