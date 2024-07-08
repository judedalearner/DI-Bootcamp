const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
 
fruits.shift();
 
fruits.sort();
 
fruits.push("Kiwi");

 
const indexToRemove = fruits.indexOf("Apples");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}

 
fruits.reverse();

console.log(fruits);

//exercise 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// Access "Oranges"
const oranges = moreFruits[1][1][0];

console.log(oranges); // This will log "Oranges" to the console

