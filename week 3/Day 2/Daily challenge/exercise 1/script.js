const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

 
fruits.shift();

 
fruits.sort();

 
fruits.push("Kiwi");

 
const valueToRemove = fruits.valueOf("Apples");
if (valueToRemove !== -1) {
    fruits.splice(valueToRemove, 1);
}

 
fruits.reverse();

console.log(fruits);
