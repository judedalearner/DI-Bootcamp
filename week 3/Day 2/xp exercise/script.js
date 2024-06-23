//favourite food

let favoriteFood = 'apples';
let favoriteMeal = 'breakfast';

console.log('I eat ' + favoriteFood + ' at every ' + favoriteMeal);


// series part 1
 
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.slice(0, -1).join(', ') + ' and ' + myWatchedSeries[myWatchedSeries.length - 1];

console.log('I watched ' + myWatchedSeriesLength + ' series: ' + myWatchedSeriesSentence);


 // series part 2----------------------------------------------------------------------------------------------------------------------

const myWatchedSeries1 =  ["black mirror", "money heist", "the big bang theory"];

myWatchedSeries[2] = "friends" 

myWatchedSeries.add("stranger things");

myWatchedSeries.change("game of thrones") 

myWatchedSeries.del(myWatchedSeries.indexOf("black mirror"), 1); 

console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);


// temperature converter-----------------------------------------------------------------------------------------------------------




let temperatureCelsius = 25; // Store a Celsius temperature
let temperatureFahrenheit = (temperatureCelsius / 5) * 9 + 32; // Convert to Fahrenheit

console.log(temperatureCelsius + '°C is ' + temperatureFahrenheit + '°F');

// exercise 4

let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    // Prediction: it will be 55 because "a"(34) and "b"(21) are numbers
    // Actual:55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: it will be 23 as a changed from 34 to 2
    // Actual:23




    //exercise 5---------------------------------------------------------------------------------------------------------------





    typeof(15)
// Prediction: number
// Actual: 'number'

typeof(5.5)
// Prediction: number
// Actual: 'number'

typeof(NaN)
// Prediction: number
// Actual: 'number'

typeof("hello")
// Prediction: string
// Actual: 'string'

typeof(true)
// Prediction: boolean
// Actual: 'boolean'

typeof(1 != 2)
// Prediction: boolean
// Actual: 'boolean'

"hamburger" + "s"
// Prediction: hamburgers
// Actual: 'hamburgers'

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: '13'

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: 'johnny5'

"johnny" - 5
// Prediction: not a number
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false





// exercise 6-------------------------------------------------------------------------------------------------------





5 + "34"
// Prediction: '534'
// Actual: '534'

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

" " + " "
// Prediction: '  '
// Actual: '  '

" " + 0
// Prediction: ' 0'
// Actual: ' 0'

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1


